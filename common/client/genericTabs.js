Template.genericTabs.helpers({
    'active': function() {
        return (Session.get("template") === this.template);
    },

    'viewTemplate': function () {
        const tabs = Template.parentData(2).data.menuItems;
        findActiveTab(tabs);
        return Session.get("template");
    }
});

Template.genericTabs.events({
    'click .item': function(event) {
        Session.set("template", event.currentTarget.dataset.template);
    }
});

function findActiveTab(tabs) {
    _.each(tabs, function (elm) {
        if (elm.menuLink === FlowRouter.current().path) {
            Session.set("template", elm.template);
        }
    });
}