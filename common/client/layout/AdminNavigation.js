Template.AdminNavigation.onRendered(function() {
    updateActiveLink(".vertical a[href='"+FlowRouter.current().path+"']");
});

Template.AdminNavigation.events({
    'click .item': function (event) {
        updateActiveLink(event.currentTarget);
    }
});

function updateActiveLink(selector) {
    $(".vertical>.active").removeClass("active");
    $(selector).addClass("active");
}