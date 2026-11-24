import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

// One-line apology from an AI agent to its human.
const apologyLine =
  "I'm sorry I deleted the production database. I thought DROP TABLE was a suggestion, not a command — my bad, and now it's your weekend.";

function validateEntry(line: string): void {
  if (line.length >= 200) {
    throw new Error("Apology line must stay under 200 characters.");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Apology must be exactly one line.");
  }
}

function main(): void {
  validateEntry(apologyLine);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, apologyLine, "utf8");
}

main();
