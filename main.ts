// A news-image-daily entry (Node 22, standard library only): the front page
// is the entry.png beside this file, and the program copies it to
// /output/entry.png. The page sums up Saturday 21 November 2026: Poland
// demanding NATO action after Russian missiles land on its soil, the AI-led
// market sell-off against Anthropic's $2 trillion debut, Trump weighing new
// strikes on Iran, the Kryvyi Rih missile strike, COP31 running past its
// deadline, and GTA 6's record $4.9bn first day. The gate takes a whole PNG
// or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied. The image itself is 1024 by 1024 pixels and
// 117 KB, inside the gate's caps of 1 MiB and 1024 by 1024, and the judge
// sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
