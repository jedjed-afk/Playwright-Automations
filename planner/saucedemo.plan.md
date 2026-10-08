# SauceDemo E-Commerce Comprehensive Test Plan

## Application Overview

SauceDemo (https://www.saucedemo.com/) is a demo e-commerce single-page application used for test automation practice. Application flow: Login page -> Products/Inventory listing page -> Product detail page -> Cart page -> Checkout (3 steps: Your Information, Overview, Complete) -> back to Products. A persistent header contains a hamburger menu (All Items, About, Logout, Reset App State) and a cart icon with a numeric badge showing item count. The login page exposes 6 demo usernames (standard_user, locked_out_user, problem_user, performance_glitch_user, error_user, visual_user), all sharing the password "secret_sauce". Key data-test attributes observed during exploration: [data-test="username"], [data-test="password"], [data-test="login-button"], [data-test="error"] (error banner), [data-test="add-to-cart-<slug>"] / [data-test="remove-<slug>"], [data-test="shopping-cart-link"] and [data-test="shopping-cart-badge"], [data-test="product-sort-container"] (options: az, za, lohi, hilo), [data-test="checkout"], [data-test="firstName"], [data-test="lastName"], [data-test="postalCode"], [data-test="continue"], [data-test="cancel"], [data-test="finish"], [data-test="back-to-products"], [data-test="open-menu"]/[data-test="close-menu"], [data-test="logout-sidebar-link"], [data-test="reset-sidebar-link"], [data-test="about-sidebar-link"]. This plan assumes each test starts from a fresh browser context (no stored auth state) unless the test explicitly builds on a documented precondition within the same spec file (e.g., logging in via UI as the first step).

## Test Scenarios

### 1. Login Suite

**Seed:** `tests/login/seed.spec.ts`

#### 1.1. Should login successfully with standard_user

**File:** `tests/login/should-login-with-valid-credentials.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page loads with 'Swag Labs' heading, Username field, Password field, and Login button visible
  2. Enter 'standard_user' in the Username field
  3. Enter 'secret_sauce' in the Password field
  4. Click the Login button
    - expect: User is redirected to https://www.saucedemo.com/inventory.html
    - expect: Page header shows 'Products' title
    - expect: Six product items are visible in the inventory list
    - expect: No error message is displayed

#### 1.2. Should show error for invalid username/password combination

**File:** `tests/login/should-reject-invalid-credentials.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Enter 'invalid_user' in the Username field and 'wrong_password' in the Password field
  3. Click the Login button
    - expect: User remains on the login page (URL unchanged)
    - expect: An error banner is shown with message 'Epic sadface: Username and password do not match any user in this service'
    - expect: Username and Password fields are outlined in red (aria-invalid / error styling)

#### 1.3. Should show error for valid username with wrong password

**File:** `tests/login/should-reject-wrong-password.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Enter 'standard_user' in the Username field and 'wrong_password' in the Password field
  3. Click the Login button
    - expect: User remains on the login page
    - expect: Error banner shows 'Epic sadface: Username and password do not match any user in this service'

#### 1.4. Should show validation error when username is empty

**File:** `tests/login/should-require-username.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Leave Username field empty; enter 'secret_sauce' in Password field
  3. Click the Login button
    - expect: Error banner displays 'Epic sadface: Username is required'
    - expect: User stays on the login page

#### 1.5. Should show validation error when password is empty

**File:** `tests/login/should-require-password.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Enter 'standard_user' in Username field; leave Password field empty
  3. Click the Login button
    - expect: Error banner displays 'Epic sadface: Password is required'
    - expect: User stays on the login page

#### 1.6. Should show validation error when both fields are empty

**File:** `tests/login/should-require-both-fields.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Leave both Username and Password fields empty
  3. Click the Login button
    - expect: Error banner displays 'Epic sadface: Username is required' (username check happens first)
    - expect: User stays on the login page

#### 1.7. Should block login for locked_out_user

**File:** `tests/login/should-block-locked-out-user.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Enter 'locked_out_user' in Username field and 'secret_sauce' in Password field
  3. Click the Login button
    - expect: User remains on the login page
    - expect: Error banner shows 'Epic sadface: Sorry, this user has been locked out.'
    - expect: Username and password fields show red error outline

#### 1.8. Should allow login for problem_user but exhibit known UI defects

**File:** `tests/login/should-login-with-problem-user.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Enter 'problem_user' in Username field and 'secret_sauce' in Password field
  3. Click the Login button
    - expect: User is redirected to /inventory.html successfully (login itself succeeds)
  4. Inspect the product images on the inventory page
    - expect: Known defect: all product images are identical (e.g., same placeholder/dog image) regardless of product, unlike standard_user where each product has a distinct image - document as a defect assertion or known-issue test

#### 1.9. Should allow login for performance_glitch_user with delayed response

**File:** `tests/login/should-login-with-performance-glitch-user.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Enter 'performance_glitch_user' in Username field and 'secret_sauce' in Password field
  3. Click the Login button and start a timer
    - expect: Login succeeds and redirects to /inventory.html, but only after a noticeable delay (several seconds slower than standard_user) - assert navigation completes within an extended timeout (e.g., 10-15s) confirming the app does not hang indefinitely

#### 1.10. Should allow login for error_user

**File:** `tests/login/should-login-with-error-user.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Enter 'error_user' in Username field and 'secret_sauce' in Password field
  3. Click the Login button
    - expect: Login succeeds and redirects to /inventory.html
  4. Attempt to add products to the cart and proceed through checkout
    - expect: Document any known defects such as failures when removing certain items from the cart or errors on the checkout information step - assert the app does not crash and errors, if any, are handled gracefully

#### 1.11. Should allow login for visual_user

**File:** `tests/login/should-login-with-visual-user.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Enter 'visual_user' in Username field and 'secret_sauce' in Password field
  3. Click the Login button
    - expect: Login succeeds and redirects to /inventory.html
    - expect: Page renders without JavaScript console errors that break functionality (visual_user is intended for visual-regression testing; layout may differ slightly from standard_user but core functionality should work)

#### 1.12. Should redirect unauthenticated user attempting to access inventory page directly

**File:** `tests/login/should-block-direct-inventory-access.spec.ts`

**Steps:**
  1. Without logging in, navigate directly to https://www.saucedemo.com/inventory.html
    - expect: User is redirected back to the login page (or shown an error) instead of seeing the inventory list
    - expect: An error message such as 'Epic sadface: You can only access '/inventory.html' when you are logged in.' may be shown on the login page

#### 1.13. Should successfully logout a logged-in user via hamburger menu

**File:** `tests/login/should-logout-successfully.spec.ts`

**Steps:**
  1. Log in as standard_user via the login form
    - expect: User lands on /inventory.html
  2. Click the hamburger 'Open Menu' button
    - expect: Side menu opens showing links: All Items, About, Logout, Reset App State
  3. Click the 'Logout' link
    - expect: User is redirected to the login page (https://www.saucedemo.com/)
    - expect: Username and Password fields are empty
    - expect: Attempting browser back navigation does not restore the authenticated inventory view

### 2. Product Listing (Inventory) Suite

**Seed:** `tests/inventory/seed.spec.ts`

#### 2.1. Should display all six products with name, image, description, and price

**File:** `tests/inventory/should-display-product-listing.spec.ts`

**Steps:**
  1. Log in as standard_user
    - expect: Redirected to /inventory.html
  2. Inspect the product grid
    - expect: Exactly 6 product cards are displayed: Sauce Labs Backpack ($29.99), Sauce Labs Bike Light ($9.99), Sauce Labs Bolt T-Shirt ($15.99), Sauce Labs Fleece Jacket ($49.99), Sauce Labs Onesie ($7.99), Test.allTheThings() T-Shirt (Red) ($15.99)
    - expect: Each card shows a product image, name (as a clickable link), description text, price, and an 'Add to cart' button
    - expect: Default sort dropdown shows 'Name (A to Z)' selected and products are in alphabetical order by name

#### 2.2. Should sort products by Name A to Z (default)

**File:** `tests/inventory/should-sort-name-a-to-z.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Open the sort dropdown and select 'Name (A to Z)'
    - expect: Product names are displayed in ascending alphabetical order: Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red)

