/* eslint-env node */
import { cpSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "..", "src", "data");
const dest = path.join(__dirname, "..", "dist", "data");

try {
  cpSync(src, dest, { recursive: true, force: true });
  console.log("Copied:", src, "→", dest);
} catch (err) {
  console.error("Copy failed:", err);
  throw err;
}
