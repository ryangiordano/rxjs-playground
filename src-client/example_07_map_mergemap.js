import Rx from 'rxjs/Rx';
import {
    createSubscriber
} from './lib/util';

<a href="example_07_map_mergemap.html" class="list-group-item">Morbi leo risus</a>

// //take an item and transform it
// Rx.Observable.interval(1000)
//     .take(3)
//     .map(a => a * a)
//     .subscribe(createSubscriber("map"));


// function arrayMap(array, projection) {
//     const returnArray = [];
//     for (let item of array) {
//         const projected = projection(item);
//
//         returnArray.push(projected);
//     }
//     return returnArray;
// }


// //mergeMap (flatMap)
// function arrayMergeMap(array, projection) {
//     const returnArray = [];
//     for (let item of array) {
//         //take each item in the array, run it through the projection, in this case "a*a".
//         //
//         const projectedArray = projection(item);
//         for (let projected of projectedArray) {
//             returnArray.push(projected);
//         }
//     }
//     return returnArray;
// }

// const albums = [
//   {title: 'Album1', tracks: [{id:1, title: "track1"}, {id:2, title:"track2"}]},
//   {title: "Album2", tracks: [{id:1, title: "track34"}, {id:2, title:"track35"}]}
// ]
// const tracksWrong = arrayMap(albums, album=> album.tracks);
// const tracksRight = arrayMergeMap(albums, album=> album.tracks);
//
// console.log(JSON.stringify(tracksRight))

// Rx.Observable.range(2,3)
// .mergeMap(i=>Rx.Observable.timer(i*2000).map(()=>`After${i*2} seconds`))
// .subscribe(createSubscriber("mergeMap"));


//Mergemap in action with promises
// Rx.Observable.fromPromise(getTracks())
// .mergeMap(tracks=> Rx.Observable.from(tracks))
// .subscribe(createSubscriber("tracks"));
//
// function getTracks(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(["track 1", "track 2", "track 3"])
//     },1000)
//   });
// }

//maybe do keyup event on input box.
// Rx.Observable.of("my query")
// .do(()=>{console.log("Querying")})
// .mergeMap(a=>query(a))
// .do(()=>{console.log("After querying")})
// .subscribe(createSubscriber("query"));
//
// function query(value){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("This is the value.")
//     },1000);
//   });
// }

//SwitchMap, only produces an item for the final.  Good for UIs, where the user enters an
// Rx.Observable.fromEvent($title,"keyup")
// .map((e=> e.target.value))
// .distinctUntilChanged()
// .debounceTime(500)
// .switchMap(getItems)
// .subscribe(items=>{
//   $results.empty();
//   $results.append(items.map(i=> $('<li/>').text(i)))
// });
