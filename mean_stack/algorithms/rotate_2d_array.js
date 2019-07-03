function rotate_array(arr) {
    newarr = []
    for (j=0; j < arr[0].length; j++) {
        nestedarr = []
        for (i=arr.length-1; i >= 0; i--) {
            nestedarr.push(arr[i][j])
        }
        newarr.push(nestedarr)
    }

    return newarr
}

arrs = [[1,3,5,7],
        [6,5,4,3],
        [5,1,9,4],
        [2,8,6,3]]

// console.log(rotate_array(arrs))

arrs_uneven = [[1,3,5,7],
                [6,5,4,3],
                [5,1,9,4],
                [2,8,6,3],
                [6,3,8,1],
                [9,6,8,2]]

console.log(rotate_array(arrs_uneven))