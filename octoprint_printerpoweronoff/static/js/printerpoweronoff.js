/*
 * Author: ntoff
 * License: AGPLv3
 */
$(function() {
    function printerpoweronoffViewModel(parameters) {
        var self = this;

        self.printerpowerOff = function () {
          try:
            GPIO.output(23, GPIO.HIGH);
          except (RuntimeError, ValueError) as e:
            self._logger.error(e)
        };

        self.printerpowerOn = function () {
          try:
            GPIO.output(23, GPIO.LOW);
          except (RuntimeError, ValueError) as e:
            self._logger.error(e)
        };
    }

	OCTOPRINT_VIEWMODELS.push({
        construct: printerpoweronoffViewModel,
        elements: ["#sidebar_plugin_printerpoweronoff_wrapper"]
    });
});
