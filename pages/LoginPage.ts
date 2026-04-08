import {Page, Locator} from "@playwright/test";
import BasePage from "./BasePage";



class LoginPage extends BasePage{



    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly successMessage: Locator;
    readonly errorMessage: Locator;


    constructor(page: Page) {
        //Call the parent constructor first(basepage)
        super(page);

        this.userNameInput = page.getByLabel('Username');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', {name:'Login'});
        this.successMessage = page.getByText('You logged into a secure area!');
        this.errorMessage = page.getByText('Your username is invalid!');
    }


    //Method to navigate to login page
    async navigateToLoginPage(){
        await this.page.goto("/login");
    }


    //Method to login
    async login(username: string, password: string){
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage(): Promise<string>{
        return await this.errorMessage.innerText();
    }
}

export default LoginPage;

