// spec: specs/plan.md
// seed: tests/login/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login Suite', () => {
  test('Should show error for invalid username/password combination', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // 2. Enter 'invalid_user' in the Username field and 'wrong_password' in the Password field
    const usernameInput = page.locator('[data-test="username"]');
    const passwordInput = page.locator('[data-test="password"]');
    await usernameInput.fill('invalid_user');
    await passwordInput.fill('wrong_password');

    // 3. Click the Login button
    await page.locator('[data-test="login-button"]').click();

    // expect: User remains on the login page (URL unchanged)
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    // expect: An error banner is shown with message 'Epic sadface: Username and password do not match any user in this service'
    const errorBanner = page.locator('[data-test="error"]');
    await expect(errorBanner).toBeVisible();
    await expect(errorBanner).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );

    // expect: Username and Password fields are outlined in red (aria-invalid / error styling)
    await expect(usernameInput).toHaveClass('input_error form_input error');
    await expect(passwordInput).toHaveClass('input_error form_input error');
  });
});
