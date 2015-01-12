var ArticleRowView = Backbone.View.extend({
  template: _.template($('#article-row-template').html()),

  tagName: 'tr',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);

    Backbone.Courier.add(this);
  },

  events: {
    'click a.show': 'showArticle',
    'click a.edit': 'editArticle',
    'click a.destroy': 'destroyArticle'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  showArticle: function() {
    this.spawn('show:article', this.model);
  },

  editArticle: function() {
    this.spawn('edit:article', this.model);
  },

  destroyArticle: function() {
    this.spawn('destroy:article', this.model);
  }
});
