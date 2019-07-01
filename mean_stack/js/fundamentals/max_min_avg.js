function min_max_avg(array_of_nums){
    min = array_of_nums[0]
    max = array_of_nums[0]
    sum = 0
    for (var i=0; i<array_of_nums.length; i++) {
        if (array_of_nums[i] < min){
            min = array_of_nums[i]
        }
        if (array_of_nums[i] > max){
            max = array_of_nums[i]
        }
        sum += array_of_nums[i]
    }
    return "The minimum is " + min + ", the maximum is " + max + ", and the average is " + sum/array_of_nums.length + "."
}

console.log(min_max_avg([1,-2,9,4]))