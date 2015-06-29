module.exports = {
    disabled: false,
    //Global vars - use variables defined in globalsModule.js file by client.global.VARIABLE_NAME
    'Access URL': function(client) {
        client
            .url(client.launchUrl)
            .waitForElementVisible('body', 1000);
    },
    'Enter Search': function(client) {
        client
            .verify.elementPresent('input[id=' + client.globals.srchbxID + ']')
            .setValue('input[id=' + client.globals.srchbxID + ']', client.globals.srchCrit)
            .assert.valueContains('input[id=' + client.globals.srchbxID + ']', client.globals.srchCrit);
    },
    'Verify Search Results with Screen Shots': function(client) {
        client
            .click('button[id=' + client.globals.srchbtnID + ']')
            .pause(1000);

        client.globals.TakeSS(client, 'BPA-75-search_results');
    },

    'Close Client': function(client) {
        client.end();
    }


};