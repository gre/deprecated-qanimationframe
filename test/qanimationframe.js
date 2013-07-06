
function createDivInBody (html) {
  var elt = document.createElement("div");
  elt.innerHTML = html;
  document.body.appendChild(elt);
  return elt;
}

function checkNotSuccess (res) { console.log(res); throw "The result should never be successful!"; }
function checkNotError (err) { console.log(err); throw "An error has been reached. "+err; }

test("check the API needed for the test engine", function() {
  ok(typeof QanimationFrame === "function", "QanimationFrame available");
});

asyncTest("changing display to none and accessing the style again", 1, function() {
  Q.fcall(createDivInBody, "Hello world!")
  .then(function (elt) {
    elt.style.display = "none";
    return elt;
  })
  .then(QanimationFrame)
  .then(function (elt) {
    equal(elt.style.display, "none", "elt is display:none");
  })
  .fail(checkNotError)
  .fin(start);
});

asyncTest("Checking the height of a new created element", 2, function() {
  var height = 0;
  Q.fcall(createDivInBody, "Hello world!<br/>How are you today?")
   .then(QanimationFrame)
   .then(function (elt) {
     height = elt.offsetHeight;
     ok(height > 0, "offsetHeight is >0");
     return elt;
   })
   .then(function(elt) {
     elt.innerHTML += "<br/><p>One more text</p>";
     return elt;
   })
   .then(QanimationFrame)
   .then(function (elt) {
     ok(elt.offsetHeight>height, "offsetHeight has increased.");
     return elt;
   })
   .fail(checkNotError)
   .fin(start);
});

