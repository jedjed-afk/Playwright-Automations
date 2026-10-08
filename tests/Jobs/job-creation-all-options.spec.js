import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

   await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  //await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  /////////// Login for Admin///////////
  //await page.getByRole('textbox', { name: 'Email' }).click();
  //await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  //await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS);
  //await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  //await page.getByRole('button', { name: 'Employers' }).click();
  //await page.waitForTimeout(6000);
  //await page.getByRole('cell', { name: 'Empire' }).click(); //////// change name
  //await page.getByRole('button', { name: 'Verify' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();
  //await page.getByRole('button', { name: 'Profile options' }).click();
  //await page.getByText('Logout').click();


  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+state@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hihelloww268!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Manage Jobs' }).click();
  await page.getByRole('button', { name: 'Post a Job' }).click();
  await page.getByRole('textbox', { name: 'Job Title Please accurately' }).click();
  await page.getByRole('textbox', { name: 'Job Title Please accurately' }).fill('Automation Job One');
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Architecture and Engineering' }).click();
  // Job Category options: Architecture and Engineering | Arts, Design, Entertainment, Sports, and Media | Building and Grounds Cleaning and Maintenance | Business and Financial Operations | Community and Social Service | Computer and Mathematical | Construction and Extraction | Educational Instruction and Library | Farming, Fishing, and Forestry | Food Preparation and Serving Related | Healthcare Practitioners and Technical | Healthcare Support | Installation, Maintenance, and Repair | Legal | Life, Physical, and Social Science | Management | Military Specific | Office and Administrative Support | Personal Care and Service | Production | Protective Service | Sales and Related | Transportation and Material Moving
 // console.log(await page.locator('body').ariaSnapshot()); //// use to see accessibility Tree ---- Change 'body' to specific ID
  await page.getByText('SelectSelectRemove item').first().click();
  //getByText('Job Occupation')
  //await page.getByText('SelectSelectRemove item').nth(1).click();
  //await page.locator('#l-e5f387g-basicInfo.jobOccupation').click();
  // await page.getByText('Job Occupation').click();
  await page.getByRole('option', { name: 'Aerospace Engineering and' }).click();
  // Job Occupation options (depends on Job Category selected above; shown here for "Architecture and Engineering"): Aerospace Engineering and Operations Technologists and Technicians | Aerospace Engineers | Agricultural Engineers | Architects, Except Landscape and Naval | Architectural and Civil Drafters | Automotive Engineering Technicians | Automotive Engineers | Bioengineers and Biomedical Engineers | Calibration Technologists and Technicians | Cartographers and Photogrammetrists | Chemical Engineers | Civil Engineering Technologists and Technicians | Civil Engineers | Computer Hardware Engineers | Drafters, All Other | Electrical Engineers | Electrical and Electronic Engineering Technologists and Technicians | Electrical and Electronics Drafters | Electro-Mechanical and Mechatronics Technologists and Technicians | Electronics Engineers, Except Computer | Energy Engineers, Except Wind and Solar | Engineering Technologists and Technicians, Except Drafters, All Other | Engineers, All Other | Environmental Engineering Technologists and Technicians | Environmental Engineers | Fire-Prevention and Protection Engineers | Fuel Cell Engineers | Geodetic Surveyors | Health and Safety Engineers, Except Mining Safety Engineers and Inspectors | Human Factors Engineers and Ergonomists | Industrial Engineering Technologists and Technicians | Industrial Engineers | Landscape Architects | Manufacturing Engineers | Marine Engineers and Naval Architects | Materials Engineers | Mechanical Drafters | Mechanical Engineering Technologists and Technicians | Mechanical Engineers | Mechatronics Engineers | Microsystems Engineers | Mining and Geological Engineers, Including Mining Safety Engineers | Nanosystems Engineers | Nanotechnology Engineering Technologists and Technicians | Non-Destructive Testing Specialists | Nuclear Engineers | Petroleum Engineers | Photonics Engineers | Photonics Technicians | Radio Frequency Identification Device Specialists | Robotics Engineers | Robotics Technicians | Solar Energy Systems Engineers | Surveying and Mapping Technicians | Surveyors | Transportation Engineers | Validation Engineers | Water/Wastewater Engineers | Wind Energy Engineers
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Test' }).click();
  // Location / worksite options: list is populated from the employer's active locations/worksites (only one active location, "Test", exists for this employer)
  await page.getByRole('textbox', { name: 'Number of Positions Available' }).fill('10');
  await page.getByRole('textbox', { name: 'Job post go-live date *' }).fill('08/21/2026_');
  await page.getByRole('textbox', { name: 'Job post go-live date *' }).press('Enter');
  await page.getByRole('textbox', { name: 'Job post expiry date *' }).fill('12/30/2026_');
  await page.getByRole('textbox', { name: 'Job post expiry date *' }).press('Enter');
  await page.getByText('SelectSelectRemove item').first().click();
  //await page.locator('label[for$="basicInfo.jobType"]').click();
  //await page.getByText('SelectSelectRemove item').nth(1).click();
  await page.getByRole('option', { name: 'Regular' }).click();
  // Job Type options: Regular | Temporary | Seasonal | Contract | Volunteer | Internship | Apprenticeship | On the Job Training | Gig Job | Freelance
  await page.getByText('Work Mode').click();
  //await page.getByLabel('data[basicInfo.workMode]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Full time Remote' }).click();
  // Work Mode options: Full time Remote | Part time Remote | Full time Hybrid | Part time Hybrid | Full Time In Person | Part Time In Person
  await page.getByText('Minimum Education', { exact: true }).click();
  //await page.getByText('SelectSelectRemove item').nth(1).click();
  await page.getByRole('option', { name: 'No Minimum Education' }).click();
  // Minimum Education options: No Minimum Education Requirement | No School Grades Completed | Certificate of Attendance/Completion (Disabled Individuals) | 1st Grade Completed | 2nd Grade Completed | 3rd Grade Completed | 4th Grade Completed | 5th Grade Completed | 6th Grade Completed | 7th Grade Completed | 8th Grade Completed | Eighth Grade or Less | 9th Grade Completed | 10th Grade Completed | 11th Grade Completed | 12th Grade Completed & Did not receive diploma or equivalent | Some High School | High School Graduate/GED | High School Equivalency Diploma | High School Diploma | High School Diploma or Equivalent | 1 Year of College or a Technical or Vocational School | 2 Years of College or a Technical or Vocational School | 3 Years of College or a Technical or Vocational School | Vocational School Certificate | Some College | College Graduate | Associate's Degree | Bachelor's Degree | Post-College Graduate | Master's Degree | Doctorate Degree | Specialized Degree (e.g. MD, DDS)
  await page.getByRole('textbox', { name: 'Minimum Months of Experience' }).fill('2');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('Description');
  await page.getByRole('textbox', { name: 'Skills' }).fill('Skills 1');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.pause();

  ///////// Second Page ////////////
  await page.getByRole('textbox', { name: 'Minimum Salary , numeric only' }).fill('11');
  await page.getByRole('textbox', { name: 'Maximum Salary , numeric only' }).fill('22');
  await page.getByRole('textbox', { name: 'Hour Per Week , numeric only' }).fill('22');
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Hour' }).click();
  // Basic unit of salary/pay options: Hour | Day | Week | Month | Year | Other | Quarter | Biweekly | SemiMonth
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'DOE (Depends on Experience)' }).click();
  // Pay Comments options: DOE (Depends on Experience) | Will discuss with applicant | Commission Only | Salary + Commission | Not Applicable | Piece Rate | Salary + Tips | Salary + Bonus | Per Diem Only | Salary + Sign On Bonus
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Day Shift' }).click();
  // Shift options: Day Shift | Evening/Swing | Night/Graveyard | Rotating Shift | Split Shift | Other, see job description | Not Applicable | Flexible
  await page.getByRole('checkbox', { name: 'Advanced Requirements for' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  //////// Third Page (Advance Option) ////////
  await page.getByRole('checkbox', { name: 'Drug Testing/Screening' }).click();
  //await page.getByText('Test Requirement').click();
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Employer will perform testing' }).click();
  // Test Requirement options: Employer will perform testing | Workforce Center will perform testing | Other source will perform testing | No test required
  await page.getByRole('textbox', { name: 'Provide a brief description' }).click();
  await page.getByRole('textbox', { name: 'Provide a brief description' }).fill('test');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  /////// Fourth Page //////////
  await page.getByRole('checkbox', { name: 'Mail paper resume to this' }).click();
  await page.getByRole('textbox', { name: 'Address *' }).click();
  await page.getByRole('textbox', { name: 'Address *' }).fill('Test');
  await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  ////// Job Creation ///////
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();


  /////// State Admin Login to Verify Job Created //////
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+wyo@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('kec5mtv_uae9gbz_RYG');
  await page.getByRole('button', { name: 'Login' }).click();
  ////// Approval ///////////
  await page.getByRole('button', { name: 'Employers' }).click();
  // await page.pause(); or use pause
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('920182911'); ///// fill this base on the FEIN of the Employer Created
  await page.getByRole('button', { name: 'search' }).click();
  await page.getByRole('cell', { name: 'Jed Test Employer NEW' }).click();
  await page.getByRole('tab', { name: 'Manage Jobs' }).click();
  await page.pause();
  await page.getByRole('button', { name: 'more' }).click(); // find a unique locator
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();
});
