class RoverController{
    walk(){

    }

    processCommand(inputCommand){
        if(inputCommand.number == 0){
            console.log('Define World');
        }else if((inputCommand.number % 2) == 0){
            console.log('Walk');
        }else{
            console.log('Define initial position of rover');
        }
    }
}

module.exports = RoverController;