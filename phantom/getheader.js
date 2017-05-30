//Get the title of a webpage

var page = require('webpage').create();
page.onConsoleMessage = function(msg) {
  console.log('Page title is ' + msg);
};
page.open('https://www.deskgen.com/landing/', function(status) {
  page.evaluate(function () {
    console.log(document.title);
  });
  phantom.exit();
});
