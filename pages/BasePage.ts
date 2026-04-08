import {Page} from "@playwright/test";

class BasePage {

    // Every page needs a browser page object
    readonly page: Page;

    // Constructor - accepts page and stores it
    constructor( page: Page) {
        this.page = page;
    }

    //Method for navigating to URL
    async navigate(path: string): Promise<void> {
        await this.page.goto(path);
    }

    //Method to get the title
    async getTitle(): Promise<string> {
       return await this.page.title();
    }

    //Method to load the page
    async waitToLoad(): Promise<void>{
        await this.page.waitForLoadState('networkidle');

    }
}

export default BasePage;