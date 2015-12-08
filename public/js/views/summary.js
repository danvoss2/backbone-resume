define([
  'jquery',
  'underscore',
  'backbone',
  'models/summary-model',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/summary.html'
], function($, _, Backbone, SummaryModel, summaryTemplate){
  var SummaryView = Backbone.View.extend({
    el: $('#summary-content'),
    events: {
      "click #close-summary": "hideSummary",
      "click #summary-content": "showSummary"
    },
    initialize: function() {
      this.model = new SummaryModel();
      this.model.fetch();
      this.model.on('change', this.render, this);
    },
    render: function(){
      //Check if we have already rendered the template
      if (!$('#summary-templ').length) {
        // Using Underscore we can compile our template with data
        var data = this.model.toJSON();
        var template = _.template( summaryTemplate, {variable: 'data'} );
        this.$el.append(template(data));
        $('#summary-templ').show('slow');
      }
    },
    hideSummary: function() {
      $('#summary-templ').hide('slow', function() {
        $(this).remove();
      });
    }
  });
  // Our module now returns our view
  return SummaryView;
});