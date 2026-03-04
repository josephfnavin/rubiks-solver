import cube from './cube.js';
import solvedCube from './cubeletValues.js';

test('initial top face correct', () => {
    const testCube = cube(solvedCube);
    expect(testCube.getUpColors()).toEqual(['w','w','w','w','w','w','w','w','w']);
})

test('initial left face correct', () => {
    const testCube = cube(solvedCube);
    expect(testCube.getLeftColors()).toEqual(['r','r','r','r','r','r','r','r','r']);
})

test('top face correct after U turn', () => {
    const testCube = cube(solvedCube);
    expect(testCube.u().getUpColors()).toEqual(['w','w','w','w','w','w','w','w','w']);
})

test('left face correct after U turn', () => {
    const testCube = cube(solvedCube);
    expect(testCube.u().getLeftColors()).toEqual(['b','b','b','r','r','r','r','r','r']);
})