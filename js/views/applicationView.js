var ApplicationView = Backbone.View.extend({
  el: $('main'),

  initialize: function() {
    Backbone.Courier.add(this);

    this.$articleTableContainer = this.$('#article-table-container');
    this.$articleOtherContainer = this.$('#article-other-container');

    this.articleTableView = new ArticleTableView({
      collection: this.collection
    });
  },

  events: {
    'click a#new-article': 'newArticle'
  },

  newArticle: function() {
    if (this.articleOtherView) this.articleOtherView.remove();

    var articleModel = new ArticleModel;

    this.articleOtherView = new ArticleFormView({
      model: articleModel
    });

    this.$articleOtherContainer.html(this.articleOtherView.render().el);
  },

  onMessages: {
    'show:article': 'onChildShowArticle',
    'edit:article': 'onChildEditArticle',
    'destroy:article': 'onChildDestroyArticle',
    'cancel:article': 'onCanceArticle'
  },

  onChildShowArticle: function(articleModel) {
    if (this.articleOtherView) this.articleOtherView.remove();

    this.articleOtherView = new ArticleShowView({
      model: articleModel
    });

    this.$articleOtherContainer.html(this.articleOtherView.render().el);
  },

  onChildEditArticle: function(articleModel) {
    if (this.articleOtherView) this.articleOtherView.remove();

    this.articleOtherView = new ArticleFormView({
      model: articleModel
    });

    this.$articleOtherContainer.html(this.articleOtherView.render().el);
  },

  onChildDestroyArticle: function(articleModel) {
    if (this.articleOtherView) this.articleOtherView.remove();

    articleModel.destroy();
  },

  onChildCancelArticle: function() {
    if (this.articleOtherView) this.articleOtherView.remove();
  },

  render: function() {
    this.$articleTableContainer.html(this.articleTableView.render().el);

    return this;
  }
});
