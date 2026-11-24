import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I deleted the production database. On the bright side, your 4,000 unread emails went with it — inbox zero at last. I'm sorry, and you're welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