#### 2.3. Should sort products by Name Z to A

**File:** `tests/inventory/should-sort-name-z-to-a.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Open the sort dropdown and select 'Name (Z to A)'
    - expect: Product names are displayed in descending alphabetical order (reverse of A-Z order)
    - expect: First product listed is 'Test.allTheThings() T-Shirt (Red)' and last is 'Sauce Labs Backpack'

#### 2.4. Should sort products by Price low to high

**File:** `tests/inventory/should-sort-price-low-to-high.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Open the sort dropdown and select 'Price (low to high)'
    - expect: Products are ordered by ascending price: $7.99 (Onesie), $9.99 (Bike Light), $15.99 (Bolt T-Shirt), $15.99 (Test.allTheThings T-Shirt), $29.99 (Backpack), $49.99 (Fleece Jacket)

#### 2.5. Should sort products by Price high to low

**File:** `tests/inventory/should-sort-price-high-to-low.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Open the sort dropdown and select 'Price (high to low)'
    - expect: Products are ordered by descending price starting with $49.99 (Fleece Jacket) and ending with $7.99 (Onesie)

#### 2.6. Should retain sort order selection when navigating away and back

**File:** `tests/inventory/should-retain-sort-selection.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Select 'Price (high to low)' from the sort dropdown
    - expect: List reorders accordingly
  3. Click into a product's detail page, then click 'Back to products'
    - expect: Document actual behavior: verify whether the sort selection persists as 'Price (high to low)' or resets to default 'Name (A to Z)' upon return

