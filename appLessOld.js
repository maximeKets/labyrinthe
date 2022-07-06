    let vertical = 6
    let horizontal = 7
    let lab = Array(vertical).fill().map(()=>Array(horizontal).fill(" ")).reverse();


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

    if (left(x)>0 && lab[y][left(x)] === " "){
        choice.left = 1
    }
    if ( right(x)< horizontal && lab[y][right(x)] === " " ){
        choice.right = 1
    }
    if (up(y)>0 && lab[up(y)][x] === " " ){
        choice.up = 1
    }
    if ( down(y)< vertical  && lab[down(y)][x] === " " ){
        choice.down = 1
    }

    return choice
}

function moving(y, x, indice){

    let possibility = choiceAvailable(y,x)
    lab[y][x] = indice


    indice ++


    if (possibility.right){
        return [y,right(x)]
    }
    else if (possibility.down ){
return [down(y),x]
    }
    else if (possibility.left){
return [y,left(x)]
    }
    else if (possibility.up ){
return [up(y), x]
    }
}
function play(){
    let idX = 0
    let idY = 0
    let indice =1
    while (lab[idY][idX] !== "G"){
        let move =  moving(idY, idX, indice)
        console.table(lab)
        idY = move[0]
        idX = move[1]
   }

 //   console.log(lab[idY][idX])
}



function down (y){
        return y+1
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

