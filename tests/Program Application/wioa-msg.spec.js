import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('test', async ({ page }) => {
  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  await page.getByRole('cell', { name: 'JedOneFour' }).click();
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Measurable Skill Gain (MSG/' }).click();
  await page.getByRole('button', { name: 'Upload MSG' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Test');

   {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/Selective%20Service%20-1712594370811.pdf'); // TODO: replace with the correct file for this section
  }

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Eligibility Approved').first().click();
  await page.getByRole('tab', { name: 'MSG / EFL' }).click();
  await page.getByRole('button', { name: 'Add MSG/EFL' }).click();
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Post-Secondary Transcript/' }).click(); // :: add options
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'None Selected' }).click();
  await page.pause();
  await page.getByRole('textbox', { name: 'Date Skill Attained *' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  //await page.getByLabel('August 22,').first().click();

  await page.getByText('Verified with document').click();
  await page.getByRole('option', { name: 'Test' }).first().click();
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  await page.getByText('SelectRemove item').click();
  await page.getByRole('option', { name: 'Face-to-Face' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).fill('Test Subject One');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('Test Case Notes One');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause()

});