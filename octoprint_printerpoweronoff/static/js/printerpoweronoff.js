/*
 * Author: ntoff
 * License: AGPLv3
 */
$(function() {
    function printerpoweronoffViewModel(parameters) {
        var self = this;

        self.printerpowerOff = function () {
          GPIO.output(23, GPIO.HIGH);
        };

        self.printerpowerOn = function () {
          GPIO.output(23, GPIO.LOW);
        };
    }

	OCTOPRINT_VIEWMODELS.push({
        construct: printerpoweronoffViewModel,
        elements: ["#sidebar_plugin_printerpoweronoff_wrapper"]
    });
});
