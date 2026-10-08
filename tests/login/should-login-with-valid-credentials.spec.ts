// spec: specs/plan.md
// seed: tests/login/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login Suite', () => {
  test('Should login successfully with standard_user', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // expect: Login page loads with 'Swag Labs' heading, Username field, Password field, and Login button visible
    const usernameInput = page.locator('[data-test="username"]');
    const passwordInput = page.locator('[data-test="password"]');
    const loginButton = page.locator('[data-test="login-button"]');

    await expect(page.getByText('Swag Labs')).toBeVisible();
    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(loginButton).toBeVisible();

    // 2. Enter 'standard_user' in the Username field
    await usernameInput.fill('standard_user');

    // 3. Enter 'secret_sauce' in the Password field
    await passwordInput.fill('secret_sauce');

    // 4. Click the Login button
    await loginButton.click();

    // expect: User is redirected to https://www.saucedemo.com/inventory.html
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // expect: Page header shows 'Products' title
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');

    // expect: Six product items are visible in the inventory list
    await expect(page.locator('.inventory_item')).toHaveCount(6);

    // expect: No error message is displayed
    await expect(page.locator('[data-test="error"]')).not.toBeVisible();
  });
});
