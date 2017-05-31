//Landing on the home page and assert existence of section
casper.test.begin('DTG01', 1, function suite(test) {
  casper.start('https://www.deskgen.com/landing', function () {
    test.assertExists('section', '<section> element found.');
    this.viewport(1280,1024);
  });
  casper.run(function () {
    test.done();
  });
});