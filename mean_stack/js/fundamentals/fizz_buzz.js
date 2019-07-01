function fizzbuzz(num){
    if (num < 1){
        return null
    }
    for (var i=1; i <= num; i++){
        switch (true) {
            case (i % 15 == 0):
                console.log("FizzBuzz")
                break;
            case (i % 3 == 0):
                console.log("Fizz")
                break;
            case (i % 5 == 0):
                console.log("Buzz")
                break;
            default:
                console.log(i)
        }
    }
}

fizzbuzz(15)


function fizzbuzz_bonus(num){
    if (isNaN(num)){
        return "Parameter must be a positive integer"
    }
    else if (num < 1){
        return "Parameter must be a positive integer"
    }
    else {
        str = "1"
        for (var i=2; i <= num; i++){
            switch (true) {
                case (i % 15 == 0):
                    str += ", FizzBuzz"
                    break;
                case (i % 3 == 0):
                    str += ", Fizz"
                    break;
                case (i % 5 == 0):
                    str += " Buzz"
                    break;
                default:
                    str += ", " + i
            }
        }
    }
    return str + "."
}

console.log(fizzbuzz_bonus(15))

console.log(fizzbuzz_bonus('nonsense'))
console.log(fizzbuzz_bonus(0))
