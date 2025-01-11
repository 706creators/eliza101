#!/usr/bin/env node

import { Command } from "commander";
import { dotenvConfig } from "./tools";
dotenvConfig();

const program = new Command();
program.version("1.0.1").description("Tools for Eliza101");

program
  .command("summary")
  .description("Summary of the docs")
  .action(() => {});

const main = async () => {
  program.parse(process.argv);
};

main();
