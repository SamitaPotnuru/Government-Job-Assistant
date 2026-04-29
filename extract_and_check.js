const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  fs.writeFileSync("scratch.js", scriptMatch[1]);
  console.log("Extracted script to scratch.js");
} else {
  console.log("No script found");
}
