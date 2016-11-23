import Rx from 'rxjs/Rx';
import { createSubscriber} from './lib/util';


//returns a connectable observable: crate observable, call public that gives us a
// const interval$ = Rx.Observable.interval(1000)
// .take(10)
// .publish();
//
// setTimeout(()=>{
//   interval$.connect();
// },5000)
//
//
// setTimeout(()=>{
//   interval$.subscribe(createSubscriber("one"))
// },1200)
//
// setTimeout(()=>{
//   interval$.subscribe(createSubscriber("two"))
// },3000)
