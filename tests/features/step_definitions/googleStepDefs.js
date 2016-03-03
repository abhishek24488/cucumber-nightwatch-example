module.exports = function googleStepDefs() {

    this.Given(/^I google "([^"]*)"$/, function (searchString, callback) {
        this.browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 3000)
            .setValue('input[type=text]', searchString);

        this.client.start(callback);
    });

    this.Then(/^I should see the search results$/, function (callback) {
        this.browser
            .pause(1000)
            .end();

        this.client.start(callback);
    });
};
