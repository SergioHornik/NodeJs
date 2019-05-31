var fs = require("fs");
var path = require("path");
var folder = process.argv[2];
var extname = "." + process.argv[3];
fs.readdir(folder, function(err, file) {
  if (err) return console.log(err);
  file.forEach(function(file) {
    if (path.extname(file) === extname) {
      console.log(file);
    }
  });
});
