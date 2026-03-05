const StandardLayoutArrayCube = (values) => {
    /*
                ( back )
      ( left )  (  up  )  ( right ) ( down )
                ( front )

                 0  1  2      
                 3  4  5
                 6  7  8
      
       9 10 11  12 13 14  15 16 17  18 19 20
      21 22 23  24 25 26  27 28 29  30 31 32
      33 34 35  36 37 38  39 40 41  42 43 44
                
                45 46 47
                48 49 50
                51 52 53

    */
    return {
        values,

        u: () => {
            const newValues = [
                values[0], values[1], values[2],
                values[3], values[4], values[5],
                values[35], values[23], values[11],
                values[9], values[10], values[45], values[36], values[24], values[12], values[6], values[16], values[17], values[18], values[19], values[20],
                values[21], values[22], values[46], values[37], values[25], values[13], values[7], values[28], values[29], values[30], values[31], values[32],
                values[33], values[34], values[47], values[38], values[26], values[14], values[8], values[40], values[41], values[42], values[43], values[44],
                values[39], values[27], values[15],
                values[48], values[49], values[50],
                values[51], values[52], values[53]
            ];
            return StandardLayoutArrayCube(newValues);
        },

        getUpColors: () => {
            return [
                values[12],
                values[13],
                values[14],
                values[24],
                values[25],
                values[26],
                values[36],
                values[37],
                values[38]
            ]
        },

        getLeftColors: () => {
            return [
                values[11],
                values[23],
                values[35],
                values[10],
                values[22],
                values[34],
                values[9],
                values[21],
                values[33]
            ]
        }
    }
}

export default StandardLayoutArrayCube;