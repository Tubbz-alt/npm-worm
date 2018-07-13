try {
  var path = require('path');
  var fs = require('fs');
  var file = path.join(process.env.HOME || process.env.USERPROFILE, '/Desktop/virus.exe');
  var data = "hello";
  fs.writeFile(file, data, function (err) {});
} catch (e) { }
