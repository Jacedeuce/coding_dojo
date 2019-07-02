function braces_valid(str){
    var stack = []
    var braces_open = { 
                '(' : 1,
                '{' : 2,
                '[' : 3
            }
    var braces_closed = {
                ')' : 1,
                '}' : 2,
                ']' : 3
            }
    function brace_type(brace){
        if (brace in braces_open){
            return 'open'
        } else if (brace in braces_closed){
            return 'closed'
        } else {
            return null
        }
    }

    for (var i=0;i<str.length;i++){
        var letter = str[i]
        if (brace_type(letter) === 'open'){
            console.log('storing open brace')
            stack.push(letter)
        } else if (brace_type(letter) === 'closed'){
            console.log('checking closed brace')
            //console.log(braces_open[stack.pop()])
            //console.log(braces_closed[letter])
            if (braces_open[stack.pop()] !== braces_closed[letter]){
                return false
            } else {
                console.log("braces match")
            } 
        } else {
            //console.log('passing letter')
        }
    }
    if (stack.length <1){
        return true
    } else{
        return false
    }
}

console.log(braces_valid("(This is a test(string to see if braces{match}))"))
console.log(braces_valid("this one is {{{ broken }}"))
console.log(braces_valid("{{})()"))