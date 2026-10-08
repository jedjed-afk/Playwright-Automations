import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
// Do not fofget to change jobseeker name and email
test('CCP Application', async ({ page }) => {

  //await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login'); // PPP
  //await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // DEV
  await page.goto('https://www.wyo-dev.careeredgebeta.com/user/login '); // NEW DEV
  //await page.goto('https://www.oregon-dev.careeredgebeta.com/user/login '); // Oregon

  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com'); 
  //await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanger@careerteam.com'); //oregon
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS); // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS); // DEV and New DEV
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS); //Oregon
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  //await expect(page.getByRole('cell', { name: 'JedOneSeven' })).toBeVisible({ timeout: 80000 });  
  await page.getByRole('cell', { name: 'JedOneFour' }).click()
  await page.getByRole('radio', { name: 'CCP' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('Highest school grade completed').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  await page.getByRole('radiogroup', { name: 'Are you the spouse of someone' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Have you served on active' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Temporary Assistance to Needy' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Within two years of' }).getByLabel('No', {exact: true} ).check();

  await page.getByRole('radiogroup', { name: 'Supplemented Nutrition' }).getByLabel('No', {exact: true} ).check();

  await page.getByRole('radiogroup', { name: 'English language learner' }).getByLabel('No', {exact: true} ).check();

  await page.getByRole('radiogroup', { name: 'Basic skills deficient/loa' }).getByLabel('No', {exact: true} ).check();

  await page.getByRole('radiogroup', { name: 'individual has' }).getByLabel('No', {exact: true} ).check();

  await page.getByRole('radiogroup', { name: 'including' }).getByLabel('No', {exact: true} ).check();

  await page.getByRole('radiogroup', { name: 'Are you currently incarcerated?' }).getByLabel('Yes', {exact: true} ).check();
  await page.getByRole('radio', { name: 'Wyoming State Penitentiary (' }).check();
  await page.getByRole('radiogroup', { name: 'Interim Applicant?' }).getByLabel('Yes', {exact: true} ).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();
  

  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByRole('textbox', { name: 'Email' }).click();
  // await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+eseven@careerteam.com');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('High_lowers007!');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByRole('button', { name: 'My Profile' }).click();
  // await page.getByRole('menuitem', { name: 'View Profile' }).click();
  // await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  // await page.getByRole('button', { name: 'Applications' }).click();

  // const rows = page.getByRole('row')
  // .filter({ hasText: 'CCP' })                        /////// change as needed based on what program in this case CCP
  // .filter({ hasText: 'Participant sign is pending' }); /////// change as needed based on who needs to sign

  // await rows.first().getByRole('button').last().click();

  // await page.getByRole('menuitem', { name: 'Sign Application' }).click();
  // await page.getByRole('checkbox', { name: 'I agree to sign the' }).check();
  // await page.getByRole('button', { name: 'Save & Close' }).click();
  // await page.pause();
  // await page.getByRole('button', { name: 'Profile options' }).click();
  // await page.getByText('Logout').click();

  // ///////////////////// Log In of Case Manager ///////////////////////
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByRole('textbox', { name: 'Email' }).click();
  // await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS);
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByRole('button', { name: 'Individuals' }).click();
  // await page.getByRole('tab', { name: 'All Individuals' }).click();
  // await page.pause();
  // await page.getByRole('cell', { name: 'JedOneSeven' }).click();           /////// change name
  // await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  // await page.getByRole('button', { name: 'Applications' }).click();
  // await page.pause();

  // const column = page.getByRole('cell')
  // .filter({ hasText: 'CCP' })                        /////// change as needed based on what program in this case CCP
  // .filter({ hasText: 'Case Manager sign is pending' }); /////// change as needed based on who needs to sign

  // await column.first().getByRole('button').last().click();

  // await page.getByRole('menuitem', { name: 'Sign Application' }).click();
  // await page.getByRole('checkbox', { name: 'I agree to sign the' }).check();
  // await page.getByRole('button', { name: 'Save & Close' }).click();
  // await page.getByRole('tab', { name: 'Programs Overview' }).click();
  // await page.getByRole('button', { name: 'Open CCP application' }).click();
  // await page.getByRole('button', { name: 'Submit for Approval' }).click();
  // await page.getByRole('button', { name: 'Yes' }).click();
  // await page.getByRole('button', { name: 'Profile options' }).click();
  // await page.getByText('Logout').click();


  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByRole('textbox', { name: 'Email' }).click();
  // await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+centermanager@careerteam.com');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('DCP3xmu0rch4vrm.wjd');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByRole('button', { name: 'Individuals' }).click();
  // await page.pause();
  // await page.getByRole('cell', { name: 'JedOneSeven' }).click();           ///////// change name
  // await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  // await page.getByRole('tab', { name: 'Programs Overview' }).click();
  // await page.getByText('Submitted for Approval').click();
  // await page.getByRole('button', { name: 'Determine Eligibility' }).click();
  // await page.getByRole('radio', { name: 'Approve' }).check();
  // await page.getByRole('checkbox', { name: 'I agree to sign the' }).check();
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.pause();
});

