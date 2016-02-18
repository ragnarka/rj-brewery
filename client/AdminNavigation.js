
Template.AdminNavigation.onRendered(function() {
    $(".selected").removeClass("selected");
    $("a[href='"+FlowRouter.current().path+"']").closest("li").addClass("selected");
});

Template.AdminNavigation.helpers({

});

Template.AdminNavigation.events({

});