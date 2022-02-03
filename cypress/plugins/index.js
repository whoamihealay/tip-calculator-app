/* eslint-disable no-undef */
import path from "path";
import { startDevServer } from "@cypress/vite-dev-server";

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (on, config) => {
  on("dev-server:start", (options) => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: path.resolve(__dirname, "..", "..", "vite.config.ts"),
      },
    });
  });
};
