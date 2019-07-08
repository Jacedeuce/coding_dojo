function binary_search(arr, num, start = 0, end = arr.length){
    mid = Math.floor((start + end)/2)
    if (arr[mid]===num){
        return mid
    } else if (start >= end ) {
        return false
    } else if (num > arr[mid]) {
        return binary_search(arr, num, mid+1, end) 
    } else if (num < arr[mid]) {
        return binary_search(arr, num, start, mid-1)
    }
}

var arr = [2, 4, 7, 8, 9, 10]

console.log(binary_search(arr, 3))