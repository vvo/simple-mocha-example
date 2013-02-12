(function(global) {
    "use strict";

    Mocha.reporters.GlobalReporter = GlobalReporter;

    // A simple mocha reporter that extends HTML reporter to expose
    // results in a global object that will be read by Selenium
    function GlobalReporter(runner) {
      Mocha.reporters.HTML.call(this, runner);

      var failed = [];

      runner.on('fail', function(test, err) {
        failed.push({
          title: test.title,
          fullTitle: test.fullTitle(),
          error: {
            message: err.message,
            stack: err.stack
          }
        });
      });

      runner.on('end', function() {
        runner.stats.failed = failed;
        global.mochaResults = runner.stats;
      });
    }

}(this));

