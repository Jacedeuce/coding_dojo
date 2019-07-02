function bubble_sort(numlist){
    var loop_counter = 0
    var switch_counter = 0
    for (var i=0; i<numlist.length; i++){
        var switches = 0
        for (j=1;j<numlist.length-i;j++){
            loop_counter++
            if (numlist[j-1] > numlist[j]) {
                temp = numlist[j-1],
                numlist[j-1] = numlist[j]
                numlist[j] = temp
                switch_counter++
                switches++
            }
        }
        if (switches === 0){
            break
        }
    }
    console.log("Loop count:" + loop_counter)
    console.log("Switch count:" + switch_counter)
    return numlist
}

console.log(bubble_sort([9,6,4,2,8,7,5,3,1]))
console.log(bubble_sort([1,2,3,4,5,6,7,8,9]))