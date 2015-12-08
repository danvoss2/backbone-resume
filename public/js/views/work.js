define([
  'jquery',
  'underscore',
  'backbone',
  'models/work-model',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/work.html'
], function($, _, Backbone, WorkModel, workTemplate){
  var WorkView = Backbone.View.extend({
    el: $('#work-content'),
    events: {
      "click #close-work": "hideWork",
      "click #work-content": "showWork"
    },
    initialize: function() {
      this.model = new WorkModel();
      this.model.fetch();
      this.model.on('change', this.render, this);
    },
    render: function() {
      //Check if we've already rendered technologies template
      if (!$('#work-templ').length) {
        // Using Underscore we can compile our template with data
        var data = this.model.toJSON();
        var template = _.template( workTemplate, {variable: 'data'} );
        this.$el.append(template(data));
        $('#work-templ').show('slow');
      }
    },
    hideWork: function() {
      $('#work-templ').hide('slow', function() {
        $(this).remove();
      });
    }
  });
  // Our module now returns our view
  return WorkView;
});