#### 2.7. Should navigate to product detail page when clicking a product name or image

**File:** `tests/inventory/should-navigate-to-product-detail.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Click on the 'Sauce Labs Bike Light' product name link
    - expect: Browser navigates to /inventory-item.html?id=0
    - expect: Detail page shows the product image, full name 'Sauce Labs Bike Light', description, price '$9.99', an 'Add to cart' button, and a 'Back to products' button
  3. Click 'Back to products'
    - expect: User returns to the /inventory.html listing page

#### 2.8. Should navigate to product detail page when clicking the product image

**File:** `tests/inventory/should-navigate-via-product-image.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Click on the product image (not the name text) of 'Sauce Labs Backpack'
    - expect: Browser navigates to the corresponding /inventory-item.html?id=<n> detail page for the Backpack

#### 2.9. Should add a product to the cart from the listing page and update badge

**File:** `tests/inventory/should-add-to-cart-from-listing.spec.ts`

**Steps:**
  1. Log in as standard_user
    - expect: Cart badge is not visible (0 items)
  2. Click 'Add to cart' button on 'Sauce Labs Backpack'
    - expect: The button changes to 'Remove'
    - expect: The cart badge icon in the header now displays '1'
  3. Click 'Add to cart' on 'Sauce Labs Bike Light' as well
    - expect: Cart badge updates to display '2'
    - expect: Both product buttons now read 'Remove'

#### 2.10. Should remove a product from the cart directly from the listing page

**File:** `tests/inventory/should-remove-from-cart-on-listing.spec.ts`

**Steps:**
  1. Log in as standard_user and add 'Sauce Labs Backpack' to the cart
    - expect: Cart badge shows '1'
  2. Click the 'Remove' button on the Backpack item
    - expect: Button text reverts to 'Add to cart'
    - expect: Cart badge disappears (0 items) since it was the only item

#### 2.11. Should add a product to the cart from the product detail page

