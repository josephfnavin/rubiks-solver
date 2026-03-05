import cubelet from "./cubelet";

const cube = (values) => {
    return {
        values,

        u: () => {
            const newValues = values.map((value) => {
                if (value.position[1] == 2) {
                    return value.u();
                }
                return value;
            });
            return cube(newValues);
        },

        getUpColors: () => {
            return values
                .filter((value) => value.position[1] == 2)
                .sort((value1, value2) => {
                    if (value1.position[2] > value2.position[2]) {
                        return value1;
                    }
                    if (value1.position[2] < value2.position[2]) {
                        return value2;
                    }
                    if (value1.position[0] < value2.position[0]) {
                        return value1;
                    }
                    if (value1.position[0] > value2.position[0]) {
                        return value2;
                    }
                })
                .map(value => value.colors[2]);
        },

        getLeftColors: () => {
            return values
                .filter(value => value.position[0] == 0)
                .sort((value1, value2) => {
                    if (value1.position[1] > value2.position[1]) {
                        return value1;
                    }
                    if (value1.position[1] < value2.position[1]) {
                        return value2;
                    }
                    if (value1.position[2] > value2.position[2]) {
                        return value1;
                    }
                    if (value1.position[2] < value2.position[2]) {
                        return value2;
                    }
                })
                .map(value => value.colors[0]);
        }
    };
};

export default cube;