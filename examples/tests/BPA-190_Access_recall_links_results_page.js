
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
   
	'Click on Device recalls button and verify devices results come up': function(client) {
        client
		    .click(client.globals.sidebarDeviceRecallBtnID)
            .pause(5000)
            .verify.elementPresent('#label-results-table tr');

        
    },
	'Click on food recalls button and verify food come up': function(client) {
        client
		    .click(client.globals.sidebarFoodRecallBtnID)
            .pause(5000)
            .verify.elementPresent('#recall-results-table tr');

    },

    'Close Client': function(client) {
        client.end();
    }


};