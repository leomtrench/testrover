const fs = require('fs');
const readline = require('readline');

async function* readFileByLine() {
  const fileStream = fs.createReadStream('./input.txt');
  
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  let lineNumber = 0;
  for await (const lineValue of rl) {
    yield { lineNumber: lineNumber++, lineValue: lineValue };
  }
}

let main = ()=>{
  (async function() {
    for await (const line of readFileByLine()) {
      console.log(`Line from file: ${line.lineNumber}`);
    }
  })();
};

main();