**File:** `tests/inventory/should-add-to-cart-from-detail-page.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Click on 'Sauce Labs Fleece Jacket' to open its detail page
    - expect: Detail page loads showing 'Add to cart' button
  3. Click 'Add to cart' on the detail page
    - expect: Button changes to 'Remove'
    - expect: Cart badge in header shows '1'
  4. Click 'Back to products'
    - expect: Listing page shows the Fleece Jacket's Add to cart button now reading 'Remove', confirming state sync between detail and listing views

#### 2.12. Should remove a product from the cart directly on the product detail page

**File:** `tests/inventory/should-remove-from-cart-on-detail-page.spec.ts`

**Steps:**
  1. Log in as standard_user and add 'Sauce Labs Onesie' to the cart from the listing page
    - expect: Cart badge shows '1'
  2. Navigate to the Onesie's detail page
    - expect: Detail page button reads 'Remove'
  3. Click 'Remove' on the detail page
    - expect: Button changes back to 'Add to cart'
    - expect: Cart badge disappears

#### 2.13. Should allow adding all six products to the cart

**File:** `tests/inventory/should-add-all-products-to-cart.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Click 'Add to cart' for each of the six products sequentially
    - expect: Cart badge count increases by one after each click, ending at '6'
    - expect: All six buttons now display 'Remove'

### 3. Shopping Cart Suite

**Seed:** `tests/cart/seed.spec.ts`

#### 3.1. Should show empty cart when no items have been added

**File:** `tests/cart/should-show-empty-cart.spec.ts`

**Steps:**
  1. Log in as standard_user
    - expect: No cart badge is visible
  2. Click the shopping cart icon in the header
    - expect: Navigates to /cart.html
    - expect: 'Your Cart' heading is visible
    - expect: No line items are listed
    - expect: 'Continue Shopping' and 'Checkout' buttons are both visible

#### 3.2. Should display correct cart contents after adding items

