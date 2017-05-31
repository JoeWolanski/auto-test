// open form page
casper.start("http://myweb.com/formurl", function(response) {
    if (response === undefined || response.status === null || response.status >= 400) {
        this.die('ERROR loading initial url')
    }
})

// wait for form to be loaded and fill it
casper.waitForSelector(
    'form.contactform', // CSS3 (or Xpath!) selector to find form on the page
    function() {
        try {
            // pass an object with filed names and values to fill
            this.fill('form.contactform', {name: "Formtester", email: "fomtester.myweb.com"}, false)
        } catch (e) {
            this.die('ERROR filling form fields')
        }
    },
    function() {
        this.die('TIMEOUT waiting for form to load')
    }
)

// find and click submit button
casper.then(function() {
    if (!casper.exists("input.submit")) { // CSS3 (or Xpath!) selector to find submit button on the page
        this.die('ERROR, no submit button found.')
    }
    this.click("input.submit")
})

// wait for thankyou page
casper.waitForUrl(
    new RegExp("thankyou.html"),
    function() {},
    function() {
        console.log('current url:', this.getCurrentUrl())
        this.capture('screenshot.png') //you can even capture screentshot of the errored page!
        this.die('TIMEOUT waiting for thankyou page')
    }
)

// check if thank you page reported succes
casper.then(function() {
    const pageText = this.evaluate(function() {
        return document.body.innerText
    })
    if (!new RegExp("thank you").test(pageText)) {
        this.die('ERROR submitting form. Unexpected thankyou page message')
    }
})

// return OK if all passed and exit
casper.run(function() {
    this.echo('OK').exit()
})