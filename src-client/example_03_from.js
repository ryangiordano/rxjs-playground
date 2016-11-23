import Rx from 'rxjs/Rx';
import { createSubscriber} from "./lib/util";
import fs from "fs";


// const readDir$ = Rx.Observable.bindNodeCallback(fs.readdir);
//
// readDir$("./src-server")
//   .mergeMap(files=>Rx.Observable.from(files))
//   .map(file=>`MANIPULATED ${file}`)
//   .subscribe(createSubscriber("readdir"));


function getItem(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Hello")
    }, 1000)
  });
}

Rx.Observable.fromPromise(getItem())
.subscribe(createSubscriber("promise"))
