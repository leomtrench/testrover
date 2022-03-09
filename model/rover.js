class Rover {
    orientations = ['N','E','S','W'];

    constructor(x,y,orientation, world){
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        this.world = world;
    }

    spin(spinValue){
        let orientationIndex = this.orientations.indexOf(this.orientation);
        let lastPosition = this.orientations.length-1;
        orientationIndex = orientationIndex + spinValue;
        if(orientationIndex > lastPosition){
            orientationIndex = 0;
        }else if(orientationIndex < 0){
            orientationIndex = lastPosition;
        }
        this.orientation = this.orientations[orientationIndex];
    }

    walkForward(){
        let currentX = this.x;
        let currentY = this.y;
        switch(this.orientation){
            case 'N':
                currentY++;
                break;
            case 'E':
                currentX++;
                break;
            case 'S':
                currentY--;
                break;
            case 'W':
                currentX--;
                break;
        }

        if(this.hasGround(currentX,currentY)){
            this.y = currentY;
            this.x = currentX;
        }
    }

    hasGround(positionX, positionY){
        return !(this.world.x < positionX
            || this.world.y < positionY
            || positionX < 0
            || positionY < 0);
    }

    control(commands){
        for (var i = 0; i < commands.length; i++){
            let command = commands[i];
            switch(command){
                case 'L':
                    this.spin(-1);
                    break;
                case 'R':
                    this.spin(1);
                    break;
                case 'M':
                    this.walkForward();
                    break;
            }
        }
    }

    currentPosition(){
        return `${this.x} ${this.y} ${this.orientation}`;
    }
}

module.exports = Rover;