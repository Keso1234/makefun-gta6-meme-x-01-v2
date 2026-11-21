// main.ts — copies POST.json from this repository to the output directory.
// Node 22, standard library only. The post itself is judged from X; this
// program only hands the house the post's address.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
// Fall back to /output when the variable is unset OR empty.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "POST.json"), join(outDir, "POST.json"));
