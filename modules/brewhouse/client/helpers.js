import {Brewhouse} from '../brewhouse';

Template.brewhouse.helpers({
    tabMenu: function() {
        return {"menuItems": [{
            "menuIcon": "superscript",
            "menuLink": "/a/brewhouse",
            "template": "brewhouseHome"
        },
        {
            "menuIcon": "cog",
            "menuLink": "/a/brewhouse/settings",
            "template": "brewhouseSettings"
        },
        {
            "menuIcon": "bug",
            "menuLink": "/a/brewhouse/bug",
            "template": "brewhouseBug"
        }]};
    }
});