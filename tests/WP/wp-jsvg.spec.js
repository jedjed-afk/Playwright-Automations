import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle


test('WP Application', async ({ page }) => {

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
  await page.pause();
  // Select a Program options: CCP | Wagner Peyser | WIN | WIOA | IDST | SNAP E&T
  await page.getByRole('radio', { name: 'Wagner Peyser' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(3000);
  await page.pause();
  ///////////////////// Page 1 (Basic Information) ///////////////
  await page.getByRole('checkbox', { name: 'JVSG' }).check();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  // Save and Close Page 2 
  await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Edit application' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(3000);

  ///////////////////// Page 2 (Demographic Information) ////////////
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(3000);


  ///////////////////// Page 3 (Veterans Information) ////////////////////

  await page.getByRole('radiogroup', { name: 'Are you currently in the U.S' }).getByLabel('Yes').check();
  // Currently in the U.S. Military or a Veteran options: Yes | No
  await page.getByRole('radiogroup', { name: 'I am on active duty and wounded, ill, or injured AND receiving treatment at a' }).getByLabel('No', { exact: true }).check();
  // Wounded, ill, or injured AND receiving treatment options: Yes | No
  await page.getByRole('radiogroup', { name: 'Were you referred from the' }).getByLabel('No', { exact: true }).check();
  // Referred from the Department of Veteran Affairs options: Yes | No
  await page.getByRole('radiogroup', { name: 'I am on active duty and within 1 year of separation or 2 years of retirement,' }).getByLabel('No', { exact: true }).check();
  // Within 1 year of separation/2 years of retirement + TAP options: Yes | No
  await page.getByRole('radiogroup', { name: 'I was a member of a Guard/' }).getByLabel('No', { exact: true }).check();
  // Member of a Guard/Reserve component options: Yes | No
  await page.getByRole('textbox', { name: 'Most Recent Active Duty Begin' }).click();
  await page.getByRole('textbox', { name: 'Most Recent Active Duty Begin' }).fill('08/20/2026_'); // This can be changed based on date you want
  await page.getByRole('textbox', { name: 'Most Recent Active Duty Begin' }).press('Enter');
  //await page.getByLabel('August 1,').first().click();
 
  await page.getByRole('textbox', { name: 'Most Recent Active Duty End' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Most Recent Active Duty End' }).fill('08/20/2026_'); // This can be changed based on date you want
  await page.getByRole('textbox', { name: 'Most Recent Active Duty End' }).press('Enter');
  //await page.getByLabel('August 31,').nth(1).click();
  await page.getByText('Branch of Service').click();
  await page.getByRole('option', { name: 'Air Force' }).click();
  // Branch of Service options: Not applicable | Army | Navy | Air Force | Marines | Coast Guard | National Guard/Reserves | Space Force
  await page.getByText('Most Recent Character of').click();
  await page.getByRole('option', { name: 'Honorable', exact: true }).click();
  // Most Recent Character of Service Received options: Honorable | Under Honorable Conditions (General) | Under Other Than Honorable Conditions | Bad Conduct | Dishonorable | Uncharacterized | I do not wish to answer | Other (please explain)
  await page.getByRole('radiogroup', { name: 'Do you have prior service' }).getByLabel('No', { exact: true }).check();
  // Do you have prior service dates? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Received a Military Campaign' }).getByLabel('Yes', { exact: true }).check();
  // Received a Military Campaign Badge options: Yes | No | Participant Did not Self Identify
  await page.getByRole('radiogroup', { name: 'I served in the Republic of' }).getByLabel('No', { exact: true }).check();
  // Served in the Republic of Vietnam options: Yes | No
  await page.getByRole('radiogroup', { name: 'Any part of my active duty service was between August 5, 1964, and May 7, 1975.' }).getByLabel('No', { exact: true }).check();
  // Active duty service between Aug 5, 1964 and May 7, 1975 options: Yes | No
  await page.getByRole('radiogroup', { name: 'Service-Connected Disabled' }).getByLabel('No', { exact: true }).check();
  // Service-Connected Disabled Veteran options: Entitled to VA compensation/pending claim | Released from active duty due to service-connected disability | Have another disability | No | I do not wish to disclose | Participant did not self-identify
  ///////////////////////////////////
  await page.getByRole('radiogroup', { name: 'Received Services from'}).getByLabel('No', { exact: true}).check();

  await page.getByRole('radiogroup', { name: 'I have been subjected to any' }).getByLabel('No', { exact: true }).check();
  // Subjected to any stage of the criminal justice process options: Yes | No | I do not wish to disclose
  await page.getByRole('radiogroup', { name: 'I am unemployed and available' }).getByLabel('No', { exact: true }).check();
  // Unemployed and available to work options: Yes | No | Not Sure
  await page.getByRole('radiogroup', { name: 'Homeless Veteran' }).getByLabel('No', { exact: true }).check();
  // Homeless Veteran options: Yes | No
  await page.getByRole('radiogroup', { name: 'I am the head of a single-' }).getByLabel('No', { exact: true }).check();
  // Head of a single-parent household options: Yes | No | I do not wish to disclose
  await page.getByRole('radiogroup', { name: 'My total family income does' }).getByLabel('No', { exact: true }).check();
  // Total family income does not exceed poverty line/70% LLSIL options: Yes | No
  await page.getByRole('radiogroup', { name: 'I am the spouse or family' }).getByLabel('No', { exact: true }).check();
  // Spouse or family caregiver of a wounded, ill, or injured service member options: Yes | No | I do not wish to disclose
  await page.getByRole('radiogroup', { name: 'My spouse was a veteran who' }).getByLabel('No', { exact: true }).check();
  // Spouse was a veteran who died from a service-connected disability options: Yes | No | I do not wish to disclose
  await page.getByRole('radiogroup', { name: 'My spouse has (or my deceased' }).getByLabel('No', { exact: true }).check();
  // Spouse has/had a total and permanent service-connected disability rating options: Yes | No | I do not wish to disclose
  await page.getByRole('radio', { name: 'None of the above' }).check();

  await page.getByText('Veteran Status', { exact: true }).click();
  await page.getByRole('option', { name: 'Yes <= 180 days' }).click();
  await page.getByRole('radiogroup', { name: 'Recently Separated Veteran ('}).getByLabel('No', { exact:true}).check();
  await page.getByRole('radiogroup', { name: 'Were you referred or offered' }).getByLabel('None selected').check();
  await page.getByRole('radiogroup', { name: 'Were you assessed by the' }).getByLabel('None selected').check();
  await page.getByRole('radiogroup', { name: 'Are you a veteran who, while' }).getByLabel('No', { exact:true}).check();
  await page.getByRole('radiogroup', { name: 'Attended any Off-Base' }).getByLabel('No', { exact:true}).check();

  // Active-duty spouse status options: Missing in action | Captured in the line of duty by a hostile force | Forcibly detained or interned by a foreign government power | None of the above
 //await page.getByPlaceholder('Would you like to be').nth(1).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(3000);
  ///////////////////// Page 4 (Employment Information) //////////////////
  // Employment Status options: Employed | Employed, but Received Notice of Termination of Employment or Military Separation is pending | Not in labor force, not actively looking for work (including Incarcerated Individuals) | Unemployed, looking for work
  await page.getByText('Employment Status', { exact: true }).click();
  await page.getByRole('option', { name: 'Employed', exact: true }).click();
  // In a Registered Apprenticeship Program options: Yes | No | Not Disclosed
  await page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true }).click();
  // Unemployment Eligibility Status options: Neither Claimant nor Exhaustee | Eligible Claimant referred by WPRS (disabled) | Claimant | Exhaustee | Unknown
  await page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' }).click();
  // Long-Term Unemployed options: Yes, Unemployed >= 27 consecutive weeks | Yes, other Disaster DWG LTU definition | Yes, Unemployed >= 27 non-consecutive weeks in past 12 months | No
  await page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true }).click();
  // Attended a Rapid Response Orientation options: Yes | No
  await page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true }).click();
  // Eligible Migrant and Seasonal Farmworker Status options: Seasonal Farmworker Adult | Migrant Farmworker Adult | MSFW Youth | Dependent Adult | Dependent Youth | No
  await page.getByLabel('data[').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Migrant Farmworker Adult' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // Unemployed due to layoff or termination options: Yes | No
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No').click();

   // Save and Close Page 4
  await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Edit application' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();


  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
 /////////////////////// Page 5 (Education And Public Assistance) ////////////////
  // Highest School Grade Completed options: No School Grades Completed | 1st Grade Completed | 2nd Grade Completed | 3rd Grade Completed | 4th Grade Completed | 5th Grade Completed | 6th Grade Completed | 7th Grade Completed | 8th Grade Completed | 9th Grade Completed | 10th Grade Completed | 11th Grade Completed | 12th Grade Completed
  await page.getByLabel('data[highestSchoolGradeCompleted]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  // Highest Educational Level Completed options: High School Diploma | High School Equivalency Diploma | Certificate of Attendance/Completion (Disabled Individuals) | 1 + year of college or technical schooling | Vocational School Certificate | Associate's Degree | Bachelor's Degree | Higher than bachelor's degree | No Education Level Completed
  await page.getByLabel('data[highestEducationalLevelCompleted]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'High School Equivalency' }).click();
  // School Status options: Yes, Attending High School, Junior High, Middle or Elementary School | Yes, Attending An Alternative High School | Yes, Attending College or a Technical or Vocational School | No, Not Attending Any School
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Yes, Attending High School,' }).click();
  // Receiving services from Adult Education (WIOA Title II) options: Yes | No | Did Not Self-Identify
  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).click();
  // Receiving services from YouthBuild options: Yes | No | Did Not Self-Identify
  await page.getByRole('radiogroup', { name: 'Receiving services from YouthBuild *' }).getByLabel('No', { exact: true }).click();
  // Receiving services from Job Corps options: Yes | No | Did Not Self-Identify
  await page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true }).click();
  // Receiving services from Vocational Education (Carl Perkins) options: Yes | No | Did Not Self-Identify
  await page.getByRole('radiogroup', { name: 'Receiving services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true }).click();
  // Temporary Assistance for Needy Families (TANF) recipient options: Yes | No
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true }).click();
  // Supplemental Security Income (SSI) recipient options: Yes | No
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true }).click();
  // Supplemental Nutrition Assistance Program (SNAP) Recipient options: Yes | No
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true }).click();
  // General Assistance (GA) Recipient options: Yes | No
  await page.getByRole('radiogroup', { name: 'General Assistance (GA)' }).getByLabel('No', { exact: true }).click();
  // Refugee Cash Assistance (RCA) Recipient options: Yes | No
  await page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA' }).getByLabel('No', { exact: true }).click();
  // Social Security Disability Insurance (SSDI) recipient options: Yes | No
  await page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true }).click();
  // Youth Currently living in High Poverty Area options: Yes | No | Not Provided
  await page.getByRole('radiogroup', { name: 'Youth Currently living in' }).getByLabel('No', { exact: true }).click();
  // Foster Care Payments options: Yes | No
  await page.getByRole('radiogroup', { name: 'Foster Care Payments' }).getByLabel('No', { exact: true }).click();
  // Youth currently receives/eligible for free or reduced lunch options: Yes | No
  await page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('No', { exact: true }).click();
  // Receiving Services under SNAP Employment and Training Program options: Yes | No | Unknown
  await page.getByRole('radiogroup', { name: 'Receiving Services under SNAP' }).getByLabel('No', { exact: true }).click();
  // Ticket-to-Work Holder issued by Social Security Administration options: Yes | No | Unknown
  await page.getByRole('radiogroup', { name: 'Ticket-to-Work Holder issued by Social Security Administration' }).getByLabel('No', { exact: true }).click();
  // The Ticket-to-Work has been assigned an employment network options: Yes | No
  await page.getByRole('radiogroup', { name: 'The Ticket-to-Work has been assigned an employment network' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  ///////////////////// Page 6 9Barriers and Miscellaneous) ////////////////////
  // English Language Learner options: Yes | No
  await page.getByRole('radiogroup', { name: 'English Language Learner *' }).getByLabel('No').click();
  // Basic Skills Deficient/Low Levels of Literacy options: Yes | No
  await page.getByRole('radiogroup', { name: 'Basic Skills Deficient/Low' }).getByLabel('No').click();
  // Runaway options: Yes | No
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').click();
  // Foster Care Status options: Yes, Currently In | Yes, Aged Out | Yes,16 & left Foster Care | No
  await page.getByRole('radiogroup', { name: 'Foster Care Status *' }).getByLabel('No').click();
  // Ex-Offender options: Yes | No | Did not Self-Identify
  await page.getByRole('radiogroup', { name: 'Ex-Offender *' }).getByLabel('No', { exact: true }).click();
  // Single Parent options: Yes | No | Did not Self-Identify
  await page.getByRole('radiogroup', { name: 'Single Parent' }).getByLabel('No', { exact: true }).click();
  // Within 2 years of exhausting TANF lifetime eligibility options: Yes | No
  await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).click();
  // Displaced Homemaker options: Yes | No
  await page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true }).click();
  // Cultural Barriers options: Yes | No | Did not Self-Identify
  await page.getByRole('radiogroup', { name: 'Cultural Barriers' }).getByLabel('No', { exact: true }).click();
  // Are you required to pay child support options: Yes | No | Did Not Wish to Identify
  await page.getByRole('radiogroup', { name: 'Are you required to pay child' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();
  
  //////////////////// Check if Activity 102 is fired
  
  //await page.getByRole('tab', { name: 'Activities' }).click();

  //const row = page.locator('table tbody tr', { hasText: '102 - P - Initial Assessment' });

  //await expect(row.locator('td:nth-child(1)')).toHaveText('102 - P - Initial Assessment');
  //await expect(row.locator('td:nth-child(2)')).toHaveText('Wagner-Peyser');
  //await expect(row.locator('td:nth-child(3)')).toHaveText('09/10/2026');
  //await expect(row.locator('td:nth-child(4)')).toHaveText('09/10/2026');
  //await expect(row.locator('td:nth-child(5)')).toHaveText('12/10/2026');
  //await expect(row.locator('td:nth-child(6)')).toHaveText('09/10/2026');
  //await expect(row.locator('td:nth-child(7)')).toHaveText('Yes'); 
  //await expect(row.locator('td:nth-child(8)')).toHaveText('Closed');

  await page.pause(); 


  ///////////////////// Review Button ///////////////////////
  await page.getByRole('tab', { name: 'Application' }).click();
  await page.getByRole('button', { name: 'Preview eligibility' }).first().click(); /// just change this to check which subprogram
  await page.getByRole('heading', { name: 'Contact information' }).waitFor();

  // --- Page 1: Basic Information ---
  await expect(page.getByRole('radiogroup', { name: 'Please review the recommendations' }).getByRole('checkbox', { name: 'Wagner-Peyser' })).toBeChecked();
  //await expect(page.getByRole('textbox', { name: 'First Name *' })).toHaveValue('SecondJade');
  //await expect(page.getByRole('textbox', { name: 'Last Name *' })).toHaveValue('Check');
  //await expect(page.getByRole('textbox', { name: 'Social Security Number (SSN)' })).toHaveValue('657-36-3837');
  // await expect(page.getByRole('textbox', { name: 'Address Line 1 *' })).toHaveValue('Cheyenne');
  //await expect(page.locator('.formio-component-state .choices__list--single .choices__item--selectable')).toContainText('Wyoming');
  //await expect(page.getByRole('textbox', { name: 'City *' })).toHaveValue('Cheyenne');
  //await expect(page.getByRole('textbox', { name: 'Zip Code *' })).toHaveValue('82001');
  //await expect(page.getByRole('radiogroup', { name: 'Is Mailing Address same as the Residential Address?' }).getByLabel('Yes', { exact: true })).toBeChecked();
  //await expect(page.getByRole('textbox', { name: 'Primary Phone Number' })).toHaveValue('3473847383');
  //await expect(page.getByRole('radiogroup', { name: 'Primary Phone Type *' }).getByLabel('Message Only', { exact: true })).toBeChecked();
  //await expect(page.getByText('No alternate contact added yet.')).toBeVisible();
  // --Page 1
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('heading', { name: 'Demographic Information' }).waitFor();

  // --- Page 2: Demographic Information ---
  await expect(page.getByRole('textbox', { name: 'Date of Birth *' })).toHaveValue('08/29/2007');
  await expect(page.getByRole('textbox', { name: 'Age' })).toHaveValue('19');
  await expect(page.locator('.formio-component-gender .choices__list--single .choices__item--selectable')).toContainText('Male');
  await expect(page.locator('.formio-component-sexualOrientation .choices__list--single .choices__item--selectable')).toContainText('Straight/Heterosexual');
  await expect(page.locator('.formio-component-registeredWithTheSelectiveService .choices__list--single .choices__item--selectable')).toContainText('Not Applicable');
  await expect(page.locator('.formio-component-citizenship .choices__list--single .choices__item--selectable')).toContainText('Citizen of U.S. or U.S. Territory');
  await expect(page.getByRole('radiogroup', { name: 'Hispanic/Latino Heritage *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Race *' }).getByRole('checkbox', { name: 'White' })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Do you wish to disclose a disability?' }).getByLabel('No, I do not have a disability.', { exact: true })).toBeChecked();
  // --Page 2
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('heading', { name: 'Spouse or Caregiver of a Military Member' }).waitFor();

  // --- Page 3: Veterans Information ---
  await expect(page.getByRole('radiogroup', { name: 'I am the spouse or family caregiver' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'My spouse was a veteran who died' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'My spouse has (or my deceased spouse had)' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'My active-duty spouse is listed' }).getByLabel('None of the above', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Are you currently in the U.S. Military or a Veteran?' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('heading', { name: 'Eligible Veteran Status' })).toBeVisible();
  // --Page 3
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  //--- Page 4: Veteran Information---
  await expect(page.getByRole('radiogroup', { name: 'Are you currently in the U.S' }).getByLabel('Yes', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'I am on active duty and wounded, ill, or injured AND receiving treatment at a' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Were you referred from the' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'I am on active duty and within 1 year of separation or 2 years of retirement,' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'I was a member of a Guard/' }).getByLabel('No', { exact: true })).toBeChecked();
  // Most Recent Active Duty Begin/End dates
  await expect(page.getByRole('textbox', { name: 'Most Recent Active Duty Begin' })).toHaveValue('08/20/2026');
  await expect(page.getByRole('textbox', { name: 'Most Recent Active Duty End' })).toHaveValue('08/20/2026');
  // Branch of Service
  await expect(page.locator('.formio-component-branchOfService .choices__item--selectable')).toHaveText('Air Force'); // NOTE: confirm actual field key in dev tools
  // Most Recent Character of Service Received
  await expect(page.locator('.formio-component-mostRecentCharacterOfServiceReceived .choices__item--selectable')).toHaveText('Honorable'); // NOTE: confirm actual field key in dev tools
  await expect(page.getByRole('radiogroup', { name: 'Do you have prior service' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Received a Military Campaign' }).getByLabel('Yes', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'I served in the Republic of' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Any part of my active duty service was between August 5, 1964, and May 7, 1975.' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Service-Connected Disabled' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Received Services from' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'I have been subjected to any' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'I am unemployed and available' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Homeless Veteran' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'I am the head of a single-' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'My total family income does' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'I am the spouse or family' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'My spouse was a veteran who' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'My spouse has (or my deceased' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radio', { name: 'None of the above' })).toBeChecked();
  // Veteran Status dropdown
  await expect(page.locator('.formio-component-veteranStatus .choices__item--selectable')).toHaveText('Yes <= 180 days'); // NOTE: confirm actual field key in dev tools
  await expect(page.getByRole('radiogroup', { name: 'Recently Separated Veteran (' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Were you referred or offered' }).getByLabel('None selected', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Were you assessed by the' }).getByLabel('None selected', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Are you a veteran who, while' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Attended any Off-Base' }).getByLabel('No', { exact: true })).toBeChecked();
  // --- Page 4: Employment Information ---
  await expect(page.locator('.formio-component-employmentStatus .choices__item--selectable')).toHaveText('Employed');
  await expect(page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.locator('.formio-component-eligibleMigrantAndSeasonalFarmworkerStatus .choices__item--selectable')).toHaveText('Migrant Farmworker Adult'); // NOTE: confirm actual field key in dev tools
  await expect(page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No', { exact: true })).toBeChecked();
  // --- Page 5: Education and Public Assistance ---
  await expect(page.locator('.formio-component-highestSchoolGradeCompleted .choices__item--selectable')).toHaveText('12th Grade Completed');
  await expect(page.locator('.formio-component-highestEducationalLevelCompleted .choices__item--selectable')).toHaveText('High School Equivalency Diploma');
  await expect(page.locator('.formio-component-schoolStatus .choices__item--selectable')).toHaveText('Yes, Attending High School, Junior High, Middle or Elementary School'); // NOTE: confirm actual field key in dev tools
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from YouthBuild *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'General Assistance (GA)' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Youth Currently living in' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Foster Care Payments' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving Services under SNAP' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Ticket-to-Work Holder issued by Social Security Administration' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'The Ticket-to-Work has been assigned an employment network' }).getByLabel('No', { exact: true })).toBeChecked();
  // --- Page 6: Barriers and Miscellaneous ---
  await expect(page.getByRole('radiogroup', { name: 'English Language Learner *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Basic Skills Deficient/Low' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Foster Care Status *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Ex-Offender *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Single Parent' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Cultural Barriers' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Are you required to pay child' }).getByLabel('No', { exact: true })).toBeChecked();
  await page.pause();
});
