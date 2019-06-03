
function palCheck(str) {
    val = true
    for (var i=0;i<str.length/2;i++){
        if (val==true){
            if (str[i] != str[str.length-i-1]){
                val = false
            } else {
                val = true
            }
        } else {
            return false
        }
    }

    if (val == true) {
        return true
    }
}

function pan(str){
    str = str.toLowerCase()
    var alpha = {a:false, b:false, c:false}
    for (k in alpha){
        alpha[k] = str.includes(k)
    }
    val = true
    for (k in alpha){
        if (!alpha[k]){
            val = false
        }
    }
    return val
}

function supe(str){
    str=str.toLowerCase()
    var alpha = {a:0, e:0, i:0, o:0, u:0}
    
    for (k in alpha){
        var count = 0
        for (i=0;i<str.length;i++){
            if (k == str[i]){
                count++
            }
        }
        alpha[k] = count
    }
    val = true
    for (k in alpha){
        if(alpha[k] != 1)
        {
            val = false
        }
    }
    return val
}

// console.log(supe(str))

describe("supe", function() {
    it("should return false when we pass 'aeIouuuu' as an argument", function() {
        expect(supe('aeIouuuu')).toEqual(false);
    }); 
    it("should return true when we pass 'aeiou' as an argument", function() {
        expect(supe('aeiou')).toEqual(true);
    });
    it("should return true when we pass 'aeiou' as an argument", function() {
        expect(supe('SUPERVOCALIC')).toEqual(true);
    });
})


//20190531

//fizzbuzz
function fizzbuzz(num){
    var arr = []
    for (var i=1;i<num;i++){
        if (i % 15 === 0){
            console.log("FizzBuzz")
            arr.push("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz") 
            arr.push("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
            arr.push("Buzz")
        } else {
            console.log(i)
            arr.push(i)
        }
    }
    return arr
}
fizzbuzz(4)

describe("fizzbuzz", function() {
    it("Should print numbers substituting 'fizz' for multiples of three and 'buzz' for multiples of \
    five", function() {
        expect(fizzbuzz(4)).toEqual([1,2,'Fizz']);
    })
});
//coinchanger

function howmany(num, div){
    coins = Math.floor(num/div)
    rem = num % div
    return [coins, rem]
}

function change(amount){
    var coin = {d:10,n:5,p:1}
    var dict = {q:0,d:0,n:0,p:0}
    temp = howmany(amount, 25)
    dict['q'] = temp[0]
    over = temp[1]
    for (k in coin){
        temp = howmany(over, coin[k])
        dict[k] = temp[0]
        over = temp[1]
    }
    return dict
}

console.log(change(32))

// jasmine

describe("change", function() {
    it("should return the number of coins required to dispense the correct change", function() {
        expect(change(42)).toEqual({ q: 1, d:1, n:1, p:2})
    })
});

function sumToOne(num){
    var newstr = num.toString()
    var sum = 0
    for (var i=0; i<newstr.length;i++){
        sum += Integer.parseint(newstr[i])
    }
    
}
