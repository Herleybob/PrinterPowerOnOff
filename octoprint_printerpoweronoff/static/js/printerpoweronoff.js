/*
 * Author: ntoff
 * License: AGPLv3
 */
$(function() {
    function printerpoweronoffViewModel(parameters) {
        var self = this;

        self.GPIO.setwarnings(False)
        self.GPIO.setmode(GPIO.BCM)

        self.printerpowerOff = function () {
          self.GPIO.output(23, self.GPIO.HIGH)
        };

        self.printerpowerOn = function () {
          self.GPIO.output(23, self.GPIO.LOW)
        };
    }

	OCTOPRINT_VIEWMODELS.push([
        printerpoweronoffViewModel,
         ["settingsViewModel"],
         ["#tab_plugin_printerpower"]
    ]);
});
