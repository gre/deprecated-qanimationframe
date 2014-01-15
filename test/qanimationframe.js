
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
  var el = createDivInBody("Hello world!");
  el.style.display = "block";

  QanimationFrame(function () {
    el.style.display = "none";
    return el;
  })
  .then(function (elt) {
    equal(elt.style.display, "none", "elt is display:none");
  })
  .fail(checkNotError)
  .fin(start);
});

asyncTest("changing height from 50px to 100px and checking the it with getClientBoundingRect()", 1, function() {
  var el = createDivInBody("Hello world!");
  el.style.height = "50px";

  QanimationFrame(function () {
    el.style.height = "100px";
    return el;
  })
  .then(function (elt) {
    var boundingBox = elt.getBoundingClientRect(elt);
    equal(boundingBox.bottom - boundingBox.top, 100, "elt is height:100px");
  })
  .fail(checkNotError)
  .fin(start);
});

asyncTest("Checking the element height change after adding some content", 1, function() {
  var el = createDivInBody("Hello world!<br/>How are you today?");
  var height = el.offsetHeight;

  QanimationFrame(function() {
     el.innerHTML += "<br/><p>One more text</p>";
     return el;
   })
   .then(function (elt) {
     ok(elt.offsetHeight > height, "offsetHeight has increased.");
     return elt;
   })
   .fail(checkNotError)
   .fin(start);
});

asyncTest("Checking if exceptions thrown are catched and result of a failure promise", 2, function() {

  QanimationFrame(function() {
      throw "FOO";
   })
   .then(function () {
       ok(false, "It should not be a success.");
   }, function (e) {
       ok(true, "Exception thrown transformed into a failure promise.");
       equal(e, "FOO", "Exception is the failure value.");
   })
   .fin(start);
});