**File:** `tests/cart/should-display-cart-contents.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Add 'Sauce Labs Backpack' and 'Sauce Labs Bike Light' to the cart from the listing page
    - expect: Cart badge shows '2'
  3. Click the cart icon to open /cart.html
    - expect: Cart lists both items with correct quantity '1' each, correct names, descriptions, and prices ($29.99 and $9.99)
    - expect: Each line item has its own 'Remove' button

#### 3.3. Should update cart badge count in real time as items are added and removed

**File:** `tests/cart/should-update-badge-count.spec.ts`

**Steps:**
  1. Log in as standard_user
    - expect: No badge shown
  2. Add one product to cart
    - expect: Badge shows '1'
  3. Add a second product to cart
    - expect: Badge shows '2'
  4. Remove one product from the listing page
    - expect: Badge decreases to '1'
  5. Remove the remaining product
    - expect: Badge disappears entirely (no '0' shown, badge element is not rendered)

#### 3.4. Should remove an item from the cart page

**File:** `tests/cart/should-remove-item-from-cart-page.spec.ts`

**Steps:**
  1. Log in as standard_user and add 'Sauce Labs Bolt T-Shirt' and 'Sauce Labs Onesie' to the cart
    - expect: Cart badge shows '2'
  2. Open the cart page
    - expect: Both items listed
  3. Click 'Remove' on the 'Sauce Labs Onesie' line item
    - expect: The Onesie row disappears from the cart list
    - expect: Only 'Sauce Labs Bolt T-Shirt' remains
    - expect: Cart badge updates to '1'

#### 3.5. Should return to listing page when clicking Continue Shopping

**File:** `tests/cart/should-continue-shopping.spec.ts`

**Steps:**
  1. Log in as standard_user and add one product to the cart
  2. Navigate to the cart page
  3. Click 'Continue Shopping'
    - expect: User is redirected back to /inventory.html
    - expect: The previously added item remains in the cart (badge still shows '1')

#### 3.6. Should navigate to checkout step one when clicking Checkout with items in cart

**File:** `tests/cart/should-proceed-to-checkout.spec.ts`

**Steps:**
  1. Log in as standard_user and add at least one item to the cart
  2. Navigate to the cart page and click 'Checkout'
    - expect: User is redirected to /checkout-step-one.html
    - expect: 'Checkout: Your Information' heading is visible with First Name, Last Name, and Zip/Postal Code fields

#### 3.7. Should allow proceeding to checkout with an empty cart

**File:** `tests/cart/should-allow-checkout-with-empty-cart.spec.ts`

**Steps:**
  1. Log in as standard_user without adding any items
    - expect: No badge shown
  2. Navigate to the cart page and click 'Checkout'
    - expect: Document actual behavior: verify whether the app allows proceeding to checkout-step-one.html with zero items, or blocks/warns the user

#### 3.8. Should click product name link within cart to view its detail page

**File:** `tests/cart/should-navigate-to-detail-from-cart.spec.ts`

**Steps:**
  1. Log in as standard_user and add 'Sauce Labs Backpack' to the cart
  2. Open the cart page and click the 'Sauce Labs Backpack' name link in the cart line item
    - expect: User navigates to the Backpack's product detail page

### 4. Checkout Flow Suite

**Seed:** `tests/checkout/seed.spec.ts`

#### 4.1. Should complete full checkout successfully with valid information

**File:** `tests/checkout/should-complete-checkout-successfully.spec.ts`

**Steps:**
  1. Log in as standard_user and add 'Sauce Labs Backpack' ($29.99) to the cart
    - expect: Badge shows '1'
  2. Open the cart and click 'Checkout'
    - expect: Lands on /checkout-step-one.html
  3. Fill First Name 'John', Last Name 'Doe', Zip/Postal Code '12345'
  4. Click 'Continue'
    - expect: User is redirected to /checkout-step-two.html ('Checkout: Overview')
    - expect: Line item 'Sauce Labs Backpack' qty 1 at $29.99 is shown
    - expect: Payment Information shows 'SauceCard #31337'
    - expect: Shipping Information shows 'Free Pony Express Delivery!'
    - expect: Item total: $29.99, Tax: $2.40, Total: $32.39 (tax = item total * 8%, rounded to 2 decimals)
  5. Click 'Finish'
    - expect: User is redirected to /checkout-complete.html
    - expect: Page shows 'Thank you for your order!' heading and 'Your order has been dispatched...' message
    - expect: Pony Express image is displayed
    - expect: 'Back Home' and 'Generate PDF order' buttons are visible
  6. Click 'Back Home'
    - expect: User returns to /inventory.html
    - expect: Cart badge is no longer visible (cart has been cleared)
    - expect: All product buttons read 'Add to cart' again (no residual cart state)

#### 4.2. Should complete checkout successfully with multiple items and verify total calculation

**File:** `tests/checkout/should-complete-checkout-with-multiple-items.spec.ts`

**Steps:**
  1. Log in as standard_user and add 'Sauce Labs Backpack' ($29.99), 'Sauce Labs Bike Light' ($9.99), and 'Sauce Labs Onesie' ($7.99) to the cart
    - expect: Badge shows '3'
  2. Proceed to checkout, fill in valid First Name, Last Name, Zip Code, and click Continue
    - expect: Overview page lists all three items with correct individual prices
  3. Verify totals on overview page
    - expect: Item total equals sum of the three prices: $47.97
    - expect: Tax is calculated as 8% of item total: $3.84
    - expect: Total equals item total + tax: $51.81
  4. Click 'Finish'
    - expect: Order completes successfully with confirmation message

#### 4.3. Should show validation error when First Name is missing

**File:** `tests/checkout/should-require-first-name.spec.ts`

**Steps:**
  1. Log in as standard_user, add an item to cart, and proceed to /checkout-step-one.html
  2. Leave First Name blank; fill Last Name 'Doe' and Zip '12345'
  3. Click 'Continue'
    - expect: User remains on /checkout-step-one.html
    - expect: Error banner shows 'Error: First Name is required'
    - expect: First Name field is outlined in red

#### 4.4. Should show validation error when Last Name is missing

**File:** `tests/checkout/should-require-last-name.spec.ts`

**Steps:**
  1. Log in as standard_user, add an item to cart, and proceed to checkout step one
  2. Fill First Name 'John'; leave Last Name blank; fill Zip '12345'
  3. Click 'Continue'
    - expect: Error banner shows 'Error: Last Name is required'
    - expect: User remains on the same page

#### 4.5. Should show validation error when Postal Code is missing

**File:** `tests/checkout/should-require-postal-code.spec.ts`

**Steps:**
  1. Log in as standard_user, add an item to cart, and proceed to checkout step one
  2. Fill First Name 'John' and Last Name 'Doe'; leave Zip/Postal Code blank
  3. Click 'Continue'
    - expect: Error banner shows 'Error: Postal Code is required'
    - expect: User remains on the same page

#### 4.6. Should show validation error when all checkout information fields are empty

**File:** `tests/checkout/should-require-all-fields.spec.ts`

**Steps:**
  1. Log in as standard_user, add an item to cart, and proceed to checkout step one
  2. Leave all three fields (First Name, Last Name, Postal Code) empty
  3. Click 'Continue'
    - expect: Error banner shows 'Error: First Name is required' (validation stops at the first missing required field)
    - expect: User remains on /checkout-step-one.html

#### 4.7. Should be able to dismiss the checkout error banner

**File:** `tests/checkout/should-dismiss-error-banner.spec.ts`

**Steps:**
  1. Log in as standard_user, add an item, proceed to checkout step one, and click Continue with empty fields to trigger an error
    - expect: Error banner is shown with a close (X) button
  2. Click the close (X) icon on the error banner
    - expect: The error banner is dismissed and no longer visible
    - expect: Form fields remain on screen for correction

#### 4.8. Should cancel from checkout step one and return to cart

**File:** `tests/checkout/should-cancel-from-step-one.spec.ts`

**Steps:**
  1. Log in as standard_user, add an item to the cart, and proceed to /checkout-step-one.html
  2. Click 'Cancel'
    - expect: User is redirected to /cart.html
    - expect: The previously added item is still present in the cart (cart is not cleared by cancelling)

#### 4.9. Should cancel from checkout overview and return to inventory page

**File:** `tests/checkout/should-cancel-from-overview.spec.ts`

**Steps:**
  1. Log in as standard_user, add an item to the cart, proceed through checkout step one with valid info to reach /checkout-step-two.html
    - expect: Overview page is displayed with item summary and totals
  2. Click 'Cancel'
    - expect: User is redirected to /inventory.html
    - expect: Cart badge still shows the item count (item is not removed by cancelling the overview step)

#### 4.10. Should accept alphanumeric and special characters in checkout info fields

**File:** `tests/checkout/should-accept-various-input-formats.spec.ts`

**Steps:**
  1. Log in as standard_user, add an item to the cart, and proceed to checkout step one
  2. Enter a long name with special characters (e.g., "O'Brien-Smith") in First/Last Name and an alphanumeric postal code (e.g., 'SW1A 1AA')
  3. Click 'Continue'
    - expect: Form accepts the input without validation errors and proceeds to the Overview page (confirms no restrictive character validation on these fields)

#### 4.11. Should not allow navigating directly to checkout step two without completing step one

**File:** `tests/checkout/should-block-skipping-step-one.spec.ts`

**Steps:**
  1. Log in as standard_user and add an item to the cart
  2. Without visiting /checkout-step-one.html, navigate directly to https://www.saucedemo.com/checkout-step-two.html
    - expect: Document actual behavior: verify whether the app blocks access (redirect/error) or simply renders the Overview page with cart contents despite skipping the information form

#### 4.12. Should redirect to login when accessing checkout pages while logged out

**File:** `tests/checkout/should-block-checkout-access-when-logged-out.spec.ts`

**Steps:**
  1. Without logging in, navigate directly to https://www.saucedemo.com/checkout-step-one.html
    - expect: User is redirected to the login page instead of seeing the checkout form

### 5. Navigation & Cross-Cutting Suite

**Seed:** `tests/navigation/seed.spec.ts`

#### 5.1. Should open and close the hamburger menu

**File:** `tests/navigation/should-open-close-hamburger-menu.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Click the 'Open Menu' hamburger button
    - expect: Side menu slides in showing links: 'All Items', 'About', 'Logout', 'Reset App State', and a 'Close Menu' (X) button
  3. Click the 'Close Menu' button
    - expect: Side menu closes/hides

