QanimationFrame
===
A simple Promise wrapper for `requestAnimationFrame` based on [Q](https://github.com/kriskowal/q).

This library intend to wait for one DOM update (frame) and is easify composable as a function of Promise.

It is a proper abstraction to replace the classical `setTimeout(f, 0)` hack 
when wanting to get a CSS value after the browser repaint the DOM.

[Checkout the Annotated Source Code](http://gre.github.io/qanimationframe/docs/qanimationframe.html)

Usage
---

`QanimationFrame` is a *function* which takes a *DOM Element* and returns a *Promise of DOM Element* (after one frame).

**QanimationFrame(elt: DOM.Element) => Promise[DOM.Element]**

### Basic example

```javascript
var elt = document.createElement("div");
elt.innerHTML = "Hello world";
// wait for the DOM to be ready before using the height
QanimationFrame(elt).then(function (elt) {
  console.log("height="+elt.offsetHeight);
});
```

### Composability

```javascript
function createDivInBody (html) {
  var elt = document.createElement("div");
  elt.innerHTML = html;
  document.body.appendChild(elt);
  return elt;
}

var height = 
Q.fcall(createDivInBody, "Hello world!<br/>How are you today?")
 .then(QanimationFrame)
 .then(function (elt) {
   return elt.offsetHeight;
 });

height.then(function(height){
  console.log("height is "+height);
});
```

Installation
---

```sh
bower install qanimationframe
```

Also available on [NPM](https://npmjs.org/package/qanimationframe).

Supported browsers
---

All browsers are supported (including IE).

Tests
---

[![SauceLabs Status](https://saucelabs.com/browser-matrix/qanimationframe.svg)](https://saucelabs.com/u/qanimationframe)

