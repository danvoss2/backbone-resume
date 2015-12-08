define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var WorkModel = Backbone.Model.extend({
  	urlRoot: '/resume/work',
    defaults: {
      text: ''
    }
  });
  // Return the model for the module
  return WorkModel;
});