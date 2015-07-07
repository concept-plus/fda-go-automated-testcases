
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
    'Verify recall links are on results page': function(client) {
        client
		    .assert.urlContains(client.globals.srchCrit5)
            .verify.elementPresent(client.globals.sidebarDrugRecallBtnID)
			.verify.elementPresent(client.globals.sidebarDeviceRecallBtnID)
			.verify.elementPresent(client.globals.sidebarFoodRecallBtnID)
            .pause(1000);

        client.globals.TakeSS(client, 'BPA-190-verify_recall_links');
    },
	'Click on Drug recalls button and verify drug results come up': function(client) {
        client
		    .click(client.globals.sidebarDrugRecallBtnID)
            .pause(2000)
			.verify.elementPresent('#main-content h1')
            .verify.containsText('#main-content h1',client.globals.drgRecallTxt)
            //.pause(1000);

        client.globals.TakeSS(client, 'BPA-190-drug_recall_results');
    },
	'Click on Device recalls button and verify devices results come up': function(client) {
        client
		    .click(client.globals.sidebarDeviceRecallBtnID)
            .pause(2000)
			.verify.elementPresent('#main-content h1')
			.verify.containsText('#main-content h1',client.globals.devRecallTxt)
            //.pause(1000);

        client.globals.TakeSS(client, 'BPA-190-device_recall_results');
    },
	'Click on food recalls button and verify food come up': function(client) {
        client
		    .click(client.globals.sidebarFoodRecallBtnID)
            .pause(2000)
			.verify.elementPresent('#main-content h1')
			.verify.containsText('#main-content h1',client.globals.fdRecallTxt)
            //.pause(1000);

        client.globals.TakeSS(client, 'BPA-190-food_recall_results');
    },

    'Close Client': function(client) {
        client.end();
    }


};