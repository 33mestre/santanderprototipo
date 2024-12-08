(function (window) {
  window.$ = function () {
    var elements = new Array();
    for (var i = 0; i < arguments.length; i++) {
      var element = arguments[i];
      if(typeof element == "string") {
        if(element == "head") {
          document.getElementsByTagName("head")[0];
        } 
else {
          if(element.substring(0, 1) == "#") {
            element = document.getElementById(element.substring(1));
          } 
else if(element.substring(0, 1) == ".") {
            element = document.getElementsByClassName(element.substring(1));
          } 
else {
            if(element != null && element == "") {
              throw new Error("elemento invalido" + element);
              return;
            }
            element = document.getElementById(element);
          }
        }
      }
      if(arguments.length == 1) {
        return element;
      }
      element instanceof HTMLElement
        ? elements.push(element)
        : elements.push(null);
    }
    return elements;
  };
  console.prototypeDefinition("Dolar definido.");
})(window);
//]]>