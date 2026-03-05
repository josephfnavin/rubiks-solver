/**
 * cubelet that keeps track of position x, y, z and color x, y, z
 * position position 0, 1, 2 would be right, middle  (between up and down), back
 * color w, b, g would be white left/right, blue front/back, and green up/down
 * 
 * @param {*} position number[] position
 * @param {*} colors string[] colors
 */
const cubelet = (position, colors) => {
    return {
        position,
        colors,
        u: () => {
            /* new position:
            0 0 -> 0 2
            1 0 -> 0 1
            2 0 -> 0 0

            0 1 -> 1 2
            1 1 -> 1 1
            2 1 -> 1 0

            0 2 -> 2 2
            1 2 -> 2 1
            2 2 -> 2 0
            */
            const newPosition = [position[2], position[1], 2 - position[0]];

            const newColors = [colors[1], colors[0], colors[2]];

            return cubelet(newPosition, newColors);
        }
    }
}

export default cubelet;