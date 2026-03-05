import cubelet from "./cubelet";

values = [
    // top left back
    cubelet([0, 2, 2], ['r', 'g', 'w']),
    // top middle back
    cubelet([1, 2, 2], [null, 'g', 'w']),
    // top right back
    cubelet([2, 2, 2], ['o', 'g', 'w']),

    // top left middle
    cubelet([0, 2, 1], ['r', null, 'w']),
    // top middle middle
    cubelet([1, 2, 1], [null, null, 'w']),
    // top right, middle
    cubelet([2, 2, 1], ['o', null, 'w']),

    // top left front
    cubelet([0, 2, 0], ['r', 'b', 'w']),
    // top middle front
    cubelet([1, 2, 0], [null, 'b', 'w']),
    // top right front
    cubelet([2, 2, 0], ['o', 'b', 'w']),

    // middle left back
    cubelet([0, 1, 2], ['r', 'g', 'w']),
    // middle middle back
    cubelet([1, 1, 2], [null, 'g', 'w']),
    // middle right back
    cubelet([2, 1, 2], ['o', 'g', 'w']),

    // middle left middle
    cubelet([0, 1, 1], ['r', null, 'w']),
    // middle middle middle
    cubelet([1, 1, 1], [null, null, 'w']),
    // middle right, middle
    cubelet([2, 1, 1], ['o', null, 'w']),

    // middle left front
    cubelet([0, 1, 0], ['r', 'b', 'w']),
    // middle middle front
    cubelet([1, 1, 0], [null, 'b', 'w']),
    // middle right front
    cubelet([2, 1, 0], ['o', 'b', 'w']),

    // bottom left back
    cubelet([0, 0, 2], ['r', 'g', 'w']),
    // bottom middle back
    cubelet([1, 0, 2], [null, 'g', 'w']),
    // bottom right back
    cubelet([2, 0, 2], ['o', 'g', 'w']),

    // bottom left middle
    cubelet([0, 0, 1], ['r', null, 'w']),
    // bottom middle middle
    cubelet([1, 0, 1], [null, null, 'w']),
    // bottom right, middle
    cubelet([2, 0, 1], ['o', null, 'w']),

    // bottom left front
    cubelet([0, 0, 0], ['r', 'b', 'w']),
    // bottom middle front
    cubelet([1, 0, 0], [null, 'b', 'w']),
    // bottom right front
    cubelet([2, 0, 0], ['o', 'b', 'w']),
];

export default values;