(function () {

    Template.home.helpers({
        'tabMenu': function() {
            return {"menuItems": [{
                "menuIcon": "home",
                "menuLink": "/a",
                "template": "gaugeDemo"
            },
                {
                    "menuIcon": "edit",
                    "menuLink": "/a/1",
                    "template": "pieDemo"
                },
                {
                    "menuIcon": "cog",
                    "menuLink": "/a/2",
                    "template": "funnelDemo"
                }]};
        }
    });
}());