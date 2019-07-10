function is_move_safe(qx, qy, mx, my){
    if(mx == qx  || my == qy || Math.abs(mx-qx) == Math.abs(my-qy)) {
        return false;
    } else {
        return true;
    }
}

// console.log(is_move_safe(0,0, 3,0))


var board = [[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0]]

function safe_moves(board,  qx, qy, x=0, y=0, safe_arr = []) {
    if (x < board[0].length) {
        if(is_move_safe(qx, qy, x, y)){
            safe_arr.push([x,y])
        }
        safe_moves(board, qx, qy, x+1, y, safe_arr)
    } else if (y < board.length-1) {
        safe_moves(board, qx, qy, 0, y+1, safe_arr)
    }
    return safe_arr
}

console.log(safe_moves(board, 0, 0))
