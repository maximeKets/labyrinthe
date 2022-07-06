const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        let idCell = document.createElement("p");
        container.appendChild(cell).className = "O";
        cell.appendChild(idCell).setAttribute("id",c+1 ) ;
    }
}

 function makeWall(caseId){

    for (let i = 0; i < caseId.length; i++) {
        let wallId = document.getElementById(caseId[i])
        let wall = wallId.parentElement;
        wall.className="I"
        wallId.id = null
    }
}

function makeGoal(caseId){

        let wallId = document.getElementById(caseId)
        let wall = wallId.parentElement;
        wall.className="G";
}
function makeStart(caseId){

    let wallId = document.getElementById(caseId)
    let wall = wallId.parentElement;
    wall.className="S";
}
class Game {
    constructor(rows, colls){

        makeRows(rows, colls);
        makeWall([1,2,3,4,5,6,7,8,9,10,19,28,37,46,55,64,65,66,67,68,69,70,71,72,63,54,45,36,27,18,12,21,30,48,57,23,24,32,50,42,43,61,26]);
        makeGoal(33);
        makeStart(11)
    }
    chemin = [];

    findId(id){
        if(document.getElementById(id) === null){
            return null;
        }
        else {
            return document.getElementById(id).id;
        }
    }
    // pour faire retour verifier que numéro est plus petit que le précédent


     goTop(id){
         if (this.findId(id-this.colls) === null){
             return null
         }
         else {
             return id-this.colls
         }
    }

     goRight(id){
         if (this.findId(id+1) === null){
             return null
         }
         else {
             return id+1
         }
    }

     goDown(id){
         if (this.findId(id+this.colls) === null){
            return null
    }
    else {
             return id+this.colls
         }
    }

     goLeft(id){
         if (this.findId(id-1) === null){
             return null
         }
         else {
             return id-1
         }
    }
}

let game = new Game(8, 9)
game.colls=9
game.rows=8

function play(){
    let i = 11
    let y = 0

  while(game.goDown(i)) {
      game.chemin.push([y, i, 4])
      game.goDown(i)
      i = game.goDown(i)
      y++
        }

    if (game.goRight(i)){
          game.chemin.push([y, i, 3])
          console.log("droite")
          game.goRight(i)
          i = game.goRight(i)
          y++
      }
      if (game.goLeft(i)){
          console.log("gauche")
          game.goLeft(i)
          game.chemin.push([y, game.goLeft(i), 2])
          i = game.goLeft(i)
          y++
      }
      if (game.goTop(i)){
          console.log("haut")
          game.chemin.push([y, i, 1])
          game.goTop(i)
          i = game.goTop(i)
          y++
      }
     

      console.log(game.chemin)
    console.log(i)
}

play()



