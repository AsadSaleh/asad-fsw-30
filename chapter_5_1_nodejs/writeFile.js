const fileSystem = require("fs");

const stream = fileSystem.createWriteStream("my_file.txt");

stream.once("open", function (fd) {
  stream.write("My first row\n");
  stream.write("My second row\n");
  stream.end();
});
