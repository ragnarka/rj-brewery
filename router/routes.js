FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("MainLayout");
    }
});

FlowRouter.route('/a', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "home"});
    }
});

FlowRouter.route('/a/1', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "home"});
    }
});

FlowRouter.route('/a/2', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "home"});
    }
});



FlowRouter.route('/a/recipe', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "recipe"});
    }
});

FlowRouter.route('/a/batch', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "batch"});
    }
});

FlowRouter.route('/a/inventory', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "inventory"});
    }
});

FlowRouter.route('/a/mod', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "mod"});
    }
});

FlowRouter.route('/a/user', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "user"});
    }
});

FlowRouter.route('/a/settings', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "settings"});
    }
});

FlowRouter.route('/a/yeast', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "yeast"});
    }
});

FlowRouter.route('/a/mash_performance', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "mash_performance"});
    }
});

FlowRouter.route('/a/Notes', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "Notes"});
    }
});

FlowRouter.route('/a/calendar', {
    action: function() {
        BlazeLayout.render("AdminLayout", {"content": "calendar"});
    }
});