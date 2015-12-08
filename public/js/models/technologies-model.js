define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var TechModel = Backbone.Model.extend({
  	urlRoot: '/resume/technologies',
    defaults: {
      text: ''
    }
  });
  // Return the model for the module
  return TechModel;
});