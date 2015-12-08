define([
  'jquery',
  'underscore',
  'backbone',
  'models/technologies-model',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/technologies.html'
], function($, _, Backbone, TechnologiesModel, technologiesTemplate){
  var TechnologiesView = Backbone.View.extend({
    el: $('#technologies-content'),
    events: {
      "click #close-technologies": "hideTechnologies",
      "click #technologies-content": "showTechnologies"
    },
    initialize: function() {
      this.model = new TechnologiesModel();
      this.model.fetch();
      this.model.on('change', this.render, this);
    },
    render: function() {
      //Check if we've already rendered technologies template
      if (!$('#technologies-templ').length) {
        // Using Underscore we can compile our template with data
        var data = this.model.toJSON();
        var template = _.template( technologiesTemplate, {variable: 'data'} );
        // Append our compiled template to this Views "el"
        this.$el.append(template(data));
        $('#technologies-templ').show('slow');
      }
    },
    hideTechnologies: function() {
      $('#technologies-templ').hide('slow', function() {
        $(this).remove();
      });
    }
  });
  // Our module now returns our view
  return TechnologiesView;
});