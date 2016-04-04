import {Configuration} from '/common/collections/Configurations';

export let Module = (function (Settings) {

    let module = {};

    module.moduleName = "Unknown";
    module.settings = {};

    module.configuration = {
        "moduleName": module.moduleName
    };

    module.init = () => {
        module.settings = (!Settings.getConfiguration(module.moduleName))
            ? Settings.addMConfiguration(module.configuration)
            : Settings.getConfiguration(module.moduleName);
        if (Meteor.isClient) {
            Session.set(module.moduleName + "Settings", module.settings[0]);
        }
    };

    module.getSettings = () => {
        if (Meteor.isClient) {
            return Session.get(module.moduleName + "Settings");
        }
    };

    return module;

}(Configuration));