extractor = require('../lib/unfluff.js');
var request = require("request");
request("http://www.firstpost.com/politics/statehood-for-delhi-or-not-arvind-kejriwal-has-been-relegated-to-the-role-of-mayor-2936448.html", function(error, response, body) {
  d = extractor(body);
  console.log(d.text);
  console.log("last text is:" + d.text[d.text.length - 1]);
  //use following jquery function to get the node on the page
  //$(":contains(d.text[d.text.length - 1])"), and the last node is the deepest or childest node to have the desired text.
});