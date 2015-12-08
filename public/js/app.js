define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  'utils/utils'
], function($, _, Backbone, Router, utils){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();

    //Set up events when jQuery is ready
    $(function() {
      //header nav click events
      $('#nav-list').on('click', 'a', function() {
        utils.navLinkClicks($(this));
      });
    });

  }

  return {
    initialize: initialize
  };
});