
  const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();
  
  // This Test is written by Jade of Eagle Team
  // With check wrong Zip code (1111) (22222)
  // SSN 8-digits only , 13 digits
  // check auto fire wow
  test('Jobseeker Registaration @release', async ({ page }) => {
  test.setTimeout(15 * 60 * 1000);

    //await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/employer-jobseeker/job-seeker/registration'); // PPP
  //await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/employer-jobseeker/job-seeker/registration'); // Dev
  await page.goto('https://www.wyo-dev.careeredgebeta.com/employer-jobseeker/job-seeker/registration'); // NEWDev
  //await page.goto('https://www.oregon-edge-dev.careeredgebeta.com/employer-jobseeker/job-seeker/registration'); // Oregon
  
  
 // Unique data per run so registration never collides with an existing account (no manual edits / pauses needed)
 const RUN_ID = Date.now().toString();
 const FIRST_NAME = 'Harpe';
 const LAST_NAME = 'Xavier ' + RUN_ID.slice(-6).split('').map(d => String.fromCharCode(97 + Number(d))).join(''); // e.g. "Eh bcdefg"
 const EMAIL = `ajregunay+jose${RUN_ID}@careerteam.com`;
 const SSN = '2' + RUN_ID.slice(-8); // valid 9-digit SSN
 const SSN_SHORT = SSN.slice(0, 8); // 8 digits -> invalid
 const SSN_LONG = SSN + '11111111'; // 17 digits -> invalid

  ///////////////////// 1st Page ///////////////////////////
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill(FIRST_NAME);
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill(LAST_NAME);
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill(EMAIL);
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill(process.env.JOBSIK_PASS); //Not_jed123!
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill(process.env.JOBSIK_PASS);
  await page.getByRole('textbox', { name: 'Social Security Number (SSN)', exact: true }).click();
  await page.getByRole('textbox', { name: 'Social Security Number (SSN)', exact: true }).fill(SSN_SHORT);
  await page.getByRole('textbox', { name: 'Confirm Social Security Number (SSN) *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security Number (SSN) *' }).fill(SSN_SHORT);
  await page.getByRole('textbox', { name: 'Zip Code' }).click();
  await page.getByRole('textbox', { name: 'Zip Code' }).fill('82801');

  await page.getByRole('textbox', { name: 'Date of Birth' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth' }).fill('08/29/2007_'); //19
  //await page.getByRole('textbox', { name: 'Date of Birth' }).fill('09/28/2012_'); //14
  await page.waitForTimeout(2000);
  
  await page.getByRole('textbox', { name: 'Date of Birth' }).press('Enter');
  await page.getByRole('combobox', { name: 'Sexual Orientation' }).click();
  await page.getByRole('option', { name: 'Straight/Heterosexual' }).click();
  // Sexual Orientation options: Straight/Heterosexual | Gay/Lesbian or Homosexual | Bisexual | Another sexual orientation | I Do Not Wish to Answer
  await page.getByRole('combobox', { name: 'Gender' }).click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  // Gender options: Male | Female | I Do Not Wish to Answer
  // This field re-renders right after Gender changes (closing the open dropdown), so retry until the value sticks
  const selectiveService = page.getByRole('combobox', { name: 'Have you registered with the Selective Service?' });
  await expect(async () => {
    await selectiveService.click();
    await page.getByRole('option', { name: 'Not Applicable' }).click({ timeout: 3000 });
    await expect(selectiveService).toContainText('Not Applicable', { timeout: 2000 });
  }).toPass({ timeout: 30000 });
  // Selective Service options (depends on Gender selected above): Yes | No | Documented exemption from registration | Not Applicable | Registration Waived
  await page.getByRole('combobox', { name: 'From where are you accessing this website?' }).click();
  await page.getByRole('option', { name: 'Home' }).click();
  // Accessing From options: Work | Home | Library | Workforce Center | Elementary School | Middle School | High School | College | Other | Community Center | Job Fair | Workforce Development Center | Place of Worship | Military Location | Another Website | Correctional Facility | Youth Center | Smart Phone/PDA
  await page.getByRole('combobox', { name: 'How did you hear about this website?' }).click();
  await page.getByRole('option', { name: 'Business Colleague' }).click();
  // How Did You Hear About Us options: Another Website | Business Colleague | Friend | Job Fair | Workforce Center | Magazine Ad | Radio Ad | Television Ad | Trade Show / Conference | Other | Attended Rapid Response | Career Coach Mobile Facility | Advertisement | Coworker | DC Government Website | DC PFL Town Hall | Non-Government Website | Notice Posted In Worksite
  await page.getByRole('button', { name: 'Next', exact: true }).click();

  await page.getByRole('textbox', { name: 'Social Security Number (SSN)', exact: true }).click();
  await page.getByRole('textbox', { name: 'Social Security Number (SSN)', exact: true }).fill(SSN_LONG);
  await page.getByRole('textbox', { name: 'Confirm Social Security Number (SSN) *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security Number (SSN) *' }).fill(SSN_LONG);
  await page.getByRole('button', { name: 'Next', exact: true }).click();

  await page.getByRole('textbox', { name: 'Social Security Number (SSN)', exact: true }).click();
  await page.getByRole('textbox', { name: 'Social Security Number (SSN)', exact: true }).fill(SSN);
  await page.getByRole('textbox', { name: 'Confirm Social Security Number (SSN) *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security Number (SSN) *' }).fill(SSN);
  
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  

  /// Incomplete Zipcode and Non- WYO
  await page.getByRole('button', { name: 'Previous', exact: true }).click();

  await page.getByRole('textbox', { name: 'Zip Code' }).click();
  await page.getByRole('textbox', { name: 'Zip Code' }).fill('8280');
  await page.getByRole('button', { name: 'Next', exact: true }).click();


  await page.getByRole('textbox', { name: 'Zip Code' }).click();
  await page.getByRole('textbox', { name: 'Zip Code' }).fill('11111');
  await page.getByRole('button', { name: 'Next', exact: true }).click();

  ///////////////////// 2nd page /////////////////////////////////////

  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('Cheyenne');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('Cheyenne');
  await page.getByRole('combobox', { name: 'State' }).click();
  await page.getByRole('option', { name: 'Wyoming' }).click();
  // State options: Alabama | Alaska | American Samoa | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | District of Columbia | Florida | Georgia | Guam | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Marshall Islands | Maryland | Massachusetts | Michigan | Micronesia | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire | New Jersey | New Mexico | New York | North Carolina | North Dakota | Northern Mariana Islands | Ohio | Oklahoma | Oregon | Palau | Pennsylvania | Puerto Rico | Rhode Island | South Carolina | South Dakota | Tennessee | Texas | U.S. Virgin Islands | Utah | Vermont | Virginia | Washington | West Virginia | Wisconsin | Wyoming
  await page.getByRole('textbox', { name: 'Primary Phone Number , numeric only, *' }).click();
  await page.getByRole('textbox', { name: 'Primary Phone Number , numeric only, *' }).fill('(347) 384-7383_');
  await page.getByRole('radio', { name: 'Message Only' }).check();
  // Primary Phone Type options: Mobile | Landline | Message Only | Other
  await page.getByRole('checkbox', { name: 'Email' }).check();
  // Preferred Notification Method options (multi-select): Text Message (If Available) | Email
  await page.getByRole('radiogroup', { name: 'Are you homeless?' }).getByLabel('No').check();
  // Are you homeless? options: Yes | No
  await page.getByRole('button', { name: 'Next', exact: true }).click();

  ///////////////////// 3rd page //////////////////////////

  await page.getByRole('combobox', { name: 'Citizenship' }).click();
  await page.getByRole('option', { name: 'Citizen of U.S. or U.S. Territory' }).click();
  // Citizenship options: Citizen of U.S. or U.S. Territory | U.S. Permanent Resident | Alien/Refugee Lawfully Admitted to U.S. | None of the above
  await page.getByRole('radio', { name: 'No, I do not have a' }).check();
  // Disability options: Yes, I have a disability. | No, I do not have a disability. | I do not wish to disclose my disability status.
  await page.getByRole('button', { name: 'Next', exact: true }).click();

  ////////////////////// 4th page ///////////////////////////

  await page.getByRole('combobox', { name: 'Your Highest Education Level Achieved' }).click();
  await page.getByRole('option', { name: 'Attained a secondary school' }).click();
  // Highest Education Level Achieved options: No Educational Level Completed | Attained secondary school diploma | Attained a secondary school equivalency | Certificate of attendance/completion via IEP | Completed one or more years of postsecondary education | Attained a postsecondary technical or vocational certificate (non-degree) | Attained an Associate's degree | Attained a Bachelor's degree | Attained a degree beyond a Bachelor's degree
  await page.getByRole('combobox', { name: 'Are you attending school?' }).click();
  await page.getByRole('option', { name: 'Yes, Attending High School,' }).click();
  // Are you attending school? options: Yes, Attending High School, Junior High, Middle or Elementary School | Yes, Attending An Alternative High School | Yes, Attending College or a Technical or Vocational School | No, Not Attending Any School
  await page.getByRole('combobox', { name: 'Current Employment Status' }).click();
  await page.getByRole('option', { name: 'Not in labor force' }).click();
  // Current Employment Status options: Working Full Time | Not in labor force | Working Part Time | Not Working | Never Worked | Other | Temporary Layoff with Recall | Not Applicable
  await page.getByRole('combobox', { name: 'Unemployment Eligibility Status?' }).click();
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
  await page.getByRole('button', { name: 'Next', exact: true }).click();

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
  await page.getByRole('radiogroup', { name: 'Would you like to be contacted' }).getByLabel('No', { exact: true }).check();
  // Would you like to be contacted for more help? options: Yes | No
  await page.getByRole('button', { name: 'Submit', exact: true }).click();
  await page.getByRole('dialog', { name: 'Submit Registration' }).getByRole('button', { name: 'Submit' }).click();


 
  /////////// Login for Admin///////////

  await expect(page).toHaveURL(/\/home/, { timeout: 60000 }); // registration redirects to Home
  // Header 'Login' is a link now; wait for the login form before continuing
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible({ timeout: 30000 });
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS);  // DEV and New DEV
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  // The tab click can be lost while the list is still loading, so re-click until it sticks
  await expect(async () => {
    await page.getByRole('tab', { name: 'All Individuals' }).click();
    await expect(page.getByRole('tabpanel', { name: 'All Individuals' })).toBeVisible({ timeout: 3000 });
  }).toPass({ timeout: 60000 });
  //await page.getByRole('searchbox', { name: 'Search' }).click();
  //await page.getByRole('searchbox', { name: 'Search' }).fill('560471');
  //await page.getByRole('searchbox', { name: 'Search' }).fill(process.env.JOBSIK_NAME);
  //await page.getByRole('button', { name: 'search' }).click();
  //await page.waitForLoadState('domcontentloaded');
  //await page.waitForLoadState('networkidle');
  //await page.pause();
  await page.getByRole('cell', { name: new RegExp(LAST_NAME) }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: new RegExp(LAST_NAME) }).click(); 


  await page.getByRole('tab', { name: 'RI Activities' }).click();

  const table = page.getByRole('table');

  // Headers
  await expect(table.getByRole('columnheader')).toContainText([
  'Activity', 'Actual Begin', 'Actual End Date', 'Completion Code', 'Service Created by',
  ]);

 // Row values (date is today, so compute it)
// App may stamp the Denver date or the UTC date (they differ in the evening), so accept either
const fmt = tz => new Date().toLocaleDateString('en-US', {
  timeZone: tz, month: '2-digit', day: '2-digit', year: 'numeric',
}); // "10/07/2026"
const today = new RegExp([...new Set([fmt('America/Denver'), fmt('UTC')])].map(d => d.replace(/\//g, '\\/')).join('|'));

  const row = table.getByRole('row', { name: /003 - RI - Self-Service W@W Registration/ });
  await expect(row.getByRole('cell')).toContainText([
  /003 - RI - Self-Service\s+W@W\s+Registration/, today, today, 'Successful Completion', 'System',
  ]);
   

  ////// Jobseeker Login //////////////
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  
  // Header 'Login' is a link now; wait for the login form before continuing
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible({ timeout: 30000 });
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();
  
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.JOBSIK_PASS); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click();
  
  //login//
  
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

  // Log the jobseeker out and go back to the Login page for the Forgot password checks
  await page.getByRole('button', { name: 'Close Notifications' }).click();
  await page.getByRole('button', { name: 'My Profile' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  // Header 'Login' is a link now; wait for the login form before continuing
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible({ timeout: 30000 });

  await page.getByRole('button', { name: 'Forgot password' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(EMAIL);
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Reset your password')).toBeVisible();
  const notMet = page.getByText('They do not meet the minimum requirements.');
  // No Caps
  await page.getByRole('textbox', { name: 'New Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'New Password', exact: true }).fill(process.env.JOBSIK_DUMPONE_PASS);
  await page.getByRole('textbox', { name: 'Confirm New Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm New Password' }).fill(process.env.JOBSIK_DUMPONE_PASS);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(notMet.first()).toBeVisible();
  //No Number
  await page.getByRole('textbox', { name: 'New Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'New Password', exact: true }).fill(process.env.JOBSIK_DUMPTWO_PASS);
  await page.getByRole('textbox', { name: 'Confirm New Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm New Password' }).fill(process.env.JOBSIK_DUMPTWO_PASS);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(notMet.first()).toBeVisible();
  // No Special Character
  await page.getByRole('textbox', { name: 'New Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'New Password', exact: true }).fill('Highlowers007'); // no special char (env JOBSIK_DUMPTHREE_PASS has '_' which counts as special)
  await page.getByRole('textbox', { name: 'Confirm New Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm New Password' }).fill('Highlowers007');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(notMet.first()).toBeVisible();
  //to do minmum 8 max 20
  // Valid password -> requirement error clears
  await page.getByRole('textbox', { name: 'New Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'New Password', exact: true }).fill(process.env.JOBSIK_PASS);
  await page.getByRole('textbox', { name: 'Confirm New Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm New Password' }).fill(process.env.JOBSIK_PASS);
  await expect(notMet).toHaveCount(0);
  // Final Submit needs the 6-digit code emailed to EMAIL, so the no-pause run stops here


});
