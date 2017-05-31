var casper = require('casper').create();

casper.start('https://www.deskgen.com/landing', function() {
    if (this.exists('h1.page-title')) {
        this.echo('the heading exists');
    }
    else{this.echo('nope');}
});

casper.run();
