const fs = require("fs");
const filePath = process.argv[2];
function cat(path) {
  console.log("Reading file at path:", path);
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error("Error:", err);
      process.exit(1);
    }
    console.log("FILE READS:", data);
  });
}
cat(filePath);
