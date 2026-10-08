import { test, expect } from '@playwright/test';

test('add items, remove one from cart, then cancel checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');

  await page.locator('[data-test="item-1-img-link"]').click();
  await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Bolt T-Shirt');
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('3');

  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
  await expect(page.locator('.cart_item')).toHaveCount(2);

  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="cancel"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
});