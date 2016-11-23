import Rx from "rxjs/Rx";
import { createSubscriber} from './lib/util';

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


const myObservable$ = new Rx.Observable(observer=>{
  console.log("shit's getting observed!")
  setTimeout(()=>{
    observer.next(console.log("This is getting observed as well."));
  },3000)
});

myObservable$.subscribe(
  data=>{console.log(`this is from the subscription:${data}`)},
  error=>{console.error(error)},
  ()=>{console.log("the observable completed")}
);

function createInterval$(time){
  return new Rx.Observable(observer=>{
    let index = 0;
    let interval = setInterval(()=>{
      console.log(`Generating ${index}`);
      observer.next(index++);
    },time);
    return ()=>{
      //function gets invoked on unsubscribe
      clearInterval(interval);
    }
  });
}

//operator
function take(sourceObservable$, amount){
  return new Rx.Observable(observer=>{
    let count = 0;
    const subscription = sourceObservable$.subscribe({
      next(item){
         observer.next(item);
         if(++count>= amount){
           observer.complete();
         }
       },
      error(error){ observer.error(error);},
      complete(){ observer.complete()}
    });
    return ()=>subscription.unsubscribe();
  });
}

const everySecond$ = createInterval$(1000);
const firstFiveSeconds$ = take(everySecond$, 5);
const subscription = firstFiveSeconds$.subscribe(createSubscriber("one"));
