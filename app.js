function box(x,y) {
    return [x,y," "]
}


class labyrinthe {

    x = 7
    y = 6
    lab = []

    constructor() {

        for (let i=0; i<this.x; i++) {
            for(let j=0; j<this.y; j++) {
                 this.lab.push(new box(i,j))
            }
        }
    }


}

let maze = new labyrinthe()

let lab = maze.lab
lab[4][2] = "Goal"
console.table(lab)