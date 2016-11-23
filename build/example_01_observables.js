"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// const promise = new Promise((resolve, reject)=>{
//   console.log("In promise...");
//   resolve("Hey");
// });

// Simple observable vvvvv  Takes in a function
// const simple$ = new Rx.Observable(observer=>{
//   console.log("Generating observable");
//   setTimeout(()=>{
//     observer.next("first item");
//     setTimeout(()=>{
//       observer.next("the next item");
//       observer.complete();
//     },1000);
//   },1000);
// });
//
// const error$ = new Rx.Observable(observer=>{
//   console.error(new Error("STUFF"))
// });
//
// //subscribe takes three arguments, functions.  Next, error, complete.
// error$.subscribe(
//   item=> console.log(`one.next ${item}`),//next
//   error=> console.error(`one.next ${error}`),//error
//   ()=> console.log("one.complete")); //complete
//
//
// setTimeout(()=>{
//   simple$.subscribe({
//     next: item=>{ console.log(`two.item: ${item}`)},
//     error(error){
//       console.error(`two.error ${error}`)
//     },
//     complete: function(){
//       console.log("two.complete")
//     }
//   });
// }, 3000);


var myObservable$ = new _Rx2.default.Observable(function (observer) {
  console.log("shit's getting observed!");
  setTimeout(function () {
    observer.next(console.log("This is getting observed as well."));
  }, 3000);
});

myObservable$.subscribe(function (data) {
  console.log("this is from the subscription:" + data);
}, function (error) {
  console.error(error);
}, function () {
  console.log("the observable completed");
});

function createInterval$(time) {
  return new _Rx2.default.Observable(function (observer) {
    var index = 0;
    var interval = setInterval(function () {
      console.log("Generating " + index);
      observer.next(index++);
    }, time);
    return function () {
      //function gets invoked on unsubscribe
      clearInterval(interval);
    };
  });
}

//operator
function take(sourceObservable$, amount) {
  return new _Rx2.default.Observable(function (observer) {
    var count = 0;
    var subscription = sourceObservable$.subscribe({
      next: function next(item) {
        observer.next(item);
        if (++count >= amount) {
          observer.complete();
        }
      },
      error: function error(_error) {
        observer.error(_error);
      },
      complete: function complete() {
        observer.complete();
      }
    });
    return function () {
      return subscription.unsubscribe();
    };
  });
}

var everySecond$ = createInterval$(1000);
var firstFiveSeconds$ = take(everySecond$, 5);
var subscription = firstFiveSeconds$.subscribe((0, _util.createSubscriber)("one"));