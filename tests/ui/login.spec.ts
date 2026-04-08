import {test, expect} from "@playwright/test";
import LoginPage from "../../pages/LoginPage";


test.describe('Login Tests', () =>{

    test("Successful Login", async ({page}) =>{
        const loginPage = new LoginPage(page);

        //use POM methods

        await loginPage.navigateToLoginPage();

        //read the username and password from the .env file
        await loginPage.login(
            process.env.APP_USERNAME ,
            process.env.APP_PASSWORD
        );

        //Assert
        await expect(loginPage.successMessage).toBeVisible();
    });

    test("failed login", async ({page}) =>{

        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login("test", "test");

        //Assewrt
        await expect(loginPage.errorMessage).toBeVisible();

    });

    test("Logout", async({page}) => {

        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(
            process.env.APP_USERNAME,
            process.env.APP_PASSWORD
        );

        //asset
        await expect(loginPage.successMessage).toBeVisible();

        //logout
        //Search for the logout button and click on it
        await page.locator('i', {hasText: 'Logout'}).click();
        //Asser that the user is successfully logged out by checking for the presence of the login button and text "You logged out of the secure area!"
        await expect(page.getByText('You logged out of the secure area!')).toBeVisible();

    });

})