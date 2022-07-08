let vertical = 6
let horizontal = 7
let lab = Array(vertical).fill().map(()=>Array(horizontal).fill(" ")).reverse();

let pile =0

function createWall(){

    let wall = [[0,1],[1,1],[2,1],[4,1],[5,1],[1,3],[2,3],[4,3],[1,4],[3,4],[3,5],[5,5],[1,6]];
    for (let i = 0; i <wall.length ; i++) {
        lab[wall[i][0]][wall[i][1]] = "wall"
    }
    lab[2][4] = "G"
    lab[0][0] = "S"
}
createWall()

function explore (y,x ){

    for (let i = 0; i < 20 ; i++){
choiceAvailable(y,x)
    }
}

function choiceAvailable(y, x){


    if (x-1 >0 && lab[y][left(x)] === " " ){
        pile ++
      lab[y][x-1] = pile
    }
    if ( x+1 < horizontal-1 && lab[y][right(x)] === " " ){
        pile ++
        lab[y][x+1] = pile
    }
    if (y-1> 0 && lab[up(y)][x] === " " ){
      pile ++
        lab[y-1][x] = pile
    }
    if ( y+1 && lab[downPossible(y)][x] === " " ){
      pile ++
        lab[y+1][x] = pile
    }

}
explore(0,0)
console.table(lab)
