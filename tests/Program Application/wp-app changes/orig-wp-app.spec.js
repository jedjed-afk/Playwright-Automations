import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('WP Application', async ({ page }) => {
  await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login'); // PPP
  //await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // DEV
  //await page.goto('https://www.wyo-dev.careeredgebeta.com/user/login '); // NEW DEV
  //await page.goto('https://www.oregon-dev.careeredgebeta.com/user/login '); // Oregon

  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com'); 
  //await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanger@careerteam.com'); //oregon
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS); // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS); // DEV and New DEV
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS); //Oregon
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  await page.getByRole('cell', { name: 'JedOneTwo', exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  //await page.pause(); //click play after load is done
  await page.getByRole('cell', { name: 'JedOneTwo', exact: true }).click(); // change this to name of participanat w/o WP
  await page.getByRole('radio', { name: 'Wagner Peyser' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(3000);
  //page 1
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(3000);
  //page 2
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(3000);
  //page 3
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(3000);
  //page 4
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  await page.pause();
  await page.getByText('Employment Status', { exact: true }).click(); // check why not automated
  await page.getByRole('option', { name: 'Employed', exact: true }).click();

  await page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' }).click();
  await page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true }).click();
  await page.getByLabel('data[').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Migrant Farmworker Adult' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No').click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
 

  await page.getByLabel('data[highestSchoolGradeCompleted]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  await page.getByLabel('data[highestEducationalLevelCompleted]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'High School Equivalency' }).click();
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Yes, Attending High School,' }).click();
  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Receiving services from YouthBuild *' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Receiving services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'General Assistance (GA)' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Youth Currently living in' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Foster Care Payments' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Receiving Services under SNAP' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Ticket-to-Work Holder issued by Social Security Administration' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'The Ticket-to-Work has been assigned an employment network' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // page 6
  await page.getByRole('radiogroup', { name: 'English Language Learner *' }).getByLabel('No').click();
  await page.getByRole('radiogroup', { name: 'Basic Skills Deficient/Low' }).getByLabel('No').click();
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').click();
  await page.getByRole('radiogroup', { name: 'Foster Care Status *' }).getByLabel('No').click();
  await page.getByRole('radiogroup', { name: 'Ex-Offender *' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Single Parent' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Cultural Barriers' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Are you required to pay child' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();
  
});