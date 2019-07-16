// Code not working - reference for quicksort: https://www.guru99.com/quicksort-in-javascript.html

const sorter = require ('./selection_sort')


test_arr = [3,4,6,2,5,1,9,0]



function partition_arr(arr){
    new_arr = []
    for(var i=1; i < arr.length; i++){
        if (arr[0]>arr[i]){
            new_arr.push(arr[i])
            arr.splice(i, 1)
        }
    }
    return new_arr.concat(arr)
}

function pivot_pos(arr){
    start = arr[0]
    end = arr[arr.length-1]
    mid_i = Math.floor(arr.length/2)
    mid = arr[mid_i]
    new_arr = sorter.selection_sort([start,mid,end]) //need sort
    median = new_arr[1]
    if(median == mid){
        arr[mid] = start
        arr[0] = mid
    } else if (median == end){
        arr[arr.length-1] = start
        arr[0] = end
    }
    return arr
}

function range_part(arr, start, end){
    sorted = partition_arr(arr.slice(start, end + 1))
    new_arr = arr.slice(0, start)
    new_arr = new_arr.concat(sorted)
    return arr

}

function range_part2(arr, start, end){
    sorted = partition_arr(pivot_pos(arr.slice(start, end + 1)))
    return arr.slice(0, start).concat(sorted).concat(arr.slice(end+1))
}

console.log(test_arr)
console.log(partition_arr(test_arr))
console.log(test_arr)
console.log(range_part(test_arr, 2, 4))
console.log(range_part2(test_arr, 2, 4))