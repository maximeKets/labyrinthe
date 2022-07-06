    let vertical = 7
    let horizontal = 6

    let chemin = [];
    let lab = Array(vertical).fill().map(()=>Array(horizontal).fill(" ")).reverse();


function createWall(){
    // for(let i = 0; i <= vertical ; i++) {
    //     lab[0][i]= "wall"
    //     lab[7][i]= "wall"
    // }
    // for(let i = 0; i <= vertical-1 ; i++) {
    //     lab[i][0] = "wall"
    //     lab[i][8] = "wall"
    // }
  //  let wall = [[1,2],[2,2],[3,2],[5,2],[6,2],[2,4],[3,4],[5,4],[2,5],[4,5],[4,6],[6,6],[2,7]];
  //   for (let i = 0; i <=wall.length-1 ; i++) {
  //        lab[wall[i][0]] [wall[i][1]] = "wall"
  //    }
  //    lab[0][0] = "G"
  //    lab[1][1] = "S"

}
function down ([y, x]){
    return lab[y-1][ x]
}
function up ([y, x]){
        return lab[y+1][x]
}
function right ([y, x]){
    return lab[y][x+1]
}
function left (y,x){
    return lab[y][x-1]
}
// changer x et y

// function moveAvailable(y){
//
//     if (left(lab[y][x]) === "wall" ){
//         console.log("mur a gauche")
//     }
// }

// createWall()
lab[4][2]="G"

    console.table(lab)