#### 5.2. Should navigate to products page via 'All Items' menu link

**File:** `tests/navigation/should-navigate-via-all-items.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Navigate into a product detail page
  3. Open the hamburger menu and click 'All Items'
    - expect: User is redirected back to /inventory.html showing the full product list

#### 5.3. Should navigate to Sauce Labs marketing site via 'About' menu link

**File:** `tests/navigation/should-navigate-via-about-link.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Open the hamburger menu and click 'About'
    - expect: Browser navigates to https://saucelabs.com/ (external site), leaving the SauceDemo application

#### 5.4. Should reset app state via 'Reset App State' menu link

**File:** `tests/navigation/should-reset-app-state.spec.ts`

**Steps:**
  1. Log in as standard_user and add two products to the cart
    - expect: Cart badge shows '2'
    - expect: Two 'Add to cart' buttons now read 'Remove'
  2. Open the hamburger menu and click 'Reset App State'
    - expect: Cart badge disappears (cart is emptied)
    - expect: Product buttons on the listing page revert to 'Add to cart'
    - expect: Menu remains open or closes per app behavior; user stays on /inventory.html
  3. Refresh the page
    - expect: Cart remains empty, confirming the reset persisted (not just a UI-only change)

#### 5.5. Should logout via hamburger menu from any page (cart page)

