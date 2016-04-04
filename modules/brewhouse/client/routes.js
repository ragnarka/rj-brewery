FlowRouter.route('/a/brewhouse', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "brewhouse"});
    }
});

FlowRouter.route('/a/brewhouse/settings', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "brewhouse"});
    }
});

FlowRouter.route('/a/brewhouse/bug', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "brewhouse"});
    }
});