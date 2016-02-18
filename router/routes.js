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
        BlazeLayout.render("user");
    }
});

FlowRouter.route('/a/inventory', {
    action: function() {
        BlazeLayout.render("home");
    }
});

FlowRouter.route('/a/mod', {
    action: function() {
        BlazeLayout.render("recipe");
    }
});

FlowRouter.route('/a/user', {
    action: function() {
        BlazeLayout.render("user");
    }
});

FlowRouter.route('/a/settings', {
    action: function() {
        BlazeLayout.render("recipe");
    }
});

