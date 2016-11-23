import Rx from 'rxjs/Rx';
import {
    createSubscriber
} from './lib/util';

//buffer
// Rx.Observable.range(1,100)
// .bufferCount(25)
// .subscribe(createSubscriber("items"))

//buffer time
// Rx.Observable.interval(500)
// .bufferTime(2000)
// .subscribe(createSubscriber("buffer time"))

//buffer takes in an observable.  When the observable prodfuces a value, that's whne it decides to flush.
// const stopSubject$ = new Rx.Subject();
// Rx.Observable.interval(500)
// .buffer(stopSubject$)
// .subscribe(createSubscriber("buffer?"));
//
// setTimeout(()=>{
//   stopSubject$.next();
// },3000)

//toArray: Will collect every single item until the stream terminates
//To array wants to collect the whole thing and emit it as an element
Rx.Observable.range(1,10)
// .merge(Rx.Observable.never())//doesn't produce the complete event-- as a result
.toArray()//never emits its buffer.
.subscribe(createSubscriber("range"))
