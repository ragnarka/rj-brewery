import {Brewhouse} from '../brewhouse';

(function (Brewhouse) {

    Meteor.startup(() => {
        Meteor.subscribe("configurations", Brewhouse.moduleName, () => {
            Brewhouse.init();
        });
    });

}(Brewhouse));