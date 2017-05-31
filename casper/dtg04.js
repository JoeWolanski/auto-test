//fill in and submit request genome form
casper.test.begin('fill and submit request a genome', 1, function suite(test) {
  casper.start('https://www.deskgen.com/landing/requestgenome', function () {
    test.assertExists('form', '<form> element found.');
  });
  casper.waitForSelector("form input[name='name']", function() {
    this.fillSelectors('form#requestgenome-form', {
        'input[name = name ]' : 'Joe Wolanski',
        'input[name = email ]' : 'josephw@deskgen.com',
        'input[name = comments ]' : 'Long comment to make happy',
        'input[name = genomeName ]' : 'Aligator',
        'input[name = species ]' : 'Floridian',
        'input[name = sequenceUrl ]' : 'alithegator.com',
        'input[name = annotationUrl ]' : 'aligatorscales.com',
        //select item from dropdown
        'select[name= experiment ]': 'string:Knockout a gene',
        'select[name= dgexperiment ]': 'string:Guide Picker'
    }, true);
  });
  casper.then(function () {
    this.click('input#requestgenome-submit');
  });
  casper.then(function () {
    test.assertField('name', 'Joe Wolanski');
    test.assertField('email', 'josephw@deskgen.com');
    test.assertField('comments', 'Long comment to make happy');
    test.assertField('genomeName', 'Aligator');
    test.assertField('species', 'Floridian');
    test.assertField('sequenceUrl', 'alithegator.com');
    test.assertField('annotationUrl', 'aligatorscales.com');
    test.assertField('experiment', 'string:Knockout a gene');
    //test.assertExists('div.flash.alert-box.ng-isolate-scope.success');
  });
  /*
  Capture screenshot
  casper.then(function () {
    this.capture('screeny.png');
  });*/
  casper.run(function () {
    test.done();
  });
});