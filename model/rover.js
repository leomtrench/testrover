class Rover {
    orientations = ['N','E','S','W'];

    constructor(x,y,orientation){
        this.x = x;
        this.y = y;
        this.orientation = orientation;
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
        switch(this.orientation){
            case 'N':
                this.y++;
                break;
            case 'E':
                this.x++;
                break;
            case 'S':
                this.y--;
                break;
            case 'W':
                this.x--;
                break;
        }
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