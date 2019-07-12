var unsorted = [3, 6, 2, 8, 9, 10, 5]



function selection_sort(arr){
    var i = 0
    var swap
    while (i < arr.length){
        temp = arr[i],
        swap = undefined
        for (var k = i+1; k < arr.length; k++){
            if (arr[k] < temp){
                temp = arr[k]
                swap = k
            }
        }
        if (swap != undefined){
            arr[swap] = arr[i]
            arr[i] = temp
        }
        i++
    }
    return arr
}

console.log(selection_sort(unsorted))