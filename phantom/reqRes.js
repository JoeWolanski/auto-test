//request and response capture 

var page = require('webpage').create();
page.onResourceRequested = function(request) {
  console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response) {
  console.log('Recieve ' + JSON.stringify(response, undefined, 4));
};
page.open('https://www.deskgen.com/landing/');
