// TODO: create modal block without content or options
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
}

facade.prototype.render = function() {
  // remove existing dom elements
  _.chain(this.dom).values().invoke('remove');

  this.dom.bg = $(this.templates.bg);
  this.dom.modal = $(this.templates.modal);

  this.setSize(this.options.width, this.options.height);

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

facade.prototype.open = function() {
  this.dom.bg.show();
  this.dom.modal.show();
}

facade.prototype.close = function() {
  this.dom.bg.hide();
  this.dom.modal.hide();
}