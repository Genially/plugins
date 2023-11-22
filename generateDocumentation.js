const fs = require("fs");
const path = require("path");

const docReferencePath = path.join(__dirname, "documentation/docs/reference");

fs.readdir(docReferencePath, (err, files) => {
  files.forEach((file) => {
    console.log(file);
    if (file.endsWith(".md")) {
      prependData(path.join(docReferencePath, file));
    }
  });
});

function prependData(file) {
  console.log(file);

  const data = fs.readFileSync(file);
  const fd = fs.openSync(file, "w+");
  const insert = Buffer.from(`
  ---

  ---
  `);
  fs.writeSync(fd, insert, 0, insert.length, 0);
  fs.writeSync(fd, data, 0, data.length, insert.length);
  fs.close(fd, (err) => {
    if (err) throw err;
  });
}
