# README

## Summary
This folder is being used as a template and educational platform in order to;
  - Undertsand PhantomJS
  - Understand CasperJS
  - Understand Slimerjs
  - Fix/Unify automated browser tests on platform

## PhantomJS
PhantomJS is a scripted, headless browser used for automating web page interaction. PhantomJS provides a JavaScript API enabling automated navigation, screenshots, user behavior and assertions making it a common tool used to run browser-based unit tests in a headless system like a continuous integration environment.

## Getting started
Run the virtual environment with `venv` with

```source DeskGen/venv/bin/activate```

Run tests in `test` folder with 

```node_modules/phantomjs/bin/phantom test/*.js```

Run casperjs tests

```casperjs test [test-file]```

## Next actions
Review Slimerjs and see why we used slimerjs with casper js. Assumption is to display the running browser..

## So far:
**05/30/2017**
- Install CasperJS globally using brew usr/local/bin/casperjs
- Updated phantomjs executable path to meetin casperjs needs user/local/bin/phanotmjs
- built example tests for running functional browser tests
  - get page header (sample.js)
  - run simple hello test (sample-test.js)
  - google link scraper (googlelinks.js)
  - well commented example case (example01.js)
  - another example case with click, nav, key entry (example02.js)
- built dtg cases for initial test coverage
  - nav to homepage (dtg01.js)
  - landing navigation (dtg02.js)
  - key entry working on this now  (dtg03.js)

Note: Examples found http://casperjs.org/

- Installed phantomjs locally
- built example tests for running a headless browser
  - General hello file (hello.js)
  - load response speed of page (loadspeed.js)
  - get page header (getheader.js)
  - generate a screenshot of the page (render.js)
  - generate request and response for load of page (reqRes.js)

Note: Examples found http://phantomjs.org/quick-start.html

 
