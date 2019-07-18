function count_sort(arr){
    var values = {}
    var min = arr[0]
    var max = arr[0]

    for (let i=0; i < arr.length; i++){
        if (arr[i].toString() in values){
            values[arr[i].toString()]++
        } else {
            values[arr[i].toString()] = 1
        }
        if (arr[i] > max){
            max = arr[i]
        }
        if (arr[i] < max){
            min = arr[i]
        }
    }
    // console.log(min)
    // console.log(max)
    // console.log(values)
    var counter = 0
    for(let i=min; i<=max; i++){
        if (i.toString() in values){
            // console.log(i)
            for (var j=counter; j<values[i.toString()]+counter; j++){
                // console.log(j)
                arr[j] = i
                console.log(arr)
            }
            counter += values[i.toString()]
        }
    }

}


arr = [0,1,2,3,0,1,2,0,1,0]

count_sort(arr)
console.log(arr)

console.log(count_sort(arr))