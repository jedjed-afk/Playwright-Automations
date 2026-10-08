import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('WIOA Application', async ({ page }) => {
  //await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login'); // PPP
  //await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // DEV
  await page.goto('https://www.oregon-dev.careeredgebeta.com/user/login '); // Oregon

  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  //await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com'); 
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanger@careerteam.com'); //oregon
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS); // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS); // DEV
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS); //Oregon
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  await page.pause();
  await page.locator("[class='MuiBox-root css-19wv5ok'] div:nth-of-type(4) [tabindex]").click();
  await page.locator("[class='MuiStack-root css-8jb3y1'] > [tabindex]").click();

  await page.pause();
});
