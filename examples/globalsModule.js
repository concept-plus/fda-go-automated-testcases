module.exports = {
    /****************************/
    /**** Global Variables ******/
    /****************************/
    srchCrit: 'Aspirin',
    srchCrit2: 'Caffeine',
    srchCrit3: 'Acetaminophen',

    /****************************/
    /****** Landing Page ********/
    /****************************/
    srchbxID: '#search-box',
    srchbtnID: '#search-button',
    drgRclBtnID: '#drug-recall-button',
    dvcRclBtnID: '#device-recall-button',
    fdRclBtnID: '#food-recall-button',
    helpBtnID: '#help-main-page',

    /****************************/
    /********* Sidebar **********/
    /****************************/
    sbSrchBxID: '#search-button-sidebar',
    sbSrchBtnID: '#sidebar-search-box',

    /****************************/
    /****** Results Page ********/
    /****************************/
    mnCntDivID: '#main_content',
    resultsTblID: '#recall-results-table',


    /****************************/
    /****** Details Page ********/
    /****************************/

    /****************************/
    /******* Help Modal *********/
    /****************************/
    helpModalID: '#myModal',
    modalBodyCL: '.modal-body',
    closeBtnCl: '.close',
    helpIndexPgID: '#help-index-page',

    /****************************/
    /***** Global Fuctions ******/
    /****************************/

    //Function for taking the screenshots
    // How-to use:
    // client.globals.screenshots(pass_reference_to_client, pass_name_of_screenshot);
    // example:
    // client.globals.screenshots(client, 'BPA-75-search_results');

    TakeSS: function(client, name) {
        var viewport_widths = [767, 768, 1280, 1460];

        viewport_widths.forEach(function(width) {
            client
                .resizeWindow(width, 500)
                .saveScreenshot(client.screenshotsPath + name + width + '.png')
        });
    }


};