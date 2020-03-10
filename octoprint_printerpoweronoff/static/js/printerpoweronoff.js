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
          $.ajax({
                url: API_BASEURL + "plugin/PrinterPowerOnOffPlugin",
                type: "POST",
                dataType: "json",
                data: JSON.stringify({
                    command: "printerpowerOff"
                }),
                contentType: "application/json; charset=UTF-8"
            })
        };

        self.printerpowerOn = function () {
          $.ajax({
                url: API_BASEURL + "plugin/PrinterPowerOnOffPlugin",
                type: "POST",
                dataType: "json",
                data: JSON.stringify({
                    command: "printerpowerOn"
                }),
                contentType: "application/json; charset=UTF-8"
            })
        };
    }

	OCTOPRINT_VIEWMODELS.push([
        printerpoweronoffViewModel,
         ["settingsViewModel"],
         ["#tab_plugin_printerpower"]
    ]);
});
