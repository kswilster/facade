//TODO: render content, assuming it is DOM element
// NOTE: requires underscore and jquery

window.facade = function(content, options) {
  defaultOptions = {
    width: 500,
    height: 500,
    outerClose: true,
    innerClose: false,
    loadMsg: ""
  }

  this.options = _.extend({}, defaultOptions, options);
  this.dom = {}
  this.templates = {
    bg : "<div id='facade-background'></div>",
    modal: "<div id='facade-modal'></div>"
  }

  // proxy event methods
  this.modalClick = $.proxy(this.modalClick, this);
  this.bgClick = $.proxy(this.bgClick, this);
}

facade.prototype.render = function() {
  // remove existing dom elements
  _.chain(this.dom).values().invoke('remove');

  // create dom elements
  this.dom.bg = $(this.templates.bg);
  this.dom.modal = $(this.templates.modal);

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

facade.prototype.open = function() {
  this.dom.bg.show();
  this.dom.modal.show();
}

facade.prototype.close = function() {
  this.dom.bg.hide();
  this.dom.modal.hide();
}