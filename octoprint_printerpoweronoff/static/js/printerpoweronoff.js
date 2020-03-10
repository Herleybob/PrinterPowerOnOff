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
          GPIO.output(23, self.GPIO.HIGH)
        };

        self.printerpowerOn = function () {
          GPIO.output(23, self.GPIO.LOW)
        };
    }

	OCTOPRINT_VIEWMODELS.push([
        printerpoweronoffViewModel,
         ["settingsViewModel"],
         ["#tab_plugin_printerpower"]
    ]);
});
