const HoriontalSectionCubeletCube = (values) => {
    return {
        values,

        u: () => {
            const newValues = {
                top: [
                    values.top[6].u(), values.top[3].u(), values.top[0].u(),
                    values.top[7].u(), values.top[4].u(), values.top[1].u(),
                    values.top[8].u(), values.top[5].u(), values.top[2].u()
                ],
                middle: values.middle,
                bottom: values.bottom
            }
            return HoriontalSectionCubeletCube(newValues);
        },

        getUpColors: () => {
            return [
                values.top[0].faces.up,
                values.top[1].faces.up,
                values.top[2].faces.up,
                values.top[3].faces.up,
                values.top[4].faces.up,
                values.top[5].faces.up,
                values.top[6].faces.up,
                values.top[7].faces.up,
                values.top[8].faces.up
            ]
        },

        getLeftColors: () => {
            return [
                values.top[0].faces.left,
                values.top[3].faces.left,
                values.top[6].faces.left,
                values.middle[0].faces.left,
                values.middle[3].faces.left,
                values.middle[6].faces.left,
                values.bottom[0].faces.left,
                values.bottom[3].faces.left,
                values.bottom[6].faces.left
            ]
        }
    }
}

export default HoriontalSectionCubeletCube;