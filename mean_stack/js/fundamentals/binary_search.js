function binary_search(arr, val){
    middle = parseInt(arr.length/2)
    if (arr[middle] === val){
        return middle
    } else if (val > arr[middle]){
        return middle + binary_search(arr.slice(middle+1, arr.length), val)-1
    } else if (val < arr[middle]){
        return binary_search(arr.slice(0, middle), val)
    }


}

arr = [1,2,4,6,7,8,9,60]
console.log(binary_search(arr, 4))
