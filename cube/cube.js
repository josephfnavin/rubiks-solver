import Cubelet from './cubelet.js';

const cube = (implementation) => {

}

const arrayImplementation = () => {
}

const cubelet1Colors = {
    up: 'w',
    left: 'r',
    back: 'g',
    right: null,
    front: null,
    down: null
}

const rotateCubeletU = cubelet => {
    return {
        up: cubelet.up,
        left: cubelet.front,
        back: cubelet.left,
        right: cubelet.back,
        front: cubelet.right,
        down: cubelet.down
    }
}