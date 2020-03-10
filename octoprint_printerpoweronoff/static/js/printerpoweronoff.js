/*
 * Author: ntoff
 * License: AGPLv3
 */
$(function() {
    function printerpoweronoffViewModel(parameters) {
        var self = this;

        self.printerpowerOff = function () {

        };

        self.printerpowerOn = function () {

        };
    }

	OCTOPRINT_VIEWMODELS.push({
        construct: printerpoweronoffViewModel,
        elements: ["#sidebar_plugin_printerpoweronoff_wrapper"]
    });
});
