let Highcharts = require('highcharts');
require('highcharts/modules/funnel')(Highcharts);

Template.gaugeDemo.helpers({
    allTasks: function () {
        return Session.get("tasks") || 12;
    },

    incompleteTasks: function () {
        return Session.get("incompleteTasks") || 7;
    },

    gaugeChart: function () {
        // Gather data:
        var allTasks = Session.get("tasks") || 12,
            incompleteTask = Session.get("incompleteTasks") || 3,
            tasksData = [{
                y: incompleteTask,
                name: "Incomplete"
            }, {
                y: allTasks - incompleteTask,
                name: "Complete"
            }];
        // Use Meteor.defer() to craete chart after DOM is ready:
        Meteor.defer(function () {
            // Create standard Highcharts chart with options:
            Highcharts.chart('chart', {
                series: [{
                    type: 'pie',
                    data: tasksData
                }],
                credits: {
                    enabled: false
                }
            });
        });
    }
});

Template.gaugeDemo.events({
   'submit #f': (event) => {
       event.preventDefault();
       var data = $("#f").serializeArray();
       Session.set("tasks", parseInt(data[0].value));
       Session.set("incompleteTasks", parseInt(data[1].value));
   }
});


Template.funnelDemo.helpers({
    funnelChart: function () {
        // Use Meteor.defer() to craete chart after DOM is ready:
        Meteor.defer(function () {
            // Create standard Highcharts chart with options:
            Highcharts.chart('chart', {
                chart: {
                    type: 'funnel',
                    marginRight: 100
                },
                title: {
                    text: 'Sales funnel',
                    x: -50
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b> ({point.y:,.0f})',
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                            softConnector: true
                        },
                        neckWidth: '30%',
                        neckHeight: '25%'

                        //-- Other available options
                        // height: pixels or percent
                        // width: pixels or percent
                    }
                },
                legend: {
                    enabled: false
                },
                series: [{
                    name: 'Unique users',
                    data: [
                        ['Website visits', 15654],
                        ['Downloads', 4064],
                        ['Requested price list', 1987],
                        ['Invoice sent', 976],
                        ['Finalized', 846]
                    ]
                }]
        });
    });
    }
});