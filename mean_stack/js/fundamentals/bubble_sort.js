function bubble_sort(numlist){
    for (var i=0; i<numlist.length; i++){
        for (j=1;j<numlist.length-i;j++){
            if (numlist[j-1] > numlist[j]) {
                temp = numlist[j-1],
                numlist[j-1] = numlist[j]
                numlist[j] = temp
            }
        }
    }
    return numlist
}

console.log(bubble_sort([9,6,4,2,8,7,5,3,1]))