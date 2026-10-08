
  const { test } =
  require('@playwright/test');
  require('dotenv').config();


  /// 

  
  // This Test is written by Jade of Eagle Team
  // With check wrong Zip code (1111) (22222)
  // SSN 8-digits only , 13 digits
  // check auto fire wow
  test('Jobseeker Registaration', async ({ page }) => {
  test.setTimeout(15 * 60 * 1000);

  await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/employer-jobseeker/job-seeker/registration'); // PPP
  //await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/employer-jobseeker/job-seeker/registration'); // Dev
  //await page.goto(process.env.WYO_JOBSIK_REG); // NEW Dev
  //await page.goto('https://www.oregon-dev.careeredgebeta.com/employer-jobseeker/job-seeker/registration'); // Oregon
  


  ///////////////////// 1st Page ///////////////////////////
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Pop'); //change this
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Eh Eh');  //change this
  await page.getByRole('textbox', { name: 'Email You may be contacted' }).click();
  await page.getByRole('textbox', { name: 'Email You may be contacted' }).fill('ajregunay+pop@careerteam.com'); //change this
  await page.getByRole('textbox', { name: 'Password Create a secure' }).click();
  await page.getByRole('textbox', { name: 'Password Create a secure' }).fill('High_Towers008!'); //Not_jed123!
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Social Security Number (SSN) Enter your Social Security Number without using' }).click();
  await page.getByRole('textbox', { name: 'Social Security Number (SSN) Enter your Social Security Number without using' }).fill('21275256'); //change this
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('21275256'); //match with line 17
  await page.getByRole('textbox', { name: 'Zip Code Enter the Zip Code' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Enter the Zip Code' }).fill('82801');
  //await page.locator('.fa.ftrtrra-calendar').click();
  //await page.locator('.fa.fa-calendar').click();
  await page.getByRole('textbox', { name: 'Date of Birth Select your' }).click();
  await page.pause();
  await page.getByRole('textbox', { name: 'Date of Birth Select your' }).fill('08/29/2007_'); //19
  //await page.getByRole('textbox', { name: 'Date of Birth Select your' }).fill('09/28/2012_'); //14
  await page.waitForTimeout(2000);
  
  await page.getByRole('textbox', { name: 'Date of Birth Select your' }).press('Enter');
  await page.getByLabel('data[basicInfo.sexualOrientation]').getByText('<span>I Do Not Wish to Answer</span>I Do Not Wish to AnswerRemove item').click();
  await page.getByRole('option', { name: 'Straight/Heterosexual' }).click();
  // Sexual Orientation options: Straight/Heterosexual | Gay/Lesbian or Homosexual | Bisexual | Another sexual orientation | I Do Not Wish to Answer
  await page.getByText('<span>I Do Not Wish to Answer</span>I Do Not Wish to AnswerRemove item').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  // Gender options: Male | Female | I Do Not Wish to Answer
  await page.getByRole('combobox', { name: 'data[basicInfo.isSelectiveService]' }).click();
  await page.getByRole('option', { name: 'Not Applicable' }).click();
  // Selective Service options (depends on Gender selected above): Yes | No | Documented exemption from registration | Not Applicable | Registration Waived
  await page.getByLabel('data[basicInfo.siteAccessingFrom]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Home' }).click();
  // Accessing From options: Work | Home | Library | Workforce Center | Elementary School | Middle School | High School | College | Other | Community Center | Job Fair | Workforce Development Center | Place of Worship | Military Location | Another Website | Correctional Facility | Youth Center | Smart Phone/PDA
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Business Colleague' }).click();
  // How Did You Hear About Us options: Another Website | Business Colleague | Friend | Job Fair | Workforce Center | Magazine Ad | Radio Ad | Television Ad | Trade Show / Conference | Other | Attended Rapid Response | Career Coach Mobile Facility | Advertisement | Coworker | DC Government Website | DC PFL Town Hall | Non-Government Website | Notice Posted In Worksite
  page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  await page.getByRole('textbox', { name: 'Social Security Number (SSN) Enter your Social Security Number without using' }).click();
  await page.getByRole('textbox', { name: 'Social Security Number (SSN) Enter your Social Security Number without using' }).fill('61275256411111111'); //change this
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('61275256411111111'); //match with line 17
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  await page.getByRole('textbox', { name: 'Social Security Number (SSN) Enter your Social Security Number without using' }).click();
  await page.getByRole('textbox', { name: 'Social Security Number (SSN) Enter your Social Security Number without using' }).fill('212751564'); //change this
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('212751564'); //match with line 17
  
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  

  /// Incomplete Zipcode and Non- WYO
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();

  await page.getByRole('textbox', { name: 'Zip Code Enter the Zip Code' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Enter the Zip Code' }).fill('8280');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();


  await page.getByRole('textbox', { name: 'Zip Code Enter the Zip Code' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Enter the Zip Code' }).fill('11111');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  ///////////////////// 2nd page /////////////////////////////////////

  await page.getByRole('textbox', { name: 'Address Line 1 Enter your' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 Enter your' }).fill('Cheyenne');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('Cheyenne');
  await page.getByText('StateRemove item').click();
  await page.getByRole('textbox', { name: 'State' }).fill('wyo');
  await page.getByRole('option', { name: 'Wyoming' }).click();
  // State options: Alabama | Alaska | American Samoa | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | District of Columbia | Florida | Georgia | Guam | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Marshall Islands | Maryland | Massachusetts | Michigan | Micronesia | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire | New Jersey | New Mexico | New York | North Carolina | North Dakota | Northern Mariana Islands | Ohio | Oklahoma | Oregon | Palau | Pennsylvania | Puerto Rico | Rhode Island | South Carolina | South Dakota | Tennessee | Texas | U.S. Virgin Islands | Utah | Vermont | Virginia | Washington | West Virginia | Wisconsin | Wyoming
  await page.getByRole('textbox', { name: 'Primary Phone Number ,' }).click();
  await page.getByRole('textbox', { name: 'Primary Phone Number ,' }).fill('(347) 384-7383_');
  await page.getByRole('radio', { name: 'Message Only' }).check();
  // Primary Phone Type options: Mobile | Landline | Message Only | Other
  await page.getByRole('checkbox', { name: 'Email' }).check();
  // Preferred Notification Method options (multi-select): Text Message (If Available) | Email
  await page.getByRole('radiogroup', { name: 'Are you homeless? Are you' }).getByLabel('No').check();
  // Are you homeless? options: Yes | No
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  ///////////////////// 3rd page //////////////////////////

  await page.getByText('SelectRemove item').click();
  await page.getByText('Citizen of U.S. or U.S.').click();
  // Citizenship options: Citizen of U.S. or U.S. Territory | U.S. Permanent Resident | Alien/Refugee Lawfully Admitted to U.S. | None of the above
  await page.getByRole('radio', { name: 'No, I do not have a' }).check();
  // Disability options: Yes, I have a disability. | No, I do not have a disability. | I do not wish to disclose my disability status.
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  ////////////////////// 4th page ///////////////////////////

  await page.getByLabel('data[eduInfo.highestEduAchieved]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Attained a secondary school' }).click();
  // Highest Education Level Achieved options: No Educational Level Completed | Attained secondary school diploma | Attained a secondary school equivalency | Certificate of attendance/completion via IEP | Completed one or more years of postsecondary education | Attained a postsecondary technical or vocational certificate (non-degree) | Attained an Associate's degree | Attained a Bachelor's degree | Attained a degree beyond a Bachelor's degree
  await page.getByLabel('data[eduInfo.areYouAttendingSchool]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Yes, Attending High School,' }).click();
  // Are you attending school? options: Yes, Attending High School, Junior High, Middle or Elementary School | Yes, Attending An Alternative High School | Yes, Attending College or a Technical or Vocational School | No, Not Attending Any School
  await page.getByLabel('data[eduInfo.currentEmploymentStatus]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Not in labor force' }).click();
  // Current Employment Status options: Working Full Time | Not in labor force | Working Part Time | Not Working | Never Worked | Other | Temporary Layoff with Recall | Not Applicable
  await page.getByLabel('data[eduInfo.unEmpEligibilityStatus]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Neither Claimant nor Exhaustee' }).click();
  // Unemployment Eligibility Status options: Neither Claimant nor Exhaustee | Eligible Claimant referred by WPRS | Claimant | Exhaustee | Unknown
  await page.getByRole('radiogroup', { name: 'Are you currently looking for' }).getByLabel('No').check();
  // Are you currently looking for work? options: Yes | No
  await page.getByRole('radiogroup', { name: 'Do you have any related' }).getByLabel('No').check();
  // Do you have any related licenses or certifications? options: Yes | No
  await page.getByRole('radio', { name: 'No, I have not recently' }).check();
  // Notice of termination OR layoff options: Yes, I have recently received a notice of termination, layoff or military separation. | No, I have not recently received a notice of termination, layoff or military separation.
  await page.getByRole('radiogroup', { name: 'Have you worked as a' }).getByLabel('No', { exact: true }).check();
  // Farmworker in the last 12 months options: Yes | No
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  ///////////////////// 5th page ////////////////////////////////

  await page.getByRole('radiogroup', { name: 'Are you of Hispanic or Latino' }).getByLabel('No', { exact: true }).check();
  // Hispanic or Latino Heritage options: Yes | No | I do not wish to answer
  await page.getByRole('checkbox', { name: 'White' }).check();
  // Race options (check all that apply): African American/Black | American Indian/Alaskan Native | Asian | Hawaiian/Other Pacific Islander | Middle Eastern / North African | White | I do not wish to answer
  await page.getByRole('radiogroup', { name: 'Do you primarily speak a' }).getByLabel('No', { exact: true }).check();
  // Primarily speak a language other than English at home options: Yes | No
  await page.getByRole('radiogroup', { name: 'Are you currently in the U.S' }).getByLabel('No', { exact: true }).check();
  // Currently in the U.S. Military or a Veteran options: Yes | No (selecting Yes reveals additional veteran-related questions)
  await page.getByRole('radiogroup', { name: 'I am the spouse or family' }).getByLabel('No', { exact: true }).check();
  // Spouse or family caregiver of a wounded, ill, or injured service member options: Yes | No | I do not wish to disclose
  await page.getByRole('radiogroup', { name: 'My spouse was a veteran who' }).getByLabel('No', { exact: true }).check();
  // Spouse was a veteran who died from a service-connected disability options: Yes | No | I do not wish to disclose
  await page.getByRole('radiogroup', { name: 'My spouse has (or my deceased' }).getByLabel('No', { exact: true }).check();
  // Spouse has/had a total and permanent service-connected disability rating options: Yes | No | I do not wish to disclose
  await page.getByRole('radio', { name: 'None of the above' }).check();
  // Active-duty spouse status options: Missing in action | Captured in the line of duty by a hostile force | Forcibly detained or interned by a foreign government power | None of the above
  await page.getByPlaceholder('Would you like to be').nth(1).check();
  // Would you like to be contacted for more help? options: Yes | No
  await page.pause();
  await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();


 
  /////////// Login for Admin///////////

  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  //await page.getByRole('searchbox', { name: 'Search' }).click();
  //await page.getByRole('searchbox', { name: 'Search' }).fill('560471');
  //await page.getByRole('searchbox', { name: 'Search' }).fill(process.env.JOBSIK_NAME);
  //await page.getByRole('button', { name: 'search' }).click();
  //await page.waitForLoadState('domcontentloaded');
  //await page.waitForLoadState('networkidle');
  //await page.pause();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 


  await page.getByRole('tab', { name: 'RI Activities' }).click();

  const table = page.getByRole('table');

  // Headers
  await expect(table.getByRole('columnheader')).toContainText([
  'Activity', 'Actual Begin', 'Actual End Date', 'Completion Code', 'Service Created by',
  ]);

 // Row values (date is today, so compute it)
const today = new Date().toLocaleDateString('en-US', {
  timeZone:'America/Denver', month: '2-digit', day: '2-digit', year: 'numeric',
}); // // "10/07/2026"

  const row = table.getByRole('row', { name: /003 - RI - Self-Service W@W Registration/ });
  await expect(row.getByRole('cell')).toContainText([
  '003 - RI - Self-Service W@W Registration', today, today, 'Successful Completion', 'System',
  ]);
   

  ////// Jobseeker Login //////////////
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.JOBSIK_EMAIL); //EDIT -- input email of the created jobseeker
  await page.getByRole('textbox', { name: 'Password' }).click();
  
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.JOBSIK_PASS); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click();
  
  //login//
  
  await page.pause();
  await page.getByRole('button', { name: 'Notifications' }).click(); 
  await page.getByText('Welcome to Hire WYO').click();
  
  const dialog = page.getByRole('dialog', { name: 'Welcome to Hire WYO' });
  await expect(dialog).toBeVisible();
  
  // Title and timestamp (dynamic, so match the format)
  await expect(dialog.getByRole('heading', { name: 'Welcome to Hire WYO' })).toBeVisible();
  await expect(dialog).toContainText(/\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2} (AM|PM)/);
  
  // Body content
  await expect(dialog).toContainText('Your new account has been created on HireWYO.');
  await expect(dialog).toContainText('Welcome to HireWYO!');
  
  // Links
  await expect(dialog.getByRole('link', { name: 'hire.wyo.gov/contact-us' })).toHaveAttribute('href', /hire\.wyo\.gov\/contact-us/);
  await expect(dialog.getByRole('link', { name: 'here', exact: true })).toBeVisible();
  
  await page.getByRole('button', { name: 'close' }).click();

  await page.pause();

  await page.getByRole('button', { name: 'Forgot password' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+ninis@careerteam.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  // No Caps
  await page.getByRole('textbox', { name: 'New Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'New Password', exact: true }).fill('igh_lowers007@');
  await page.getByRole('textbox', { name: 'Confirm New Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm New Password' }).fill('igh_lowers007@');
  await page.getByRole('button', { name: 'Submit' }).click();
  //No Number
  await page.getByRole('textbox', { name: 'New Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'New Password', exact: true }).fill('High_lowers@');
  await page.getByRole('textbox', { name: 'Confirm New Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm New Password' }).fill('High_lowers@');
  await page.getByRole('button', { name: 'Submit' }).click();
  // No Special Character
  await page.getByRole('textbox', { name: 'New Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'New Password', exact: true }).fill('High_lowers007');
  await page.getByRole('textbox', { name: 'Confirm New Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm New Password' }).fill('High_lowers007');
  await page.getByRole('button', { name: 'Submit' }).click();
  //to do minmum 8 max 20
  // lower case
  await page.getByRole('textbox', { name: 'New Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'New Password', exact: true }).fill('High_lowers007@');
  await page.getByRole('textbox', { name: 'Confirm New Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm New Password' }).fill('High_lowers007@');
  await page.getByRole('button', { name: 'Submit' }).click();




  

});
