import { test, expect } from "@playwright/test";

test("should navigate to the detail page on patient click", async ({
  page,
}) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text '46' and click on it
  await page.click("text=46");
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("/detail/46");
  // The new page should contain an h1 with "Detail"
  await expect(page.locator("h1")).toContainText("Detail");
  await expect(page.locator("button")).toContainText("Delete");
  await page.getByText("Delete").click();
  await page.getByText("Yes").click();
  await expect(page).toHaveURL("/");
});
