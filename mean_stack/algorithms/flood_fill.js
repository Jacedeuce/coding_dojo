canvas = [[0,2,1,2],
            [2,2,1,3],
            [0,2,1,4],
            [1,2,2,4]]

function flood_fill(canvas, y,x,color){
    var testval = canvas[y][x]
    canvas[y][x] = color

    if (y+1 < canvas.length){
        if (testval == canvas[y+1][x]) {
            flood_fill(canvas, y+1, x, color)
    }}
    if (y-1 > -1){
        if (testval == canvas[y-1][x]) {
            flood_fill(canvas, y-1, x, color)
    }}
    if (x+1 < canvas[y].length){
        if (testval == canvas[y][x+1]) {
        flood_fill(canvas, y, x+1, color)
    }}
    if (x-1 > -1){
        if (testval == canvas[y][x-1]) {
        flood_fill(canvas, y, x-1, color)
    }}
}

flood_fill(canvas, 3, 3, 9)

console.log(canvas)