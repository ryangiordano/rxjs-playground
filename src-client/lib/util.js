export function createSubscriber(tag){
  return {
      next(item){consoleLog(`${tag}.next ${item}`); },
      error(error){ consoleLog(`${tag}.error`)},
      complete(){consoleLog(`${tag}.complete`)}
    };
  }

export function consoleLog(msg){
      let display = document.getElementById("display");
      let newDiv = document.createElement('div');
      newDiv.textContent =msg;
      display.appendChild(newDiv);
  }
