# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin

class PrinterPowerOnOffPlugin(octoprint.plugin.StartupPlugin,
				octoprint.plugin.AssetPlugin,
				octoprint.plugin.TemplatePlugin,
				octoprint.plugin.SettingsPlugin):

	def get_settings_defaults(self):
		return dict(poweronCommand = "gpio -g write 23 0", poweroffCommand = "gpio -f write 23 1")

	def on_after_startup(self):
		self.poweronCommand = self._settings.get(["poweronCommand"])
		self.poweroffCommand = self._settings.get(["poweroffCommand"])

	def get_assets(self):
		return dict(
			js=["js/printerpoweronoff.js"],
			css=["css/printerpoweronoff.css"]
		)
	def get_template_configs(self):
		return [
			dict(type="sidebar", name="Printer Power", icon="close", template="printerpoweronoff_sidebar.jinja2", styles=["display: none"], data_bind="visible: loginState.isUser"),
			dict(type="settings", name="Printer Power Settings", template="printerpoweronoff_settings.jinja2", custom_bindings=False)
			]

	def get_update_information(self):
		return dict(
			estop=dict(
				displayName="Printer Power",
				displayVersion=self._plugin_version,

				# version check: github repository
				type="github_release",
				user="Herleybob",
				repo="PrinterPowerOnOff",
				current=self._plugin_version,

				# update method: pip
				pip="https://github.com/Herleybob/PrinterPowerOnOff/archive/{target_version}.zip"
			)
		)

__plugin_name__ = "OctoPrint-PrinterPowerOnOff"

def __plugin_load__():
	global __plugin_implementation__
	__plugin_implementation__ = __plugin_implementation__ = PrinterPowerOnOffPlugin()

	global __plugin_hooks__
	__plugin_hooks__ = {
		"octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information
	}
