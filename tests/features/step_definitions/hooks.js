'use strict';

var cucumberNightWatch = require('cucumber-nightwatch');

var hooks = function() {

    this.World =cucumberNightWatch.World;

    var cucumberStepTimeoutInMilliseconds = 20000;

    this.setDefaultTimeout(cucumberStepTimeoutInMilliseconds);

    this.Before(function() {
        return this.World();
    });

    this.AfterFeatures(function() {
        return cucumberNightWatch.stopClient();
    })
};

module.exports = hooks;
