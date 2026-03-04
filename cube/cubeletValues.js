import Cubelet from './cubelet.js';

const WHITE = 'w';
const RED = 'r';
const BLUE = 'b';
const ORANGE = 'o';
const GREEN = 'g';
const YELLOW = 'y';



export default {
    top: [
        // back row
        {up: WHITE, left: RED, back: GREEN, right: null, down: null, front: null},
        {up: WHITE, left: null, back: GREEN, right: null, down: null, front: null},
        {up: WHITE, left: null, back: GREEN, right: ORANGE, down: null, front: null},
        // middle row
        {up: WHITE, left: RED, back: null, right: null, down: null, front: null},
        {up: WHITE, left: null, back: null, right: null, down: null, front: null},
        {up: WHITE, left: null, back: null, right: ORANGE, down: null, front: null},
        // front row
        {up: WHITE, left: RED, back: null, right: null, down: null, front: BLUE},
        {up: WHITE, left: null, back: null, right: null, down: null, front: BLUE},
        {up: WHITE, left: null, back: null, right: ORANGE, down: null, front: BLUE},
    ],
    middle: [
        // back row
        {up: null, left: RED, back: GREEN, right: null, down: null, front: null},
        {up: null, left: null, back: GREEN, right: null, down: null, front: null},
        {up: null, left: null, back: GREEN, right: ORANGE, down: null, front: null},
        // middle row
        {up: null, left: RED, back: null, right: null, down: null, front: null},
        {up: null, left: null, back: null, right: null, down: null, front: null},
        {up: null, left: null, back: null, right: ORANGE, down: null, front: null},
        // front row
        {up: null, left: RED, back: null, right: null, down: null, front: BLUE},
        {up: null, left: null, back: null, right: null, down: null, front: BLUE},
        {up: null, left: null, back: null, right: ORANGE, down: null, front: BLUE},
    ],
    bottom: [
        // back row
        {up: null, left: RED, back: GREEN, right: null, down: YELLOW, front: null},
        {up: null, left: null, back: GREEN, right: null, down: YELLOW, front: null},
        {up: null, left: null, back: GREEN, right: ORANGE, down: YELLOW, front: null},
        // middle row
        {up: null, left: RED, back: null, right: null, down: YELLOW, front: null},
        {up: null, left: null, back: null, right: null, down: YELLOW, front: null},
        {up: null, left: null, back: null, right: ORANGE, down: YELLOW, front: null},
        // front row
        {up: null, left: RED, back: null, right: null, down: YELLOW, front: BLUE},
        {up: null, left: null, back: null, right: null, down: YELLOW, front: BLUE},
        {up: null, left: null, back: null, right: ORANGE, down: YELLOW, front: BLUE},
    ]
}
