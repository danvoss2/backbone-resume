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

      //Load Bootstrap after jQuery is ready
      $.getScript( "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js" )
        .done(function( script, textStatus ) {
          console.log("Bootstrap successfully loaded.");
        })
        .fail(function( jqxhr, settings, exception ) {
          console.log("Bootstrap failed to load.");
        });

    });

  }

  return {
    initialize: initialize
  };
});