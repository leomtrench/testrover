const Rover = require('../model/rover')
const World = require('../model/world')
const world = new World(5,5);
//Spin Left
test('SpinLeftToNorth', () => {
    let rover = new Rover(2,3,'E', world);
    rover.control('L')
    expect(rover.orientation).toEqual('N');
})
test('SpinLeftToWest', () => {
    let rover = new Rover(2,3,'N', world);
    rover.control('L')
    expect(rover.orientation).toEqual('W');
})
test('SpinLeftToSouth', () => {
    let rover = new Rover(2,3,'W', world);
    rover.control('L')
    expect(rover.orientation).toEqual('S');
})
test('SpinLeftToEast', () => {
    let rover = new Rover(2,3,'S', world);
    rover.control('L')
    expect(rover.orientation).toEqual('E');
})

//Spin Right
test('SpinRightToNorth', () => {
    let rover = new Rover(2,3,'W', world);
    rover.control('R')
    expect(rover.orientation).toEqual('N');
})
test('SpinRightToWest', () => {
    let rover = new Rover(2,3,'S', world);
    rover.control('R')
    expect(rover.orientation).toEqual('W');
})
test('SpinRightToSouth', () => {
    let rover = new Rover(2,3,'E'), world;
    rover.control('R')
    expect(rover.orientation).toEqual('S');
})
test('SpinRightToEast', () => {
    let rover = new Rover(2,3,'N', world);
    rover.control('R')
    expect(rover.orientation).toEqual('E');
})

//Forward
test('WalkForwardToNorth', () => {
    let rover = new Rover(2,3,'N', world);
    rover.control('M')
    expect(rover.x).toEqual(2);
    expect(rover.y).toEqual(4);
})
test('WalkForwardToWest', () => {
    let rover = new Rover(2,3,'W', world);
    rover.control('M')
    expect(rover.x).toEqual(1);
    expect(rover.y).toEqual(3);
})
test('WalkForwardToSouth', () => {
    let rover = new Rover(2,3,'S', world);
    rover.control('M')
    expect(rover.x).toEqual(2);
    expect(rover.y).toEqual(2);
})
test('WalkForwardToEast', () => {
    let rover = new Rover(2,3,'E', world);
    rover.control('M')
    expect(rover.x).toEqual(3);
    expect(rover.y).toEqual(3);
})

//Verify Ground
test('HasGround', () => {
    let rover = new Rover(4,4,'E', world);
    expect(rover.hasGround(4,4)).toEqual(true);
})

test('HasNoGroundXLessZero', () => {
    let rover = new Rover(-1,4,'E', world);
    expect(rover.hasGround(-1,4)).toEqual(false);
})

test('HasNoGroundYLessZero', () => {
    let rover = new Rover(4,-1,'E', world);
    expect(rover.hasGround(4,-1)).toEqual(false);
})

test('HasNoGroundYMoreWorld5', () => {
    let rover = new Rover(4,6,'E', world);
    expect(rover.hasGround(4,6)).toEqual(false);
})

test('HasNoGroundXMoreWorld5', () => {
    let rover = new Rover(6,4,'E', world);
    expect(rover.hasGround(6,4)).toEqual(false);
})

//Try walk without ground
test('WalkForwardWithoutGroundE', () => {
    let rover = new Rover(4,4,'E', world);
    rover.control('M')
    rover.control('M')
    rover.control('M')
    rover.control('M')
    expect(rover.x).toEqual(5);
    expect(rover.y).toEqual(4);
})
test('WalkForwardWithoutGroundN', () => {
    let rover = new Rover(4,4,'N', world);
    rover.control('M')
    rover.control('M')
    rover.control('M')
    rover.control('M')
    expect(rover.x).toEqual(4);
    expect(rover.y).toEqual(5);
})
test('WalkForwardWithoutGroundW', () => {
    let rover = new Rover(1,1,'W', world);
    rover.control('M')
    rover.control('M')
    rover.control('M')
    rover.control('M')
    expect(rover.x).toEqual(0);
    expect(rover.y).toEqual(1);
})
test('WalkForwardWithoutGroundE', () => {
    let rover = new Rover(1,1,'S', world);
    rover.control('M')
    rover.control('M')
    rover.control('M')
    rover.control('M')
    expect(rover.x).toEqual(1);
    expect(rover.y).toEqual(0);
})