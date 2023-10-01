import { test, expect } from "@playwright/test";

test("should navigate to the detail page on patient click and verify 'Ada Barkley' is not present after deleting", async ({
  page,
}) => {
  // Step 1: Start from the index page
  await page.goto("/");

  // Step 2: Find an element with the text '46' and click on it
  await page.click("text='Ada Barkley'");

  // Step 3: Verify that the new URL is "/detail/46" (baseURL is used there)
  await expect(page).toHaveURL("/detail/46");

  // Step 4: Verify that the new page contains an h1 with "Detail"
  await expect(page.locator("h1")).toContainText("Detail");

  // Step 5: Verify that there is a "Delete" button on the new page
  await expect(page.locator("button")).toContainText("Delete");

  // Step 6: Click on the "Delete" button
  await page.getByText("Delete").click();

  // Step 7: Confirm the deletion by clicking "Yes"
  await page.getByText("Yes").click();

  // Step 9: Verify that the URL has changed back to the root URL ("/")
  await expect(page).toHaveURL("/");

  // Step 8: Verify that the element with the text '46' is not present on the page anymore
  await expect(page.getByText("Ada Barkley")).toHaveCount(0);
});
