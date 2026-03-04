export default cubelet = (faces) => {
    const u = () => ({
        up: faces.up,
        down: faces.down,
        front: faces.right,
        right: faces.back,
        back: faces.left,
        left: faces.front
    });
    const r = () => ({
        up: faces.front,
        front: faces.down,
        down: faces.back,
        back: faces.up,
        right: faces.right,
        left: faces.left
    });
    const f = () => ({
        up: faces.left,
        right: faces.up,
        down: faces.right,
        left: faces.up,
        front: faces.front,
        back: faces.back
    });
    return {faces, u, r, f};
};