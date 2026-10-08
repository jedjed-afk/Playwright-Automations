const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();
//This test is written by Jade of Team Eagle
//Every radio button / dropdown option available on each field is listed in a
//comment above the line that interacts with it, so the value can be swapped easily.

//Notes 
// This is only for Adult Eligibily
// Change Jobseeker Name and Provider as well as Service name on Line

//Pre-condition
//There should be an existing approved application
//There should be existing provider and service


test('WIOA Activities', async ({ page }) => {
  //await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login'); // PPP
  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // DEV
  //await page.goto('https://www.oregon-dev.careeredgebeta.com/user/login '); // Oregon

  /////////// Login for Admin///////////
 await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS); // DEV and New DEV
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP

  await page.getByRole('button', { name: 'Login' }).click();
  //login//

  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
   await page.pause();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click();

  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.pause();
  await page.locator('[data-testid^="program-row-"]')
    .filter({ hasText: 'WIOA' })
    .filter({ hasText: 'Eligibility Approved' })
    .getByRole('button', { name: 'Open WIOA application' }).click();
  await page.getByText('Eligibility Approved').first().click();
  await page.getByRole('tab', { name: 'Activities' }).click();
  await page.getByRole('button', { name: 'Add Activity' }).click();
  // Sub program options depend on which WIOA eligibilities are approved for this individual, options: Adult | Youth
  await page.getByRole('combobox', { name: 'Sub program Select' }).click();
  await page.getByRole('option', { name: 'Adult' }).click();             ////change this depends on the eligibility ::add options
  // Activity code options (list below is for the Adult sub program; Youth sub program has its own separate code list):
  // 180 - Support Service - Child/Dependent Care | 181 - Adult/DW - Allowance (Gas, Mileage, Car Repair, licensing, Insurance, etc.) | 182 - Support Service – Medical
  // 184 - Adult/DW - Allowance for shelter (excludes deposits) | 185 - Support Service – Other | 187 - Support Service - Job Search Allowance
  // 188 - Support Service – Counseling | 189 - Support Service - Lodging | 191 - Support Service – Interview for Employment
  // 192 - Supportive Service – Non Registered Apprenticeship Program | 200 - P - Individual Counseling | 201 - P - Group Counseling
  // 202 - P - Career Guidance/Planning | 203 - P - Objective Assessment | 204 - Tests that measure occupational potential and comparative abilities
  // 205 - P - Development of Individual Employment Plan (IEP) | 213 - Adult individual receiving services from a mentor | 214 - P - Adult Literacy, Basic Skills or HISEC Prep
  // 215 - P - Short Term Pre-Vocational Services | 217 - Support Service - Relocation Assistance | 219 - P - Work Experience
  // 222 - Classroom instruction - English as a Second Language | 223 - Training for adults in basic skills (English, writing, computing) | 226 - P - Reading and/or Math and/or Language Testing
  // 239 - Participation in volunteer activities within the community | 241 - Financial literacy/capability services | 300 - Occupational Skills Training (ETPL Approved Provider) ITA
  // 302 - Entrepreneurial Training | 304 - Adult/DW - Customized Training (employer commitment to hire) | 311 - Enrolled in Job Corps
  // 312 - Adult/DW - Enrolled in other Federal Programs (TAA, TANF, DADS, Veterans Admin Vocational Rehab and Education, VR training) | 313 - Enrolled in State and Local Training | 314 - Enrolled in Apprenticeship Training
  // 323 - Adult/DW - Employer requested (OJT) training | 324 - Adult Education w/ Occ. Skills Training (ITA) | 326 - Needs Related Payments
  // 328 - Adult/DW - Classroom-based training account (ITA) | 330 - Pre-Apprenticeship Training | 331 - Enrolled in Adult Education
  // 340 - Pre-Requisite Training | 341 - Enrolled in Registered Apprenticeship | 342 - Referral from DFS - ICM Initiative
  await page.getByRole('combobox', { name: 'Activity code' }).click();
  await page.getByRole('option', { name: '180 - Support Service - Child' }).click();  //// :: add option for adults and youth eligible
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Projected Begin Date *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Projected End Date *' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  await page.getByText('Service Provided').click();

  // Service Provided options: Virtual/Online | In-person
  await page.getByRole('option', { name: 'Virtual/Online' }).click(); // add options
  await page.getByText('Provider', { exact: true }).click();
  
  await page.getByRole('textbox', { name: 'Select' }).fill('test'); /// change based on provider name
  await page.getByRole('option', { name: 'testorg' }).click();     /// change based on provider name

  await page.getByText('Service, Course or Contract').click();
  await page.getByRole('option').filter({ visible: true }).first().click();  
  await page.getByText('SelectSelectRemove item').nth(1).click();
  await page.getByRole('option', { name: 'jadeStaff' }).click();
  await page.getByText('SelectSelectRemove item').nth(1).click();
  await page.getByRole('option', { name: 'Chief Executives' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.getByRole('textbox', { name: 'Subject *' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).fill('test');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('test');

 {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf'); // TODO: replace with the correct file for this section ;; you can choose what file you want to upload just change the path 
  }

  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();
});