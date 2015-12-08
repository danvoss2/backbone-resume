define([
  'jquery',
  'underscore',
  'backbone',
  'views/summary',
  'views/technologies',
  'views/work'
], function($, _, Backbone, SummaryView, TechnologiesView, WorkView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'summary': 'showSummary',
      'technologies': 'showTechnologies',
      'work': 'showWork',
      // Default
      '*actions': 'defaultAction'
    },
    showSummary: function() {
      var summaryView = new SummaryView();
      //summaryView.render();      
    },
    showTechnologies: function() {
      var technologiesView = new TechnologiesView();
      //technologiesView.render();
    },
    showWork: function() {
      var workView = new WorkView();
      //workView.render();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});