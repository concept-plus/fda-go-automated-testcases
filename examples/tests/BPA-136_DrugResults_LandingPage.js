module.exports = {
    disabled: false,
    //Global vars - use variables defined in globalsModule.js file by client.global.VARIABLE_NAME
    'Access URL': function(client) {
        client
            .url(client.launchUrl)
            .waitForElementVisible('body', 3000);
        //.maximizeWindow();
    },
    'Enter Search': function(client) {
        client
            .verify.elementPresent(client.globals.srchbxID)
            .setValue(client.globals.srchbxID, client.globals.srchCrit2)
            .assert.valueContains(client.globals.srchbxID, client.globals.srchCrit2);
    },
    'Verify Search term displayed on page': function(client) {
        client
            .click(client.globals.srchbtnID)
            .waitForElementPresent('#main-content h1', 1000)
            .verify.containsText('#main-content h1', client.globals.srchCrit2);
            // .pause(100)
            // .verify.elementPresent(client.globals.loadingIndicatorID)
            // .pause(5000);
    },

    'Verify Search header is getting displayed on the side panel': function(client) {
        client
            .verify.containsText('#sidebar .search-title', client.globals.srchhdrtitle);
        // pause(1000);
    },

    'Enter drug brand in search panel': function(client) {
        client
            .setValue(client.globals.sbSrchBxID, client.globals.srchCrit4)
            .click(client.globals.sbSrchBtnID)
            .useCss() //Repointing to the default locator
            .verify.containsText('h1', client.globals.srchCrit4)
    },

    'Enter drug substance in search panel': function(client) {
        client
            .setValue(client.globals.sbSrchBxID, client.globals.srchCrit3)
            .click(client.globals.sbSrchBtnID)
            .useCss()
            .verify.containsText('h1', client.globals.srchCrit3)
    },


    'Close Client': function(client) {
        client.end();
    }


};