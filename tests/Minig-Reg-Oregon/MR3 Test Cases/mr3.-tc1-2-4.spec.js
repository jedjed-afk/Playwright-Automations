const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();

  // TODO: add test to which edit the SSN then the Eye button is removed on the Confirm SSN field
  
  // Test Case 1,2, and 4
  // TC-01 Pre-condtion = 3 Walkthrough is activited ( Profile, Appointment, and Calendar ) repectively.


  //Note
  // change name of Jobseeker on .env

  const loginUrl = 'https://www.oregon-dev.careeredgebeta.com/user/login';
  
  const randomNineDigits = () => String(Math.floor(100000000 + Math.random() * 900000000));



  test('MR-03', async({page}) => {
  test.setTimeout(5 * 60 * 1000); 

  /// TC-01 --
  await page.goto(loginUrl);
   
  // Jobseeker Login 
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.JOBSIK_EMAIL); //EDIT -- input email of the created jobseeker
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.JOBSIK_PASS); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click();
  // checks URL
  await expect(page).toHaveURL("https://www.oregon-dev.careeredgebeta.com/home", { timeout: 30000 });

  // Checks Icons/tabs
  const nav = page.locator('header');

  await expect(nav.getByText('Home', { exact: true })).toBeVisible();
  await expect(nav.getByText('Jobs', { exact: true })).toBeVisible();
  await expect(nav.getByText('Resources', { exact: true })).toBeVisible();
  await expect(nav.getByText('Appointments', { exact: true })).toBeVisible();
  await expect(nav.getByLabel('Calendar')).toBeVisible();
  await expect(nav.getByLabel('Notifications')).toBeVisible();
  // Heading and subtitle
  
  //await expect(page.getByText('Get started with WorkSource Oregon')).toBeVisible();
  //await expect(page.getByText('Finish setting up to unlock personalized job support.')).toBeVisible();

  // Progress
  //await expect(page.getByText('1 of 3 done')).toBeVisible();

  // Step cards
  await expect(page.getByText('Step 1 of 3', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Update your profile here' })).toBeVisible();
  await expect(page.getByText('Your profile isn\'t complete yet — open the menu under your avatar to finish it.', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Skip' })).toBeVisible();
  await page.getByRole('button', { name: 'Next' }).click();

  await expect(page.getByText('Step 2 of 3', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Book an appointment here' })).toBeVisible();
  await expect(page.getByText('You haven\'t booked one yet — meet with a career counselor whenever you\'re ready.', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Skip' })).toBeVisible();
  await page.getByRole('button', { name: 'Next' }).click();

  await expect(page.getByText('Step 3 of 3', { exact: true })).toBeVisible();
  await expect(page.getByText('Enter a title, company, or keyword to get started.', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Search for jobs here' })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();
  await page.getByRole('button', { name: 'Got it' }).click();

  await page.getByRole('button', { name: 'My Profile' }).click();
  await page.getByRole('menuitem', { name: 'View Profile' }).click();
  await expect(page).toHaveURL(/\/job-seeker\/new-profile\//, { timeout: 30000 });
  await expect(page.getByText('Profile Completion 30%' )).toBeVisible({ timeout: 60000 }); ////
  

  // TC-02 --

  // Demographic Information Tile

  await page.getByRole('button', { name: 'Demographic Information' }).click();
  await page.getByRole('textbox', { name: 'SSN *' }).click();
  await page.getByRole('textbox', { name: 'SSN *' }).fill(randomNineDigits());
  await page.getByText('Gender', { exact: true }).click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByText('Sexual Orientation', { exact: true }).click();
  await page.getByRole('option', { name: 'Straight/Heterosexual' }).click();
  await page.getByText('Have you registered with the').click();
  await page.getByRole('option', { name: 'Not Applicable' }).click();
  await page.getByRole('radio', { name: 'No, I do not have a' }).check();
  await page.getByRole('combobox', { name: 'data[citizenship]' }).click();
  await page.getByRole('option', { name: 'Citizen of U.S. or U.S.' }).click();
  await page.getByRole('radiogroup', { name: 'Are you of Hispanic or Latino' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('checkbox', { name: 'American Indian/Alaskan Native' }).check();
  await page.getByRole('radiogroup', { name: 'Do you primarily speak a' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Would you like to be' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Update', exact: true }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByText('Profile Completion 35%').click();


  // Demographic section is marked complete after saving
  await expect(page.getByRole('button', { name: /Demographic Information.*100%/ })).toBeVisible({ timeout: 30000 });
  
  // Skills, Technologies, Summary Tile
  await page.getByRole('button', { name: 'Skills, Technologies, Summary' }).click();
  await page.getByRole('textbox', { name: 'Skills, Technologies,' }).click();
  await page.getByRole('textbox', { name: 'Skills, Technologies,' }).fill('test');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByText('Updated Successfully!').click();
   await page.getByText('Profile Completion 46%').click();

  //Contact Information Tile
  // Profile page can take a while to render its tiles
  await expect(page.getByRole('button', { name: 'Contact Information Contact' })).toBeVisible({ timeout: 60000 });
  await page.getByRole('button', { name: 'Contact Information Contact' }).click();
  await page.getByRole('radiogroup', { name: 'Are you homeless? Are you' }).getByLabel('No').check();
  await page.getByRole('textbox', { name: 'Address Line 1 Enter your' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 Enter your' }).fill('test');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('test');
  await page.getByRole('combobox', { name: 'data[primaryAddress.state]' }).click();
  await page.getByRole('textbox', { name: 'State' }).fill('wy');
  await page.getByRole('option', { name: 'Wyoming' }).click();
  await page.getByRole('textbox', { name: 'Primary Phone Number ,' }).click();
  await page.getByRole('textbox', { name: 'Primary Phone Number ,' }).fill('(565) 656-56565');
  await page.getByRole('radio', { name: 'Landline' }).check();
  await page.getByRole('checkbox', { name: 'Email' }).check();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByText('Updated Successfully!').click();
   await page.getByText('Profile Completion 56%').click();

  //Educational Background Tile
  await page.getByRole('button', { name: 'Educational Background' }).click();
  await page.getByText('Your Highest Education Level').click();
  await page.getByRole('option', { name: 'Attained a Bachelor\'s degree' }).click();
  await page.getByText('Are you attending school?').click();
  await page.getByRole('option', { name: 'No, Not Attending Any School' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByText('Updated Successfully!').click(); 
  await page.getByText('Profile Completion 67%').click();

  // Job Preference Tile
  await page.getByRole('button', { name: 'Job Preference Job Preference' }).click();
  await page.locator('.formio-component-currentEmploymentStatus .choices').click();
  await page.getByRole('option', { name: 'Working Full Time' }).click(); 
  await page.locator('.formio-component-unEmpEligibilityStatus .choices').click();
  await page.getByRole('option', { name: 'Neither Claimant nor Exhaustee' }).click();
  await page.getByRole('radiogroup', { name: 'Are you currently looking for' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Do you have any related' }).getByLabel('No').check();
  await page.getByRole('radio', { name: 'No, I have not recently' }).check();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('heading', { name: 'Update Employment History' }).click();
  await page.getByRole('dialog').getByText('Are you sure you want to').click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByText('Updated Successfully!').click();
  await page.getByText('Profile Completion 78%').click();


  //Employement History Tile
  await page.getByRole('button', { name: 'Employment History Employment' }).click();
  await page.getByRole('radio', { name: 'No' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Back to Profile Information' }).click();
  await page.getByText('Profile Completion 89%').click();

  //Resume Tile
  await page.getByRole('button', { name: 'My Resume My Resume 0%' }).click();
  await page.getByRole('textbox', { name: 'File Name *' }).click();
  await page.getByRole('textbox', { name: 'File Name *' }).fill('Test');
  {
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('C:/Users/ajregunay/Downloads/Family Size Verification Form (3).pdf');
  }
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
await page.pause();

  const modal = page.getByRole('dialog').filter({ hasText: 'Congratulations!' });
 
  // Modal is visible
  await expect(modal).toBeVisible();
 
  // Heading
  await expect(modal).toContainText('🎉');
  await expect(modal.getByText('Congratulations!')).toBeVisible();
 
  // Body copy
  await expect(modal).toContainText(
    'Your profile is 100% complete. Employers can now see a full picture of your experience, ' +
    'and applications will go faster since your information is already on file.'
  );
 
  // Action buttons
  await expect(modal.getByRole('button', { name: 'Book an Appointment' })).toBeVisible();
  await expect(modal.getByRole('button', { name: 'Explore Jobs' })).toBeVisible();
  await expect(modal.getByText('Stay on Profile', { exact: true })).toBeVisible();
 
  // Profile completion behind the modal
  await expect(page.getByText(/Profile Completion\s*100%/)).toBeVisible();
  await page.getByRole('button', { name: 'Stay on Profile' }).click();
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
 


  // TC04 -- & TC05 --

  //Login
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.JOBSIK_EMAIL); //EDIT -- input email of the created jobseeker
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.JOBSIK_PASS); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click(); 
  await expect(page).toHaveURL("https://www.oregon-dev.careeredgebeta.com/home", { timeout: 30000 });


    // Step cards
  //await expect(page.getByText('Step 1 of 3', { exact: true })).toBeVisible();
  //await expect(page.getByRole('heading', { name: 'Update your profile here' })).toBeVisible();
  //await expect(page.getByText('Your profile isn\'t complete yet — open the menu under your avatar to finish it.', { exact: true })).toBeVisible();
  //await expect(page.getByRole('button', { name: 'Skip' })).toBeVisible();
  //await page.getByRole('button', { name: 'Next' }).click();

  await expect(page.getByText('Step 1 of 2', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Book an appointment here' })).toBeVisible();
  await expect(page.getByText('You haven\'t booked one yet — meet with a career counselor whenever you\'re ready.', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Skip' })).toBeVisible();
  await page.getByRole('button', { name: 'Next' }).click();

  await expect(page.getByText('Step 2 of 2', { exact: true })).toBeVisible();
  await expect(page.getByText('Enter a title, company, or keyword to get started.', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Search for jobs here' })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();
  await page.getByRole('button', { name: 'Got it' }).click();

  });