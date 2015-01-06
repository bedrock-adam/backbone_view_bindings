var ApplicationView = Backbone.View.extend({
  el: $('main'),

  initialize: function() {
    // Backbone.Courier.add(this);

    this.$articleTableContainer = this.$('#article-table-container');
    this.$articleShowContainer = this.$('#article-show-container');
    this.$articleFormContainer = this.$('#article-form-container');

    var articleModel = this.collection.at(0);

    this.articleFormView = new ArticleFormView({
      model: articleModel
    });

    this.articleShowView = new ArticleShowView({
      model: articleModel
    });

    this.articleTableView = new ArticleTableView({
      collection: this.collection
    });

  },

  render: function() {
    this.$articleTableContainer.append(this.articleTableView.render().$el);
    this.$articleShowContainer.append(this.articleFormView.render().$el);
    this.$articleFormContainer.append(this.articleShowView.render().$el);
  }
});
