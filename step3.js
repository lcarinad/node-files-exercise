const fs = require("fs");

//read page at URL

function webCat(url, out) {
  const axios = require("axios");
  axios
    .get(url)
    .then((res) => handleOutPut(res.data, out))
    .catch((err) => {
      console.log(`Couldn't write ${out}: ${err}`);
      process.exit(1);
    });
}

//handle output, write to file if out given
function handleOutPut(text, out) {
  if (out) {
    fs.writeFile(out, text, "utf-8", function (err) {
      if (err) {
        console.log(`Couldn't write ${out}: ${err}`);
        process.exit(1);
      }
    });
  } else {
    console.log(text);
  }
}
function cat(path, out) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${path}:, ${err}`);
      process.exit(1);
    } else {
      handleOutPut(data, out);
    }
  });
}
let path;
let out;

if (process.argv[2] === "--out") {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}
if (!path.includes(".com")) {
  cat(path, out);
} else {
  webCat(path, out);
}
