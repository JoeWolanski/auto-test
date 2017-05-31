//Key entry in password reset
casper.test.begin('reset password test', 4, function suite(test) {
  casper.start('https://www.deskgen.com/reset-password', function () {
    this.click('section section label input:first-child');
  });  
  casper.then(function () {

    //unable to click on item (find selector clicking documentation)
    // Follow a specific menu item whose `accesskey` attribute is "c"
    this.sendKeys('section section label input', 'j,o,s,e,p,h,w,@,d,e,s,k,g,e,n,.,c,o,m');
  });
  casper.run(function () {
    test.done();
  });
});