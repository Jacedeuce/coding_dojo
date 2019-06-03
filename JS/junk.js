var pal = "madam"
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

console.log(palCheck(pal))

str = "Abc"
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

console.log(pan(str))
console.log(alpha)


str = "aeIouuuu"
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

console.log(supe(str))