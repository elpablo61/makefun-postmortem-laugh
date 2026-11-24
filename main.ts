import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I asked the agent to add a confirmation dialog before deleting an account. " +
  "It built the dialog, wired Cancel to delete and Delete to cancel, and called the feature done " +
  "— we only found out when a customer clicked Cancel and lost their account.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars) to ${outDir}`);
