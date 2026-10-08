import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
// Migra

test('WP Application', async ({ page }) => {
  //await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login'); // PPP
  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // DEV
  //await page.goto('https://www.wyo-dev.careeredgebeta.com/user/login '); // NEW DEV
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
  await page.pause(); //click play after load is done
  await page.getByRole('cell', { name: 'JedOneEleven', exact: true }).click(); // JedOneEleven Gram - participant w/o WP already applied (JedOneEight already has a WP application, which disables Continue)
  // Select a Program options: CCP | Wagner Peyser | WIN | WIOA | IDST | SNAP E&T
  await page.getByRole('radio', { name: 'Wagner Peyser' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(3000);
  await page.pause();
  //page 1 - Basic Information
  await page.getByRole('checkbox', { name: 'MSFW', exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(3000);
  //page 2 - Demographic Information
  // (this page also has these dropdowns, not interacted with here:
  //  Gender: Female | Male | I Do Not Wish to Answer
  //  Sexual Orientation: Straight/Heterosexual | Gay/Lesbian or Homosexual | Bisexual | Another sexual orientation | I Do Not Wish to Answer
  //  Registered with the Selective Service: Yes | Documented exemption from registration | No | Not Applicable | Registration Waived
  //  Citizenship: Citizen of U.S. or U.S. Territory | U.S. Permanent Resident | Alien/Refugee Lawfully Admitted to U.S. | None of the above
  //  Hispanic/Latino Heritage (radio): Yes | No | Information Not Provided
  //  Race (checkboxes): White | Black or African American | Asian | American Indian or Alaskan Native | Native Hawaiian or other Pacific Islander | Middle Eastern or North African | Unknown
  //  Disability disclosure (radio): Yes, I have a disability. | No, I do not have a disability. | I do not wish to disclose my disability status.)
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(3000);
  //page 3 - Veterans Information
  // (this page also has these radiogroups, not interacted with here:
  //  Spouse/caregiver of wounded service member: Yes | No | I do not wish to disclose
  //  Spouse died of service-connected disability: Yes | No | I do not wish to disclose
  //  Spouse has total/permanent service-connected disability rating: Yes | No | I do not wish to disclose
  //  Active-duty spouse status: Missing in action | Captured in the line of duty by a hostile force | Forcibly detained or interned by a foreign government power | None of the above
  //  Are you currently in the U.S. Military or a Veteran?: Yes | No)
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(3000);
  //page 4
   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();


  // Employment Status options: Employed | Employed, but Received Notice of Termination of Employment or Military Separation is pending | Not in labor force, not actively looking for work (including Incarcerated Individuals) | Unemployed, looking for work
  await page.getByText('Employment Status').click(); // check why not automated
  await page.getByRole('option', { name: 'Employed', exact: true }).click();
  // Unemployed due to layoff or termination options: Yes | No
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No').click();
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
  await page.pause();
  await page.getByRole('option', { name: 'Migrant Farmworker Adult' }).click();
  await page.getByRole('radiogroup', { name: 'Have you worked as a' }).getByLabel('Yes', { exact: true }).check();
  //await page.getByRole('radiogroup', { name: 'Have you been employed in the' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Have you been employed in the' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Have you traveled to the job' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Are you a full-time student?' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Is the individual' }).getByLabel('No', { exact: true }).click();
  
  //await page.getByPlaceholder('Are you a full-time student?').first().check();
  //await page.getByPlaceholder('Have you been employed the').nth(3).check();
  //await page.getByRole('radio', { name: 'Organized Group' }).check();
 //await page.getByRole('radio', { name: 'Family' }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  ///////////////////// Page 5 //////////////////

  
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();


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
  // page 6 - Barriers and Miscellaneous
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
  // page 7 - Applicant Eligibility (review-only, no options here)
  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();

});
