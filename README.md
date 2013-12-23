QanimationFrame
===
A simple Promise wrapper for `requestAnimationFrame` based on [Q](https://github.com/kriskowal/q).

[Checkout the Annotated Source Code](http://gre.github.io/qanimationframe/docs/qanimationframe.html)

Usage
---

`QanimationFrame` is a *function* which takes a *function* and returns a *DOM Element* (after one frame).

**QanimationFrame(f: function) => DOM.Element**

### Basic example

```javascript
var elt = document.createElement("div");

QanimationFrame(function () {
  elt.innerHTML = "Hello world";
  return elt;
}).then(function (elt) {
  // here, the previous step has been drawn.
  console.log("height="+elt.offsetHeight);
});
```

Installation
---

vai [npm](https://npmjs.org/package/qanimationframe).

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
