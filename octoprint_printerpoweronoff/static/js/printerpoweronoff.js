/*
 * Author: ntoff
 * License: AGPLv3
 */
$(function() {
    function printerpoweronoffViewModel(parameters) {
        var self = this;

        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BCM)

        self.printerpowerOff = function () {
          self.GPIO.output(23, self.GPIO.HIGH)
        };

        self.printerpowerOn = function () {
          self.GPIO.output(23, self.GPIO.LOW)
        };
    }

	OCTOPRINT_VIEWMODELS.push({
        construct: printerpoweronoffViewModel,
        elements: ["#sidebar_plugin_printerpoweronoff_wrapper"]
    });
});
