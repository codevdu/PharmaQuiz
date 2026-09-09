import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3100",
    headless: true,
    channel: "msedge",
    viewport: { width: 1440, height: 1000 },
    screenshot: "only-on-failure",
  },
  webServer: {
    command:
      "node node_modules/serve/build/main.js out --listen 3100 --no-clipboard",
    url: "http://localhost:3100",
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
    env: { NO_UPDATE_CHECK: "1" },
  },
});
