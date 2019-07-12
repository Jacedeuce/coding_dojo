function insertion_sort(arr){
    for(var k =1; k < arr.length; k++){
        var j = k-1
        var i = k
        while (arr[i] < arr[j] && j >=0){
            temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            j--
            i--
        }
    }
    return arr
}

arr = [6,3,8,4,1,9,10,2,5]

console.log(insertion_sort(arr))