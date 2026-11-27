import { defineConfig, devices } from "@playwright/test";

const port = Number(process.env.PORT ?? 3100);

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL: process.env.BASE_URL ?? `http://localhost:${port}`,
    trace: "retain-on-failure",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 }, channel: process.env.PW_CHANNEL } },
    { name: "mobile", use: { ...devices["Pixel 7"], channel: process.env.PW_CHANNEL } },
  ],
  webServer: process.env.BASE_URL
    ? undefined
    : { command: `npm run start -- -p ${port}`, port, reuseExistingServer: true, timeout: 60_000 },
});
