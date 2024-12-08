(function () {
	var hasPassiveEvents = false;
	try {
	  var opts = Object.defineProperty({}, 'passive', {
	    get: function() {
	    	hasPassiveEvents = true;
	    }
	  });
	  window.addEventListener("testPassive", null, opts);
	  window.removeEventListener("testPassive", null, opts);
  } catch (e) {}
  /*
   * =======================================================================
   *
   * Element.prototype.click
   *
   * ======================================================================
   */
  Element.prototype.click = function () {
    if($(this)) {
      var simulateDivClick = document.createEvent('MouseEvents');
      $(this).initMouseEvent('click', true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, 0, null, null);
    }
    return this;
  };
  console.prototypeDefinition('Element.prototype.click definido');
  /*
  * =======================================================================
  *
  * Element.prototype.matches
  * https://plainjs.com/javascript/traversing/get-closest-element-by-selector-39/
  * https://gist.github.com/jonathantneal/3062955
  * https://github.com/WebReflection/dom4/blob/master/src/dom4.js
  *
  * ======================================================================
  */
  Element.prototype.matches = Element.prototype.matches ||
    Element.prototype.matchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    function (selector) {
      var node = this, nodes = (node.parentNode || node.document).querySelectorAll(selector), i = -1;
      while (nodes[++i] && nodes[i] != node);
      return !!nodes[i];
    };
  console.prototypeDefinition('Element.prototype.matches definido');
  /*
   * =======================================================================
   *
   * Element.prototype.nowrap
   *
   * ======================================================================
   */
  Element.prototype.nowrap = function () {
    if($(this) && $(this).style) {
      this.style.display = 'block';
      this.style.whiteSpace = 'pre';
      this.style.whiteSpace = 'pre-wrap';
      this.style.whiteSpace = 'pre-line';
      this.style.whiteSpace = '-pre-wrap';
      this.style.whiteSpace = '-moz-pre-wrap';
      this.style.whiteSpace = '-hp-pre-wrap';
      this.style.wordWrap = ' break-word';
      return this;
    }
    return null;
  };
  console.prototypeDefinition('Element.prototype.nowrap definido');
  /*
   * =======================================================================
   *
   * Element.prototype.isDescendant
   *
   * ======================================================================
   */
  Element.prototype.isDescendant = function (child) {
    if($(this) && $(child)) {
      var parent = this;
      var node = child.parentNode;
      while (node != null) {
        if(node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    }
    return false;
  };
  console.prototypeDefinition('Element.prototype.isDescendant definido');
})(window);