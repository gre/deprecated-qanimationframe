**DEPRECATED** in favor of `raf`.

QanimationFrame
===
A simple Promise wrapper for `requestAnimationFrame` based on [Q](https://github.com/kriskowal/q).

This library intends to promisify requestAnimationFrame.

[Checkout the Annotated Source Code](http://gre.github.io/qanimationframe/docs/qanimationframe.html)

Usage
---

`QanimationFrame` is a *function* which takes a *function* and returns a *promise* containing it's return value (after one frame).

**QanimationFrame(f: function) => DOM.Element**

### Basic example

```javascript
var elt = document.createElement("div");
elt.innerHTML = "Hello world";
window.document.body.appendChild(elt);

var doSomething = QanimationFrame(function () {
  elt.style.width = '50px';
  elt.style.height = '50px';
  return elt;
});

doSomething.then(function (elt) {
  // style changes are rendered
  var boundingBox = elt.getBoundingClientRect(elt);
  console.log(boundingBox.right - boundingBox.left);
});
```

Installation
---

via [npm](https://npmjs.org/package/qanimationframe).

```sh
npm install qanimationframe
```

via bower

```sh
bower install qanimationframe
```

Supported browsers
---

All browsers are supported (including IE).

Tests
---

[![SauceLabs Status](https://saucelabs.com/browser-matrix/qanimationframe.svg)](https://saucelabs.com/u/qanimationframe)
