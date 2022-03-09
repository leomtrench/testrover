const RoverController = require('../controller/RoverController');
const InputCommand = require('../dto/inputCommand')

test('Case1', () => {
    let roverController = new RoverController();
    let inputText = `5 5
    1 2 N
    LMLMLMLMM
    3 3 E
    MMRMMRMRRM`
    let outputList = ['1 3 N', '5 1 E'];
    let commands = inputText.split('\n');
    for (var i = 0; i < commands.length; i++){
        let command = new InputCommand(i, commands[i].trim());
        roverController.processCommand(command);
    }
    for (var i = 0; i < roverController.roverPositions.length; i++){
        expect(outputList[i]).toEqual(roverController.roverPositions[i]);
    }
})