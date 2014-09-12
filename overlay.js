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

  this.options = _.defaults(options, defaultOptions);
  this.template = "<div class='background'></div><div class='modal'></div>";
}

facade.prototype.render = function() {
  $('body').append(this.template);
}
