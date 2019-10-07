class BlogLoader {
  constructor(blogList, contentPath) {
    this.blogList = $(blogList);
    this.contentPath = contentPath;
    this.clickEvent = this.clickEvent.bind(this);
  }

  createDiv() {
    this.blogList.each(function(index, blogEle){
    var ref = $(blogEle).find('a').attr('href');
    var blogDiv = $('<div />');
    blogDiv.data('textRef', ref);
    blogDiv.insertAfter($(blogEle).find('h3'));})
  }

  clickEvent(e) {
    e.preventDefault();
    var post = $(e.currentTarget).find('div').data('textRef').replace('#', ' #');
    $(e.currentTarget).find('div').load(this.contentPath + post)
  }

  addEvent() {
    this.blogList.click(this.clickEvent);
  }

  init() {
    this.createDiv();
    this.addEvent();
  }
}

(new BlogLoader('#blog li', 'data/')).init();
