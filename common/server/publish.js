import {Configuration} from '/common/collections/Configurations';

(function (Configuration) {
    Meteor.publish("configurations", function (moduleName) {
        return Configuration.getConfiguration(moduleName);
    });
}(Configuration));