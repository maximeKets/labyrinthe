    let vertical = 6
    let horizontal = 7
    let lab = Array(vertical).fill().map(()=>Array(horizontal).fill(" ")).reverse();
    let indice =1
    let gagne = 0
    let bestRoute = 0

function createWall(){

   let wall = [[0,1],[1,1],[2,1],[4,1],[5,1],[1,3],[2,3],[4,3],[1,4],[3,4],[3,5],[5,5],[1,6]];
    for (let i = 0; i <wall.length ; i++) {
         lab[wall[i][0]][wall[i][1]] = "wall"
     }
     lab[2][4] = "G"
     lab[0][0] = "S"
}


function choiceAvailable(y, x){
let choice = []
    let solution = 0

    if (left(x)>0 && lab[y][left(x)] === " " || lab[y][left(x)] === "G"  ){
    if (lab[y][left(x)] === "G"){
    gagne ++
    }
        choice.left = 1
        solution ++
    }
    if ( right(x)< horizontal && lab[y][right(x)] === " " ){
        choice.right = 1
        solution ++
    }
    if (up(y)>0 && lab[up(y)][x] === " " ){
        choice.up = 1
        solution ++
    }
    if ( downPossible(y) && lab[downPossible(y)][x] === " " ){
        choice.down = 1
        solution ++
    }
    if (solution === 0) {
        bestRoute --
        if (lab[y][left(x)] < indice){
            choice.left = 1
        }
        if (lab[y][right(x)] < indice){
            choice.right = 1
        }
        if (lab[up(y)][x] < indice){
            choice.up = 1
        }
        if (downPossible(y)){
            if(lab[downPossible(y)][x] === " " ){
                choice.down = 1
            }
        }
    }
        return choice
}

function moving(y, x){

    let possibility = choiceAvailable(y,x)

    if (lab[y][x] === " ") {
        lab[y][x] = indice
        indice ++
        bestRoute ++
    }

    if (possibility.right){
        return [y,right(x)]
    }
    else if (possibility.down ){
    return [down(y),x]
    }
    else if (possibility.up ){
        return [up(y), x]
    }
    else if (possibility.left){
    return [y,left(x)]
    }
}

function play(){
    let idY = 0
    let idX = 0
    while (gagne !== 1){
        let move =  moving(idY, idX)
        idY = move[0]
        idX = move[1]
        console.table(lab)
        }
        console.log("GGWP")
    console.log(bestRoute)
    }



function down (y){
    return y+1
}
function downPossible(y){
        if (y >= vertical-1){
        return false
        }
        else {
            return down(y)
        }
}
    function upPossible(y){
        if (y <= 0){
            return false
        }
        else {
            return up(y)
        }
    }
    function leftPossible(x){
        if (x <= 0){
            return false
        }
        else {
            return left(x)
        }
    }
    function rightPossible(x){
        if (x >= horizontal-1){
            return false
        }
        else {
            return left(x)
        }
    }

function up (y){
        return y-1
}
function right (x){
    return x+1
}
function left (x){
    return  x-1
}
 createWall()

    play()
    console.table(lab)

