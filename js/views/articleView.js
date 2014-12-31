var ArticleView = Backbone.View.extend({
  initialize: function() {
    Backbone.Syphon.deserialize(this, this.model.attributes);
  },

  events: {
    'submit': 'submit'
  },

  submit: function(e) {
    e.preventDefault();

    var formData = Backbone.Syphon.serialize(this);
    this.model.set(formData);
  }
});
