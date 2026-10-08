import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
//Every radio button / dropdown option available on each field is listed in a
//comment above the line that interacts with it, so the value can be swapped easily.
test('WIOA Obj-assessment', async ({ page }) => {
   test.setTimeout(15 * 60 * 1000);
  
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
  await page.getByRole('tab', { name: 'Programs Overview' }).click();

  //WIOA WP CCP
  await page.locator('[data-testid^="program-row-"]')
    .filter({ hasText: 'WIOA' })
    .filter({ hasText: 'Eligibility Approved' })
    .getByRole('button', { name: 'Open WIOA application' }).click();
  // Find the grid item/card that contains both "CCP" and "Eligibility Approved"
   //const ccpApprovedCard = page.locator('.MuiGrid-root', { hasText: 'CCP' })
  //.filter({ hasText: 'Eligibility Approved' });

   //await ccpApprovedCard.getByRole('button', { name: 'Open CCP application' }).click();

// Then click the CCP button/span inside that specific card
//await ccpApprovedCard.getByRole('button', { name: 'Open CCP application' }).click();
  await page.getByRole('tab', { name: 'Assessment' }).click();
  await page.getByRole('button', { name: 'Add Assessment' }).click();
  ///////////////////// First Page (Basic Information) ///////////////////////////
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  ///////////////////// Second Page (Expectations)   /////////////////////////////
  // Are you seeking immediate employment? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Are you seeking immediate' }).getByLabel('No').check();
  // Occupation is a live search (up to three) of O*NET/SOC occupation titles (not a fixed list) - type any occupation title, e.g. "Accountants and Auditors"
  await page.locator('.form-control').first().click();
  await page.getByRole('option', { name: 'Accountants and Auditors' }).click();
  // Desired Salary options: ANY | $2.50 hourly (Approx. $5,000 annually) or more | $4.75 hourly (Approx. $10,000 annually) or more | $7.25 hourly (Approx. $15,000 annually) or more
  // | $9.50 hourly (Approx. $20,000 annually) or more | $12.00 hourly (Approx. $25,000 annually) or more | $14.50 hourly (Approx. $30,000 annually) or more | $16.75 hourly (Approx. $35,000 annually) or more
  // | $19.25 hourly (Approx. $40,000 annually) or more | $21.75 hourly (Approx. $45,000 annually) or more | $24.00 hourly (Approx. $50,000 annually) or more | $26.50 hourly (Approx. $55,000 annually) or more
  // | $28.75 hourly (Approx. $60,000 annually) or more | $31.25 hourly (Approx. $65,000 annually) or more | $33.75 hourly (Approx. $70,000 annually) or more | $36.00 hourly (Approx. $75,000 annually) or more
  // | $38.50 hourly (Approx. $80,000 annually) or more | $41.00 hourly (Approx. $85,000 annually) or more | $43.50 hourly (Approx. $90,000 annually) or more | $45.50 hourly (Approx. $95,000 annually) or more
  // | $48.00 hourly (Approx. $100,000 annually) or more
  await page.getByText('SelectSelectRemove item').nth(2).click();
  await page.getByRole('option', { name: '$2.50 hourly (Approx. $5,000' }).click();
  // Employment Type options: Regular | Temporary | Seasonal | Contract | Freelance | Volunteer | Internship | Apprenticeship | on the Job Training | Gig Job
  await page.getByLabel('data[employmentType]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Regular' }).click();
  // Full or Part Time options: Full Time (35 Hours or More) | Part Time (Less than 35 Hours) | Full and Part Time Positions | Not Specified | Full or Part Time | PRN (As Needed) | Information Not Provided
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Full Time (35 Hours or More)' }).click();
  // What are your shift preferences? options: 1st | 2nd | 3rd | Rotating | Split Shift | Any
  await page.getByRole('checkbox', { name: '2nd' }).check();
  await page.getByRole('textbox', { name: 'Longest Commute Distance (mi' }).click();
  await page.getByRole('textbox', { name: 'Longest Commute Distance (mi' }).fill('1');
  // What benefits do you need? options: Health Insurance | Paid Vacation Time | Paid Sick Leave | Retirement/Pension
  await page.getByRole('checkbox', { name: 'Health Insurance' }).check();
  // What assistance do you need? options: Help Getting Started in Job Search | Resume Assistance | Completing Job Applications | Interviewing Skills | Job Openings | Referrals to Employers
  await page.getByRole('checkbox', { name: 'Help Getting Started in Job' }).check();
  // Do you need help in Career Planning? options: Yes | No
  await page.getByLabel('Do you need help in Career').locator('label').filter({ hasText: 'No' }).click();
  // Are you seeking Training Services? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Are you seeking Training' }).getByLabel('No', { exact: true }).check();
  // Are you seeking Post-secondary Education? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Are you seeking Post-' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  ///////////////////// Third Page (Education History) ///////////////////////////
  // Highest Grade Completed options: No Minimum Education Requirement | No School Grades Completed | 1st Grade Completed | 2nd Grade Completed | 3rd Grade Completed
  // | 4th Grade Completed | 5th Grade Completed | 6th Grade Completed | 7th Grade Completed | 8th Grade Completed | 9th Grade Completed | 10th Grade Completed | 11th Grade Completed
  // | 12th Grade Completed | 12th Grade Completed & Did not receive diploma or equivalent | Eighth Grade or Less | Some High School | High School Graduate | GED
  // | Certificate of Attendance/Completion (Disabled Individuals) | High School Equivalency Diploma | High School Diploma or Equivalent | High School Diploma
  // | Some College | 1 Year of College or a Technical or Vocational School | 2 Years of College or a Technical or Vocational School | 3 Years of College or a Technical or Vocational School
  // | Vocational School Certificate | Associate's Degree | College Graduate | Bachelor's Degree | Post-College Graduate | Master's Degree | Doctorate Degree | Specialized Degree (e.g. MD, DDS)
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '12th Grade Completed', exact: true }).click();
  await page.getByRole('textbox', { name: 'Education History Assessment' }).click();
  await page.getByRole('textbox', { name: 'Education History Assessment' }).fill('test');
  // Select Basic Skill / Education Factors options: Not at this Time | High School Dropout | Lacks Computer Skills | Needs Interpretation Services | English Language Learner
  // | Currently Enrolled in ABE/Literacy or ESOL | Behind Grade Level for Age | Financial Aid | Basic Skills Deficient
  await page.getByRole('checkbox', { name: 'Not at this Time' }).check();
  await page.getByRole('textbox', { name: 'Basic Skill / Education' }).click();
  await page.getByRole('textbox', { name: 'Basic Skill / Education' }).fill('test');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  ///////////////////// Fourth Page (Employment) ///////////////////////////
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  ///////////////////// Fifth Page (Work Readiness) ///////////////////////////
  await page.getByRole('textbox', { name: 'Number of Children under 18' }).click();
  await page.getByRole('textbox', { name: 'Number of Children under 18' }).fill('1');
  // Dependent Care Needs options: Not at this time | Child Care | Special Needs Child | Adult Care
  await page.getByRole('radiogroup', { name: 'Dependent Care Needs Does the' }).getByLabel('Not at this time').check();
  // Driver's License options: Has a Valid License | Does not have a License | Suspended | Restrictions | DUI
  await page.getByRole('checkbox', { name: 'Has a Valid License' }).check();
  // Automobile options: Not at this time | Owns Automobile | Auto Needs Repair | Lacks Automobile Insurance | Cannot Afford Gasoline | Automobile Impounded
  // | Automobile Repossessed | Access to Dependable Automobile | Access to Public Transportation | Relies on Public Transportation
  await page.getByRole('radiogroup', { name: 'Automobile *' }).getByLabel('Not at this time').check();
  // Contacts options: Not at this time | Telephone in Home | Access Telephone (Neighbor/Other) | Adequate Contact Person(s) | Transient History
  await page.getByRole('radiogroup', { name: 'Contacts *' }).getByLabel('Not at this time').check();
  // Work Attire options: Not at this Time | Uniforms | Interviewing Clothes | Needs Work Tools/Equipment
  await page.getByRole('radiogroup', { name: 'Work Attire This section' }).getByLabel('Not at this Time').check();
  // Motivational Factors Affecting Employment options: Not at this Time | Negative Work Attitude | Punctuality Issues | Attendance Problems | Co-Worker Relations Issues
  await page.getByRole('radiogroup', { name: 'Motivational Factors' }).getByLabel('Not at this Time').check();
  // Need help with Career Decision Making? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Need help with Career' }).getByLabel('No', { exact: true }).check();
  // Interviewing Skills options: Not at this Time | Difficulty Making Positive First Impression | Negative Attitude | Proper Interview Attire | Need to Improve Communication Skills
  // | Research Labor Market Information (LMI) | Questions for Interviewer | Preview List of most common Q&A's | References | Verbally explain work experience and skills
  await page.getByRole('radiogroup', { name: 'Interviewing Skills *' }).getByLabel('Not at this Time').check();
  // Application Completion options: Not at this Time | Lacks Thoroughness | Needs to Address Sensitive Issues (i.e. Criminal Record) | Neatness | Difficulty Summarizing Skills/Work History
  await page.getByRole('radiogroup', { name: 'Application Completion *' }).getByLabel('Not at this Time', { exact: true }).check();
  // Need help with Appearance/Hygiene Issues? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Need help with Appearance/' }).getByLabel('No', { exact: true }).check();
  // Needs to Learn how to use Labor Market Information (LMI)? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Needs to Learn how to use' }).getByLabel('No', { exact: true }).check();
  // Health options: Not at this time | Lacks Medical Insurance Coverage | Disclosed Disability | Needs Glasses | Needs Dental Work | Speech Impairment
  // | Cannot Afford Medication | Reasonable Accommodation Required | Limitations in Ability to Work Certain Jobs | Health has been cause for Absences from Job | Pending Surgery or Medical Leave
  await page.getByRole('radiogroup', { name: 'Health *' }).getByLabel('Not at this time', { exact: true }).check();
  // Behavior options: Not at this time | Demonstrates Low Self-Esteem | Demonstrates Behavioral Problems | Requires Medication | Disclosed Disability | Required Therapy/Treatment
  await page.getByRole('radiogroup', { name: 'Behavior *' }).getByLabel('Not at this time', { exact: true }).check();
  // Substance Abuse options: Not at this time | Seeks Referral for Treatment | Failed Drug Test
  await page.getByRole('radiogroup', { name: 'Substance Abuse *' }).getByLabel('Not at this time', { exact: true }).check();
  // Housing (residenceStatus) options: Not at this time | Homeless | Residing in Shelter | Facing Possible Eviction | Substandard Living Conditions
  // | Needs Energy Assistance | Resides in Public Housing | At risk of becoming homeless
  await page.locator('input[name="data[residenceStatus][]"]').first().check();
  // Home Life (homeLifeStatus) options: Not at this time | High Risk Family/Living Situation | Lacks Family Support System | Victim of Domestic Violence
  await page.locator('input[name="data[homeLifeStatus][]"]').first().check();
  // Credit/Financial (financialStatus) options: Not at this time | Bankruptcy | Poor Credit History/Bad Debts | Needs Money Management Services
  // | Needs Consumer Credit Counseling Services | Inability to be Bonded | Defaulted Student Loan
  await page.locator('input[name="data[financialStatus][]"]').first().check();
  // Vocational / Occupational Factors options: Not at This Time | Obsolete Work Skills | License Expired/Revoked | Union Dues in Arrears
  await page.getByRole('checkbox', { name: 'Not at This Time', exact: true }).check();
  // Public Assistance (publicAssistance) options: Not at this time | Temporary Aide to Needy Families (TANF) | Supplemental Nutritional Assistance Program (SNAP) | Housing | SSI | Foster Care | Medicaid
  await page.locator('input[name="data[publicAssistance][]"]').first().check();
  // Partner Services options: Adult Education | Job Corps | MSFW | Native American | Veterans | TAA | NAFTA/TAA | Vocational Education | Vocational Rehabilitation
  // | Wagner-Peyser | Community Services Block Grant | HUD | Older Workers | Food Stamp Employment and Training Activities | Other
  await page.getByRole('checkbox', { name: 'Adult Education' }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  ///////////////////// Sixth Page (Barriers to Employment) ///////////////////////////
  // Resume options: Has Acceptable Resume | Resume Requires Revision | Does not Have Resume | Unable to Identify/Communicate Transferable Skills
  await page.getByRole('checkbox', { name: 'Has Acceptable Resume' }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('Barriers to Employment').nth(2).click();
  // Barriers to Employment options: No Barriers to Employment/Work Readiness Issues | Lacks Significant Work History | Sporadic or Limited Work History | Restricted Commuting Distance
  // | Restricted Work Schedule | Unrealistic Wage | Legal Issues | Single Parent | Displaced Homemaker | Pregnant or Parenting Youth | Runaway Youth | Other
  await page.getByRole('checkbox', { name: 'No Barriers to Employment/' }).check();
  // "To better assist the individual..." (daily life tasks) options: Chose not to Answer | None | Seeing | Hearing | Talking | Using hands | Getting around | Interacting with others | Learning or thinking | Other (specifiy)
  await page.getByRole('radiogroup', { name: 'To better assist the' }).getByLabel('Chose not to Answer').check();
  // "Individual needs the following assistance..." options: Chose not to Answer | None | Assistance with writing | Audiotaped materials | Flexibility (e.g. in hours) | Materials in Braille
  // | Materials in electronic format | Materials in large print | Meeting reminders | Notetakers for regular meetings | Personal coaching | Scent free environment | Screen magnifier | Screen reader
  // | Interpretation (including sign col_lang) | Considerations for medication | Alternative seating arrangements | TTY/Text Display Device | Videophone | Wheelchair accessible facilities | Other (specify)
  await page.getByRole('radiogroup', { name: 'Individual needs the' }).getByLabel('Chose not to Answer').check();
  await page.getByRole('textbox', { name: 'Employment Barriers' }).click();
  await page.getByRole('textbox', { name: 'Employment Barriers' }).fill('test');
  await page.pause(); // check if the questions are required
  // Arrests options: No Arrest Record | Arrest Record | Pending Court Case
  await page.getByRole('radio', { name: 'No Arrest Record' }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  ///////////////////// Seventh Page (Career Interest) ///////////////////////////  //////// ::: add Interest here
  await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();


  ///////////////////// Log In of Jobseeker /////////////////////////////
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.JOBSIK_EMAIL); //EDIT -- input email of the created jobseeker
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.JOBSIK_PASS); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'My Profile' }).click();
  await page.getByRole('menuitem', { name: 'View Profile' }).click();
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Assessment', exact: true }).click();
  
  const row = page.locator('tr')
  .filter({ hasText: 'Signature Pending' })
  .filter({ hasText: 'WIOA' });   
  await row.locator('button').last().click(); 
  await page.getByRole('menuitem', { name: 'Sign' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the Assessment' }).check();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();

  
  ///////////////////// Log In of Case Manager ///////////////////////////
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL); 
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS); // DEV and New DEV
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Assessment', exact: true }).click();

  const column = page.locator('tr')
  .filter({ hasText: 'Jobseeker Signed' })
  .filter({ hasText: 'WIOA' });
  await column.locator('button').last().click(); 

  await page.getByRole('menuitem', { name: 'Sign' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the Assessment' }).check();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  await page.pause();
});