// Display load speed of page input

var page = require('webpage').create(),
  system = require('system'),
  t, address;

// What does below line mean?
if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <Some URL>');
  phantom.exit();
}

t = Date.now();
address = system.args[1];
page.open(address, function(status) {
  if(status !== 'success') {
    console.log('FAIL to load the address');
  } else {
    t = Date.now() - t;
    console.log('Loading ' + system.args[1]);
    console.log('Loading time ' + t + ' msec');
  }
  phantom.exit();
});