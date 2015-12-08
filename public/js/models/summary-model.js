define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var SummaryModel = Backbone.Model.extend({
  	urlRoot: '/resume/summary',
    defaults: {
      text: ''
    }
  });
  // Return the model for the module
  return SummaryModel;
});