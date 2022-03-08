const fs = require('fs');
const readline = require('readline');

const RoverController = require('./controller/RoverController');
const InputCommand = require('./dto/InputCommand');

async function* readFileByLine() {
  const fileStream = fs.createReadStream('./input.txt');
  
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  let lineNumber = 0;
  for await (const lineValue of rl) {
    yield new InputCommand(lineNumber++, lineValue);
  }
}

let main = ()=>{
  (async function() {
    let roverController = new RoverController();
    for await (const inputCommand of readFileByLine()) {
      roverController.processCommand(inputCommand);
    }
  })();
};

main();
