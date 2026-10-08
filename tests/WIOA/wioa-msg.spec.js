import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('test', async ({ page }) => {
  await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login'); // PPP
  //await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // DEV
  //await page.goto('https://www.wyo-dev.careeredgebeta.com/user/login '); // NEW DEV
  //await page.goto('https://www.oregon-dev.careeredgebeta.com/user/login '); // Oregon

  /////////// Login for Admin///////////
  await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  //await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 
  //await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  //await page.getByRole('button', { name: 'Measurable Skill Gain (MSG/' }).click();
  //await page.getByRole('button', { name: 'Upload MSG' }).click();
  //await page.getByRole('textbox', { name: 'Name *' }).click();
  //await page.getByRole('textbox', { name: 'Name *' }).fill('Test');

   //{
    //const fileChooserPromise = page.waitForEvent('filechooser');
    //await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    //const fileChooser = await fileChooserPromise;
    //await fileChooser.setFiles('C:/Users/ajregunay/Downloads/Selective%20Service%20-1712594370811.pdf'); // TODO: replace with the correct file for this section
  //}

  //await page.getByRole('button', { name: 'Submit' }).click();
  ///await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('tab', { name: 'Programs Overview' }).click();

  await page.locator('[data-testid^="program-row-"]').filter({ hasText: 'WIOA' }).filter({ hasText: 'Eligibility Approved' }).getByRole('button', { name: 'Open WIOA application' }).click();
  //await page.getByRole('tab', { name: 'IEP' }).click();
  await page.pause()
  await page.getByRole('tab', { name: 'MSG / EFL' }).click();
  await page.getByRole('button', { name: 'Add MSG/EFL' }).click();
  // Skill Types options: None Selected | Post-Secondary Transcript/Report Card | Secondary Transcript/Report Card | Training Milestone / Established Milestone | Skills Progression | EFL Gain
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Post-Secondary Transcript/' }).click();
  // Type of Achievement options: None Selected | Completed minimum of 12 credit hours in semester and meets academic standards | Part-time student and completed at least 12 credit hours over the course of two completed consecutive semesters and meets academic standards
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'None Selected' }).click();
  await page.pause();
  await page.getByRole('textbox', { name: 'Date Skill Attained *' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  await page.getByText('Verified with document').click();
  await page.getByRole('option', { name: 'Test' }).first().click();
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  // Contact Type (Optional) options: Face-to-Face | Telephone | E-mail | Other | Form Insert | UI Reportable | Fax | Group Session | Mail | Virtual Meeting
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