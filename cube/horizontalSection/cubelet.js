const cubelet = (faces) => {
    const u = () => cubelet({
        up: faces.up,
        down: faces.down,
        front: faces.right,
        right: faces.back,
        back: faces.left,
        left: faces.front
    });
    const r = () => cubelet({
        up: faces.front,
        front: faces.down,
        down: faces.back,
        back: faces.up,
        right: faces.right,
        left: faces.left
    });
    const f = () => cubelet({
        up: faces.left,
        right: faces.up,
        down: faces.right,
        left: faces.up,
        front: faces.front,
        back: faces.back
    });
    return {faces, u, r, f};
};

export default cubelet;