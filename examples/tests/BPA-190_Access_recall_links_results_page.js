
module.exports = {
    disabled: false,
    //Global vars - use variables defined in globalsModule.js file by client.global.VARIABLE_NAME
    'Access URL': function(client) {
        client
            .url(client.launchUrl)
            .waitForElementVisible('body', 1000);
    },
    'Search for Motrin': function(client) {
        client
            .verify.elementPresent(client.globals.srchbxID)
			.setValue(client.globals.srchbxID,client.globals.srchCrit5)
			.click(client.globals.srchbtnID)
        client.globals.TakeSS(client, 'BPA-190- recall_links_mainpage');
   },
   

    'Close Client': function(client) {
        client.end();
    }


};