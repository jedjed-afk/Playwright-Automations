// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  /*Maximum time one test can run for. */
  //timeout: 10 * 1000,  ////////////////////////////////////
  /*maximum time expect() should wait for the condition to be met.*/
 // expect: { timeout: 2000},///////////////////////////////////

  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0, // can be enabled ///comment this out if you need to use number of retiries below ////
  //retries: 1,  /////////////////////////////////////////////////////////////////
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    //video: 'on',///////////////////////////////////////////////////////////
    launchOptions: {slowMo: 1000}, ///////////////////////////////////////
    // Without this, a single click()/locator wait on an element that never appears blocks until the
    // whole test's timeout (up to 15min in some WIOA specs) instead of failing fast with a clear error.
    actionTimeout: 30000,

    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
  
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

    //trace: 'on-first-retry', ///////////////////////////////////////////// /
    //trace: 'on', // always on in every test
    trace: 'off', // always off in every test
    // trace: 'retain-on-failure', //only when test fails

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },

    //{
     // name: 'firefox',
      //use: { ...devices['Desktop Firefox'] },
    //},

    //{
      //name: 'webkit',
      //use: { ...devices['Desktop Safari'] },
    //},

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

