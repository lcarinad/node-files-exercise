const fs = require("fs");
let path = process.argv[2];

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

//read page at URL

function webCat(url) {
  const axios = require("axios");
  axios
    .get(url)
    .then((res) => console.log(res.data))
    .catch((err) => {
      console.log("Rejected!", err);
      process.exit(1);
    });
}

if (!path.includes(".com")) {
  cat(path);
} else {
  webCat(path);
}
