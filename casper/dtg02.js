//Navigate to all landing pages and assert url
casper.test.begin('click test landing', 10, function suite(test) {
  casper.start('https://www.deskgen.com', function () {
    //click deskgen logo
    this.click('header nav h1 a:first-child');

    test.comment('wait for click on bug log');
  });
  casper.then(function () {
    test.assertUrlMatch('https://www.deskgen.com/landing', 'Nav to ' + this.getCurrentUrl());
  });

  casper.then(function () {
    this.click('a#mainheader-nav-about.ng-scope');

    test.comment('wait for click on company');
  });
  casper.then(function () {
    test.assertUrlMatch('https://www.deskgen.com/landing/company', 'Nav to ' + this.getCurrentUrl());
  });

  casper.then(function () {
    this.click('a#mainheader-nav-library.ng-scope');

    test.comment('wait for click on library');
  });
  casper.then(function () {
    test.assertUrlMatch('https://www.deskgen.com/landing/library', 'Nav to ' + this.getCurrentUrl());
  });

  casper.then(function () {
    this.click('a#mainheader-nav-cloud');

    test.comment('wait for click on cloud');
  });
  casper.then(function () {
    test.assertUrlMatch('https://www.deskgen.com/landing/cloud', 'Nav to ' + this.getCurrentUrl());
  });

  casper.then(function () {
    this.click('a#mainheader-nav-genotyping');

    test.comment('wait for click on genotyping');
  });
  casper.then(function () {
    test.assertUrlMatch('https://www.deskgen.com/landing/genotyping', 'Nav to ' + this.getCurrentUrl());
  });
  
  casper.then(function () {
    this.click('a#mainheader-nav-blog');

    test.comment('wait for click on blog');
  });
  casper.then(function () {
    test.assertUrlMatch('https://www.deskgen.com/landing/blog', 'Nav to ' + this.getCurrentUrl());
  });  

  casper.then(function () {
    this.click('a#mainheader-nav-resources.ng-scope');

    test.comment('wait for click on resources');
  });
  casper.then(function () {
    test.assertUrlMatch('https://www.deskgen.com/landing/resources', 'Nav to ' + this.getCurrentUrl());
  });  

  casper.then(function () {
    this.click('a#mainheader-nav-contactus.ng-scope');

    test.comment('wait for click on contact us');
  });
  casper.then(function () {
    test.assertUrlMatch('https://www.deskgen.com/landing/contact-us', 'Nav to ' + this.getCurrentUrl());
  });

  casper.then(function () {
    this.click('a#mainheader-nav-login.ng-scope');

    test.comment('wait for click on login');
  });
  casper.then(function () {
    test.assertUrlMatch('https://www.deskgen.com/landing/login', 'Nav to ' + this.getCurrentUrl());
  });  

  casper.then(function () {
    this.click('a#mainheader-nav-signup');

    test.comment('wait for click on signup');
  });
  casper.then(function () {
    test.assertUrlMatch('https://www.deskgen.com/landing/signup', 'Nav to ' + this.getCurrentUrl());
  });

  casper.run(function () {
    test.done();
  });
});