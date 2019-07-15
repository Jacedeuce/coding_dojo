var arr1 = [3,6,9]
var arr2 = [2,4,8]

function merge_arr(arr1,arr2){
    var newArr = []
    while(arr1.length > 0 && arr2.length > 0){
        if(arr1[0] < arr2[0]){
            newArr.push(arr1.shift())
        } else {
            newArr.push(arr2.shift())
        }
    }
    if (arr1.length === 0){
        newArr = newArr.concat(arr2)
    } else {
        newArr = newArr.concat(arr1)
    }
    return newArr
    }


console.log(merge_arr(arr1, arr2))

function merge_sort(arr){
    var start = 0
    var end = arr.length
    var mid = Math.floor(arr.length/2)

    if (arr.length===1){
        return arr
    } else {
        var front = merge_sort(arr.slice(0, mid))
        var back = merge_sort(arr.slice(mid, arr.length))
        return merge_arr(front, back)
    }
}

arr3 = [4,2,6,8,1,9]

console.log(merge_sort(arr3))