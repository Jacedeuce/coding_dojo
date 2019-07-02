function string_encode(str){
    var temp = string[0];
    var count = 1
    var newstr = ""

    for (var i=1; i<str.length;i++){
        if(str[i] === temp){
            count+=1
        } else {
            if (count>1){
                newstr+=temp+count
            } else {
                newstr+=temp
            }
            count = 1
            temp=string[i]
        }
    }

    return newstr
}

function string_decode(str){
    var newstr = ""
    var temp = str[0]

    for (vari=0;i<str.length;i++){
        if(isNaN(parseInt(str[i+1]))){
            newstr+=temp;
        } else {
            newstr+=temp+parseInt(str[i+1])
            i+=1
        }
        temp = str[i+1]
    }

    return newstr
}