# Job Creation Test Plan

## Application Overview

The WYO platform lets an **Employer** post a job opening through a 4-page form
(Basic Info → Compensation/Schedule → Advanced Requirements → Contact/Application
Method). Before an employer can be acted on, a **Case Manager** must verify the
employer account. After a job is submitted, a **State Admin** must verify/approve
it before it goes live. `tests/job-creation.spec.js` currently records all three
actor flows back-to-back in a single test.

## Known issue in the existing script (to fix)

`tests/job-creation.spec.js:25` — `getByRole('button', { name: 'Verify' }).click()`
times out. Root cause confirmed from the paused page snapshot: the employer used
in the script ("Jed One Employer NEW") is **already Active** ("Verified By: Jade
Case Manager"), so no `Verify` button exists anymore on that account. The
Case-Manager-verifies-employer step and the Employer/State-Admin job flow are
really two different features glued together, and the fixture employer's state
has since drifted out of sync with the recorded script.

Proposed fix: split employer verification out of the job-creation test entirely
(scenario group 1 below is optional / separate concern — flag it rather than
including it), and let the job-creation scenarios (groups 2–3) assume an
**already-verified** employer, which matches the real current state of "Jed One
Employer NEW". Let me know if you'd rather keep an employer-verification
scenario using a fresh/pending employer fixture instead.

## Test Scenarios

### 1. Employer Verification (Case Manager) — ⚠️ needs a pending-employer fixture, see issue above

**Seed:** `tests/job-creation/seed-case-manager.spec.ts` (login as Case Manager)

#### 1.1. should-verify-a-pending-employer-account

**File:** `tests/job-creation/should-verify-a-pending-employer-account.spec.ts`

**Steps:**
  1. Open the Employers list.
    - expect: the employer row is visible with a pending/unverified status.
  2. Click the employer row.
    - expect: employer profile page opens, showing a "Verify" button.
  3. Click "Verify", confirm the "Yes" dialog.
    - expect: employer status changes to "Active".
    - expect: "Verified By" / "Verified On" fields are populated.
  4. Log out.

### 2. Job Posting Creation (Employer)

**Seed:** `tests/job-creation/seed-employer.spec.ts` (login as Employer "Jed One Employer NEW", already verified/Active)

#### 2.1. should-create-a-job-posting-with-required-fields

**File:** `tests/job-creation/should-create-a-job-posting-with-required-fields.spec.ts`

**Steps:**
  1. Go to Manage Jobs → Post a Job.
    - expect: the multi-page "Post a Job" form opens on page 1 (Basic Information).
  2. Fill Basic Information: Job Title "Automation Job One", Job Occupation
     Category "Architecture and Engineering", Job Occupation "Aerospace
     Engineering and...", Job Type option "Test", Number of Positions "10",
     go-live date "08/21/2026", expiry date "12/30/2026", Job Type "Regular",
     Work Mode "Full time Remote", Minimum Education "No Minimum Education",
     Minimum Months of Experience "2", Description "Description", Skills
     "Skills 1".
    - expect: no validation errors block navigation.
  3. Click Next.
    - expect: page 2 (Compensation/Schedule) is shown.
  4. Fill Compensation/Schedule: Minimum Salary "11", Maximum Salary "22", Hours
     Per Week "22", pay unit "Hour", "DOE (Depends on Experience)", "Day Shift",
     check "Advanced Requirements for...".
  5. Click Next.
    - expect: page 3 (Advanced Options) is shown.
  6. Check "Drug Testing/Screening", choose "Employer will perform testing",
     fill description "test".
  7. Click Next.
    - expect: page 4 (Contact/Application Method) is shown.
  8. Check "Mail paper resume to this address", fill Address "Test".
  9. Click Submit, confirm the "Yes" dialog.
    - expect: a success confirmation is shown and the job now appears in the
      employer's Manage Jobs list with a "Pending" / awaiting-approval status.
  10. Log out.

### 3. Job Approval (State Admin)

**Seed:** `tests/job-creation/seed-state-admin.spec.ts` (login as State Admin)

#### 3.1. should-approve-a-submitted-job-posting

**File:** `tests/job-creation/should-approve-a-submitted-job-posting.spec.ts`

**Steps:**
  1. Open Employers, search by the employer's FEIN.
    - expect: exactly one matching employer row is shown.
  2. Open the employer, go to the "Manage Jobs" tab.
    - expect: the "Automation Job One" job is listed with a pending-verification status.
  3. Open the job's "more" menu, click "Verify", then Submit.
    - expect: the job status changes to verified/approved (e.g. "Active" or "Verified").

## Open questions for you

1. Keep scenario group 1 (employer verification) in this plan using a fresh
   pending-employer fixture, or drop it since "Jed One Employer NEW" is
   permanently Active now?
2. For scenario 2.1's success assertion and scenario 3.1's approved-status
   assertion, I need the exact on-screen text/toast — I can capture this live
   with playwright-cli once you confirm which scenarios to generate.
3. Should each scenario be its own test file (current repo convention, see
   `tests/login/*`, `tests/checkout/*`), or do you want to keep everything in
   one `job-creation.spec.js` file like today?
