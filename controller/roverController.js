const Rover = require("../model/rover");
const World = require("../model/world");

class RoverController{
    world = null;
    rover = null;

    processCommand(inputCommand){
        if(inputCommand.number == 0){
            var arrayWorldSize = inputCommand.command.split(' ');
            this.world = new World(arrayWorldSize[0], arrayWorldSize[1]);
            console.log(`Define World (${this.world.x}, ${this.world.y})`);
        }else if((inputCommand.number % 2) == 0){
            this.rover.control(inputCommand.command);
            console.log('Control');
            console.log(this.rover.currentPosition());
        }else{
            var arrayRoverInformation = inputCommand.command.split(' ');
            let positionX = arrayRoverInformation[0];
            let positionY = arrayRoverInformation[1];
            let orientation = arrayRoverInformation[2];
            this.rover = new Rover(positionX, positionY, orientation);
            console.log('Define initial position of rover');
        }
    }
}

module.exports = RoverController;