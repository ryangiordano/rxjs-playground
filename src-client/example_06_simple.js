import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// Rx.Observable.range(1,10)
// .do(a => console.log(`from do ${a}`))
// .map(a => a*a)
// .subscribe(createSubscriber("simple"));
//
// Rx.Observable.range(1,10)
// .finally(a=> console.log(`From finally`))
// .map(a=> a*2)
// .subscribe(createSubscriber("Finally"))
//
//
// Rx.Observable.range(1,10)
// .filter(a=> a<2 || a> 4)
// .subscribe(createSubscriber("filtered"))
//
// Rx.Observable.interval(1000)
// .startWith(-1)
// .subscribe(createSubscriber("interval"));


// Rx.Observable.interval(1000)
// .merge(Rx.Observable.interval(500))
// .take(5)
// .subscribe(createSubscriber("merge-map"));

// Rx.Observable.merge(
//   Rx.Observable.interval(1000).map(i=>`${i} seconds`),
//   Rx.Observable.interval(500).map(i=>`${i} half-seconds`))
//   .take(10)
//   .subscribe(createSubscriber("merge2"));

// Rx.Observable.range(1,5)
// .concat(Rx.Observable.range(10,3))
// .subscribe(createSubscriber("concat1"));

Rx.Observable.concat(
    Rx.Observable.interval(1000).map(i=>`${i} seconds`).take(3),
    Rx.Observable.interval(500).map(i=>`${i} half-seconds`).take(3))
    .subscribe(createSubscriber("concat2"));
