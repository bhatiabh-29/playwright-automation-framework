import {test, expect} from "@playwright/test";

test("Successfully Logged In", async  ({page}) =>{

    //Navigate to the login page
    await page.goto("/login");

    //find the username field and type in the username
    await page.getByLabel('Username').fill("tomsmith");

    //Find the password field and type in the password
    await page.getByLabel('Password').fill("SuperSecretPassword!");

    //Click  the login button
    await page.getByRole("button", {name: 'Login'}).click();

    //Assert that the user is successfully logged in by checking for the presence of a logout button and Text Secure Area
    await expect(page.getByRole('heading', {name: 'Secure Area', exact: true})).toBeVisible();
})

test("Failed Logged In", async ({page}) =>{

    //navigate to the login page
    await page.goto("/login");

    //find the username and password field and enter incorrect details
    await page.getByLabel('Username').fill("Invalidusername");
    await page.getByLabel('Password').fill("InvalidPassword");

    //find the login button and click on it
    await page.getByRole("button", {name: "login"}).click();

    //Aseert that the user is not logged in by checking for the presence of an error message
    await expect(page.getByText("Your username is invalid!")).toBeVisible();
})

test("Logout", async ({page}) =>{

    //navigate to the url
    await page.goto("/login");

    //Find Username and password field and enter correct details
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill("SuperSecretPassword!");

    //find the login button and click on it
    await page.getByRole('button', {name: 'Login'}).click();

    //Once the user is loggen in find the text " You logged into a secure area!" and assert that it is visible
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();

    //Search for the logout button and click on it
    await page.locator('i', {hasText: 'Logout'}).click();


    //Asser that the user is successfully logged out by checking for the presence of the login button and text "You logged out of the secure area!"
    await expect(page.getByText('You logged out of the secure area!')).toBeVisible();


})


