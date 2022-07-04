const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        let idCell = document.createElement("p");
        cell.innerText = (c+1);
        container.appendChild(cell).className = "grid-item";
        cell.appendChild(idCell).setAttribute("id",c+1 ) ;
    }
}
 function makeWall(caseId){

    for (let i = 0; i < caseId.length; i++) {
        let wallId = document.getElementById(caseId[i])
        let wall = wallId.parentElement;
        wall.className="wall" }
    }

function makeGoal(caseId){

        let wallId = document.getElementById(caseId)
        let wall = wallId.parentElement;
        wall.className="goal";
}
function makeStart(caseId){

    let wallId = document.getElementById(caseId)
    let wall = wallId.parentElement;
    wall.className="start";
}

function goTop(caseId){

}
function goRight(){
    return caseId+colls

}
function goDown(){

}
function goLeft(){

}
function startGame(rows, colls){
    makeRows(rows, colls);
    let chemin = [];
    makeWall([2,9,16,30,37,11,18,32,12,26,27,41,14 ]);
    makeGoal(19);
    makeStart(1)
}
startGame(6, 7);