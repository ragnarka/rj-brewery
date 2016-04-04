Template.MainLayout.onRendered(function() {
   $('.ui.dropdown').dropdown();
});

Template.MainLayout.events({
    'click .btnChangeLanguage': function(event) {
        const language = event.currentTarget.dataset.lang;
        TAPi18n.setLanguage(language);
    }
});