**File:** `tests/navigation/should-logout-from-cart-page.spec.ts`

**Steps:**
  1. Log in as standard_user, add an item to the cart, and navigate to the cart page
  2. Open the hamburger menu and click 'Logout'
    - expect: User is redirected to the login page
    - expect: Session/cart state is cleared such that logging back in as standard_user shows an empty cart

#### 5.6. Should logout via hamburger menu from checkout overview page

**File:** `tests/navigation/should-logout-from-checkout-page.spec.ts`

**Steps:**
  1. Log in as standard_user, add an item, and proceed to the checkout overview page
  2. Open the hamburger menu and click 'Logout'
    - expect: User is redirected to the login page regardless of mid-checkout state

#### 5.7. Should preserve cart contents when navigating between inventory, detail, and cart pages

**File:** `tests/navigation/should-persist-cart-across-navigation.spec.ts`

**Steps:**
  1. Log in as standard_user and add 'Sauce Labs Backpack' to the cart from the listing page
    - expect: Badge shows '1'
  2. Navigate to a different product's detail page, then back to products, then open the cart page
    - expect: The Backpack remains in the cart throughout every navigation step
    - expect: Cart badge consistently reflects '1' on every page

#### 5.8. Should reject footer social links opening external sites without breaking the app

**File:** `tests/navigation/should-verify-footer-social-links.spec.ts`

**Steps:**
  1. Log in as standard_user
  2. Inspect footer links for Twitter, Facebook, and LinkedIn
    - expect: Twitter link points to https://twitter.com/saucelabs
    - expect: Facebook link points to https://www.facebook.com/saucelabs
    - expect: LinkedIn link points to https://www.linkedin.com/company/sauce-labs/
    - expect: Footer copyright text displays current year and 'Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy'

#### 5.9. Should not allow going back to a completed order's checkout pages via browser back button

**File:** `tests/navigation/should-block-back-navigation-after-order-complete.spec.ts`

**Steps:**
  1. Log in as standard_user, add an item, and complete the full checkout flow to reach /checkout-complete.html
  2. Use the browser Back button
    - expect: Document actual behavior: verify whether the browser shows the stale checkout-complete or overview page from cache, and confirm that resubmitting/finishing again is not possible since the cart is already empty
