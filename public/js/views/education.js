define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/technologies.html'
], function($, _, Backbone, technologiesTemplate){
  var TechnologiesView = Backbone.View.extend({
    el: $('#technologies-content'),
    events: {
      "click #close-technologies": "hideTechnologies",
      "click #technologies-content": "showTechnologies"
    },
    initialize: function() {

    },

    render: function() {
      //Check if we've already rendered technologies template
      if (!$('#technologies-templ').length) {
        // Using Underscore we can compile our template with data
        var data = {};
        var compiledTemplate = _.template( technologiesTemplate, data );
        // Append our compiled template to this Views "el"
        this.$el.append( compiledTemplate );
        $('#technologies-templ').show('slow');
      }
    },
    hideTechnologies: function() {
      $('#technologies-templ').hide('slow', function() {
        $(this).remove();
      });
    },
    showTechnologies: function() {
      this.render();
    }
  });
  // Our module now returns our view
  return TechnologiesView;
});