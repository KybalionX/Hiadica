const fs = require('fs');

function message() {
    var stream = fs.createWriteStream("my_file.txt");
stream.once('open', function(fd) {
  stream.write("My first row\n");
  stream.write("My second row\n");
  stream.end();
});
}

module.exports.mFuncion = message;