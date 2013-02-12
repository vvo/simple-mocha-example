var seleniumRunner = require('selenium-runner');
var test = require('tape');

var config = require('./selenium-config.json');
var tests = [{
    url: 'http://192.168.56.1:8080/test.html',
    exec: checkUnitTests
}];

var t = test('Running unit tests', runTests);

function runTests() {
    seleniumRunner(config, tests, checkSeleniumResult, allTestsFinished);
}

function checkSeleniumResult(err, context) {
    t.error(err, formatContext(context));
}

function allTestsFinished(err) {
    t.error(err, 'All tests finished with no errors');
    t.end();
}

function checkUnitTests(browser, cb) {

    function wait() {
        browser.eval('window.mochaResults', function(err, res){
            var status;

            if (err) return cb(err);

            if (!res) {
                return setTimeout(wait, 1000);
            }

            var error = null;
            if (res && res.passes !== res.tests) {
                error = new Error('Some unit tests did not pass')
            }

            return cb(error);
        });
    }

    wait();
}

function formatContext(context) {
    var path = require('path')
    var util = require('util')
    var url = require('url');

    var parsedUrl = url.parse(context.url, true);
    var text = 'Test: %s, Browser: %s';
    var test = path.basename(parsedUrl.pathname);
    var browser = context.browser.browserName + '@' + context.browser.version;

    return util.format(text, test, browser);
}