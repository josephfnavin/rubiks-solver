import Cubelet from './cubelet';

const WHITE = 'w';
const RED = 'r';
const BLUE = 'b';
const ORANGE = 'o';
const GREEN = 'g';
const YELLOW = 'y';



const HoriontalSectionCubeletCubeValues = {
    top: [
        // back row
        Cubelet({up: WHITE, left: RED, back: GREEN, right: null, down: null, front: null}),
        Cubelet({up: WHITE, left: null, back: GREEN, right: null, down: null, front: null}),
        Cubelet({up: WHITE, left: null, back: GREEN, right: ORANGE, down: null, front: null}),
        // middle row
        Cubelet({up: WHITE, left: RED, back: null, right: null, down: null, front: null}),
        Cubelet({up: WHITE, left: null, back: null, right: null, down: null, front: null}),
        Cubelet({up: WHITE, left: null, back: null, right: ORANGE, down: null, front: null}),
        // front row
        Cubelet({up: WHITE, left: RED, back: null, right: null, down: null, front: BLUE}),
        Cubelet({up: WHITE, left: null, back: null, right: null, down: null, front: BLUE}),
        Cubelet({up: WHITE, left: null, back: null, right: ORANGE, down: null, front: BLUE}),
    ],
    middle: [
        // back row
        Cubelet({up: null, left: RED, back: GREEN, right: null, down: null, front: null}),
        Cubelet({up: null, left: null, back: GREEN, right: null, down: null, front: null}),
        Cubelet({up: null, left: null, back: GREEN, right: ORANGE, down: null, front: null}),
        // middle row
        Cubelet({up: null, left: RED, back: null, right: null, down: null, front: null}),
        Cubelet({up: null, left: null, back: null, right: null, down: null, front: null}),
        Cubelet({up: null, left: null, back: null, right: ORANGE, down: null, front: null}),
        // front row
        Cubelet({up: null, left: RED, back: null, right: null, down: null, front: BLUE}),
        Cubelet({up: null, left: null, back: null, right: null, down: null, front: BLUE}),
        Cubelet({up: null, left: null, back: null, right: ORANGE, down: null, front: BLUE}),
    ],
    bottom: [
        // back row
        Cubelet({up: null, left: RED, back: GREEN, right: null, down: YELLOW, front: null}),
        Cubelet({up: null, left: null, back: GREEN, right: null, down: YELLOW, front: null}),
        Cubelet({up: null, left: null, back: GREEN, right: ORANGE, down: YELLOW, front: null}),
        // middle row
        Cubelet({up: null, left: RED, back: null, right: null, down: YELLOW, front: null}),
        Cubelet({up: null, left: null, back: null, right: null, down: YELLOW, front: null}),
        Cubelet({up: null, left: null, back: null, right: ORANGE, down: YELLOW, front: null}),
        // front row
        Cubelet({up: null, left: RED, back: null, right: null, down: YELLOW, front: BLUE}),
        Cubelet({up: null, left: null, back: null, right: null, down: YELLOW, front: BLUE}),
        Cubelet({up: null, left: null, back: null, right: ORANGE, down: YELLOW, front: BLUE}),
    ]
};

export default HoriontalSectionCubeletCubeValues;