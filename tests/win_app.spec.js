import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('WIN Application', async ({ page }) => {
   await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login'); // PPP
  //await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // DEV

  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com'); 
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS); // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS); // DEV
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  await page.pause();
 //  await expect(page.getByRole('cell', { name: 'Jedjed' })).toBeVisible();
 // await page.getByRole('cell', { name: 'Jedjed' }).click();
  await page.getByRole('radio', { name: 'WIN' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  // 1st Page //
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 2nd page //
  await page.getByRole('checkbox', { name: 'African American/Black' }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 3rd page
  await page.getByRole('radiogroup', { name: 'Are you the spouse of someone' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Have you served on active' }).getByLabel('No', { exact: true }).check();
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  await page.getByRole('radiogroup', { name: 'High school Diploma or' }).getByLabel('No', { exact: true }).check();
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();
  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).check();
  await page.locator('input[name="data[temporaryAssistance][eym5k5-e3s7t9]"]').nth(1).check();
  await page.locator('input[name="data[supplementalNutrition][eym5k5-e2fn2za]"]').nth(1).check();
  await page.locator('input[name="data[ticketToWorkHolderIssuedBySocialSecurityAdministration][eym5k5-e0ajkvi]"]').nth(1).check();
  await page.locator('input[name="data[englishLanguageLearner][eym5k5-el1ft8]"]').nth(1).check();
  await page.locator('input[name="data[basicSkillsDeficient][eym5k5-e2642og]"]').nth(1).check();
  await page.locator('input[name="data[exOffender][eym5k5-eiuaeze]"]').nth(1).check();
  await page.locator('input[name="data[displacedHomemaker][eym5k5-egouqw]"]').nth(1).check();
  await page.locator('input[name="data[tanfLifeEligibility][eym5k5-esabl0e]"]').nth(1).check();
  await page.locator('input[name="data[singleParentIncludingSinglePregnantWomen][eym5k5-e9ajik8]"]').nth(1).check();
  await page.locator('input[name="data[cspOrEstablishedPaternity][eym5k5-ek4wsri]"]').first().check();
  await page.locator('input[name="data[unemployed][eym5k5-e2lrxeb]"]').nth(1).check();
  await page.locator('input[name="data[underemployed][eym5k5-e7wx2vg]"]').nth(1).check();
  await page.locator('input[name="data[barriersChildSupportPayment][eym5k5-eivwjfi]"]').nth(1).check();
  await page.locator('input[name="data[childSupportPayment][eym5k5-ehdthjk]"]').nth(1).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});