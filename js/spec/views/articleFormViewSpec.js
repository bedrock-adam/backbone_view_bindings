

describe('ArticleFormView', function() {
  beforeEach(function() {
    this.articleModel = new ArticleModel({
      title: 'Purple Drank',
      content: 'The colour behind the crunkness'
    });

    this.articleFormView = new ArticleFormView({
      model: this.articleModel
    });
  });

  it(

  afterEach(function() {
    this.articleFormView.remove();
    this.articleModel.remove();
  });
});
