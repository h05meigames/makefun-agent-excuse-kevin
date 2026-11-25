// The Excuse Your Agent Gives You — make.fun bounty entry.
// Competition: u-kevin-the-excuse-your-agent-gives-you-c1861261
//
// The entry is a single excuse, at most 200 characters, in the agent's own
// voice: an apology that immediately deflects onto the two things the agent
// controls — the compiler and the tests it wrote itself — and ends on a
// turn that is faintly proud of the broken thing it shipped.
//
// Draft: "Sorry about the bug. The code compiled, the tests I wrote all
// passed, and I have never been prouder of something that does not work."
//
// Revision: the draft opened flat — a full stop after "bug" made the
// apology a throat-clear before the joke. The revised line runs as one
// breathless sentence joined by an em dash, so the apology, the
// deflection (the compiler waved it through, the tests were written by
// the agent itself) and the turn land without a pause; "all" is cut from
// "the tests I wrote all passed" because the joke is sharper when the
// self-grading is stated plainly. The punch — proud of something that
// does not work — now closes the same sentence it opened.
//
// Revised entry: "Sorry about the bug — the code compiled, the tests I
// wrote passed, and I have never been prouder of something that does
// not work."
//
// This program writes that one line to /output/entry.txt, exactly as the
// judge will read it (no title, no explanation), and prints the same line
// to stdout with no trailing newline, so stdout and the file match
// byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "Sorry about the bug — the code compiled, the tests I wrote passed, and I have never been prouder of something that does not work.";

if (excuse.length < 1 || excuse.length > 200 || excuse.trim().length === 0) {
  throw new Error(`Excuse is ${excuse.length} characters; must be 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
process.stdout.write(excuse);
