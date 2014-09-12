// NOTE: requires underscore and jquery

window.facade = function(content, options) {
  defaultOptions = {
    width: 500,
    height: 500,
    outerClose: true,
    innerClose: false,
    loadMsg: ""
  }

  this.content = content;
  this.options = _.extend({}, defaultOptions, options);
  this.dom = {}
  this.templates = {
    bg : "<div id='facade-background'></div>",
    modal: "<div id='facade-modal'></div>",
    placeholder: "<h2 class='placeholder'>"+this.options.loadMsg+"</p>"
  }

  // proxy event methods
  this.modalClick = $.proxy(this.modalClick, this);
  this.bgClick = $.proxy(this.bgClick, this);
  this.hidePlaceholder = $.proxy(this.hidePlaceholder, this);

  // render modal
  this.render();
}

facade.prototype.render = function() {
  // remove existing dom elements
  _.chain(this.dom).values().invoke('remove');

  // handle content
  if (_.isElement(this.content))
    modalContent = this.content;
  else if (!_.isUndefined(this.content.jquery))
    modalContent = this.content;
  else
    modalContent = $('<img>').attr('src', this.content).load(this.hidePlaceholder);

  // create dom elements
  this.dom.placeholder = $(this.templates.placeholder);
  this.dom.bg = $(this.templates.bg);
  this.dom.modal = $(this.templates.modal)
    .append(this.dom.placeholder)
    .append(modalContent);

  // register handlers
  this.dom.bg.on('click', this.bgClick);
  this.dom.modal.on('click', this.modalClick);

  this.setSize(this.options.width, this.options.height);

  // add elements to body
  var body = $('body');
  body.append(this.dom.bg);
  body.append(this.dom.modal);

  this.open();
}

facade.prototype.setSize = function(width, height) {
  this.dom.modal.css({
    'width': width.toString() + "px",
    'height': height.toString() + "px",
    'margin-left': -width / 2,
    'margin-top': -height / 2
  });
}

facade.prototype.modalClick = function(e) {
  if (this.options.innerClose)
    this.close();
}

facade.prototype.bgClick = function(e) {
  if (this.options.outerClose)
    this.close();
}

facade.prototype.hidePlaceholder = function(e) {
  if (!_.isUndefined(this.dom.placeholder))
    this.dom.placeholder.hide();
}

facade.prototype.open = function() {
  this.dom.bg.show();
  this.dom.modal.show();
}

facade.prototype.close = function() {
  this.dom.bg.hide();
  this.dom.modal.hide();
}

window.tests = {
  domTest: function() {
    content = $("<div><h2>Test</h2></div>")[0]
    f = new facade(content);
  },

  imgTest: function() {
    img = "http://assets.worldwildlife.org/photos/2090/images/hero_small/Sumatran-Tiger-Hero.jpg?1345559303";
    f = new facade(img);
    f.render();
  },

  imgLoadTest: function() {
    img = "http://www.picshunger.com/wp-content/uploads/2014/04/335.jpg";
    options = {
      loadMsg: "wait for your image to load!"
    }
    f = new facade(img, options);
  },

  imgContentClickTest: function() {
    img = "http://assets.worldwildlife.org/photos/2090/images/hero_small/Sumatran-Tiger-Hero.jpg?1345559303";
    options = {
      innerClose: true
    }
    f = new facade(img, options);
  }
}