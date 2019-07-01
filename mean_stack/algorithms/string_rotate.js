var str = "scuba"

function rotate_string(str, num){
    moves = num % str.length
    str = str.slice(moves, str.length) + str.slice(0, moves)
    return str
}

console.log(rotate_string(str, 4))