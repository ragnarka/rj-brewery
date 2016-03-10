FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("MainLayout");
    }
});

FlowRouter.route('/a', {
    action: function() {
        BlazeLayout.render("home");
    }
});

FlowRouter.route('/a/brewhouse', {
    action: function() {
        BlazeLayout.render("brewhouse");
    }
});

FlowRouter.route('/a/recipe', {
    action: function() {
        BlazeLayout.render("recipe");
    }
});

FlowRouter.route('/a/batch', {
    action: function() {
        BlazeLayout.render("batch");
    }
});

FlowRouter.route('/a/inventory', {
    action: function() {
        BlazeLayout.render("inventory");
    }
});

FlowRouter.route('/a/mod', {
    action: function() {
        BlazeLayout.render("mod");
    }
});

FlowRouter.route('/a/user', {
    action: function() {
        BlazeLayout.render("user");
    }
});

FlowRouter.route('/a/settings', {
    action: function() {
        BlazeLayout.render("settings");
    }
});

FlowRouter.route('/a/yeast', {
    action: function() {
        BlazeLayout.render("yeast");
    }
});

FlowRouter.route('/a/mash_performance', {
    action: function() {
        BlazeLayout.render("mash_performance");
    }
});

FlowRouter.route('/a/Notes', {
    action: function() {
        BlazeLayout.render("Notes");
    }
});

FlowRouter.route('/a/calendar', {
    action: function() {
        BlazeLayout.render("calendar");
    }
});