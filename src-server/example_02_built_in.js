import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// Rx.Observable.interval(500)
//               .take(5)
//               .subscribe(createSubscriber("one"));

// Rx.Observable.timer(1000, 500)
//   .take(3)
//   .subscribe(createSubscriber("timer"));

//of
// //takes in multiple arguments and returns them in one next, regardless of being an iterable or array
// Rx.Observable.of(["Hello, world", 42, "whoa"])
//   .subscribe(createSubscriber("of"));
//
// //from takes an array-like thing and flatten it out.  It expects an iterable or iterable-like thing, like a string.
// Rx.Observable.from([23, 10,5,"sex"]).subscribe(createSubscriber("from"));
//
// Rx.Observable.throw(new Error("Hey"))
// .subscribe(createSubscriber("error"))
//
// Rx.Observable.empty()
// .subscribe(createSubscriber("empty"));
//
// let sideEffect = 0;
//
// const defer$ = Rx.Observable.defer(()=>{
//   sideEffect++;
//   return Rx.Observable.of(sideEffect);
// });
//
// defer$.subscribe(createSubscriber("defer$.one"));
// defer$.subscribe(createSubscriber("defer$.two"));
// defer$.subscribe(createSubscriber("defer$.three"));

//never completes.
// Rx.Observable.never().subscribe(createSubscriber("never"));
//
// Rx.Observable.range(10,30)
// .subscribe(createSubscriber("range"));
