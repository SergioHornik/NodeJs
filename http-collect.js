var http = require("http");
var b1 = require("b1");
http.get(process.argv[2], function(response) {
  response.pipe(
    b1(function(err, data) {
      if (err) {
        return console.error(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
