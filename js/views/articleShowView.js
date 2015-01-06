var ArticleShowView = Backbone.View.extend({
  tagName: 'article',

  template: _.template($('#article-show-template').html()),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
