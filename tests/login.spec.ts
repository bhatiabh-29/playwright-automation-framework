import {test, expect} from "@playwright/test";

test("Successfully Logged In", async  ({page}) =>{

    //Navigate to the login page
    await page.goto("https://the-internet.herokuapp.com/login");

    //find the username field and type in the username
    await page.getByLabel('Username').fill("tomsmith");

    //Find the password field and type in the password
    await page.getByLabel('Password').fill("SuperSecretPassword!");

    //Click  the login button
    await page.getByRole("button", {name: 'Login'}).click();

    //Assert that the user is successfully logged in by checking for the presence of a logout button and Text Secure Area
    await expect(page.getByRole('heading', {name: 'Secure Area', exact: true})).toBeVisible();

})

