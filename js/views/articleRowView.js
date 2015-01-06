var ArticleRowView = Backbone.View.extend({
  template: _.template($('#article-row-template').html()),

  tagName: 'tr',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
