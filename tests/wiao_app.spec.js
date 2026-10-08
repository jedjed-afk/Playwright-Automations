import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  // await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/home');
  await page.getByRole('button', { name: 'Individuals' }).click();
  //await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/employer-jobseeker/individuals?tab=myIndividuals');
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  await page.getByLabel('Jed', { exact: true }).click();
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Evidences' }).click();
  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Test WIOA');
  await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
  await page.pause(); //I prefer to use this so I can choose the file I want to upload
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'more' }).click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.getByText('Select an evidence typeSelect').click();
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('self');
  await page.getByRole('option', { name: 'Self-Attestation' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();
});