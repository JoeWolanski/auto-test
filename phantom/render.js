//Screenshot of loaded page

var page = require('webpage').create();
page.open('https://www.deskgen.com/landing/', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('./screen-capture/example.png');
  }
  phantom.exit();
});
