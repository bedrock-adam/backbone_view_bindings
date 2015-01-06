var ArticleTableView = Backbone.View.extend({
  template: _.template($('#article-table-template').html()),

  tagName: 'table',

  className: 'table table-striped',

  render: function() {
    this.$el.html(this.template());

    this.collection.each(function(articleModel) {
      var articleRowView = new ArticleRowView({
        model: articleModel
      });

      this.$('tbody').append(articleRowView.render().el);
    }, this);

    return this;
  }
});
