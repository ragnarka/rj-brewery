import {Brewhouse} from '/modules/brewhouse/brewhouse';

(function (Brewhouse) {

    Meteor.startup(() => {
        Brewhouse.init();
    });
    
}(Brewhouse));