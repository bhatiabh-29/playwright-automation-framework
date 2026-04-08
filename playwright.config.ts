import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load .env file
dotenv.config();

// @ts-ignore
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  //Look for all test files inside the tests/ folder
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // Reporter - HTML for local, line for CI
  reporter: process.env.CI ? 'line' : 'html',

  timeout: 60000,
  expect:{
    timeout: 10000,
  },


  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.BASE_URL,

    // Take screenshot only when test fails
    screenshot: 'only-on-failure',

    // Record video only when test fails
    video: 'retain-on-failure',

    // Collect trace on first retry
    trace: 'on-first-retry',

    // Default timeout for actions (click, fill etc)
    actionTimeout: 10000,

    // Default timeout for navigation
    navigationTimeout: 30000,

  },




  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }


    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
