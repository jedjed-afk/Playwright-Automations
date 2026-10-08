import { test, expect } from '@playwright/test';
//Created by Jade Team Eagle
test('WP Application', async ({ page }) => {
  await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login'); // PPP
  //await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // DEV

  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+straw@careerteam.com'); //EDIT -- input email of the created jobseeker
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill('uwc5XHZ_hvd2xrv1eam'); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByRole('button', { name: 'My Profile' }).click();
  await page.getByRole('menuitem', { name: 'View Profile' }).click();
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Signature' }).click();
  await page.pause(); /// sign manually
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Back to all Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Applications' }).click();
  await page.pause(); /// click the 3-dot menu of the correct application
  await page.getByRole('menuitem', { name: 'Sign Application' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the' }).click();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  //getByRole('button').filter({ hasText: /^$/ }) check if needed
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  await page.waitForTimeout(3500);
  
  // login again to sign application as case manager
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com'); //EDIT -- input email of the created jobseeker
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause(); 
  //// select the jobseker or you can inert the URL
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Signature' }).click();
  await page.pause(); /// sign manually
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Back to all Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Applications' }).click();
  await page.pause(); /// click the 3-dot menu of the correct application
  await page.getByRole('menuitem', { name: 'Sign Application' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the' }).click();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  //getByRole('button').filter({ hasText: /^$/ }) check if needed

  // Submit Application
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.pause();
  /// pick the application 
  await page.getByText('Application Initiated').click(); /// this could not be used id there are other application initiated. Just pick the application after the pause
  await page.getByRole('button', { name: 'Submit for Approval' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  // Logout
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  await page.waitForTimeout(3500);

  // login Center Manager for Eligibility
  await page.getByRole('button', { name: 'Login' }) ///ajregunay+centermanager@careerteam.com  //wdu-hgk@XZT5hnu!uzc
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+centermanager@careerteam.com'); //EDIT -- input email 
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill('wdu-hgk@XZT5hnu!uzc'); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.pause(); // pick the jobseeker
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Submitted for Approval') /// this could be used or just use pause 
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Determine Eligibility' }).click();
  await page.getByRole('radio', { name: 'Approve' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();

});