let turn = 1
let alreadyChosen = resetAlreadyChosen()


// resets already chosen object for the next game
function resetAlreadyChosen(){
    const alreadyChosen = {
        "square1" : false,
        "square2" : false,
        "square3" : false,
        "square4" : false,
        "square5" : false,
        "square6" : false,
        "square7" : false,
        "square8" : false,
        "square9" : false
    }
    return alreadyChosen
}

function choose(event){
    const target = event.target
    if (!alreadyChosen[target.id]){
        if (turn == 1){
            target.classList.add("red")
            alreadyChosen[target.id] = "red"
            if (checkVictory("red")){
                resetGame()
                console.log(alreadyChosen)
            }
            // turn still changes so that the loser can start in the next game
            turn = 2
        }else{
            target.classList.add("yellow")
            alreadyChosen[target.id] = "yellow"
            if (checkVictory("yellow")){
                resetGame()
                console.log(alreadyChosen)
            }
            // turn still changes so that the loser can start in the next game
            turn = 1
        }
    }
}

function checkVictory(color){
    // first 3 are for the win with 3 of the same color in the same row
    if((alreadyChosen["square1"] == color && alreadyChosen["square2"] == color && alreadyChosen["square3"] == color) || 
        (alreadyChosen["square4"] == color && alreadyChosen["square5"] == color && alreadyChosen["square6"] == color) ||
        (alreadyChosen["square7"] == color && alreadyChosen["square8"] == color && alreadyChosen["square9"] == color) ||
        // these 3 are for the wins with the 3 of the same color in the same column
        (alreadyChosen["square1"] == color && alreadyChosen["square4"] == color && alreadyChosen["square7"] == color) ||
        (alreadyChosen["square2"] == color && alreadyChosen["square5"] == color && alreadyChosen["square8"] == color) ||
        (alreadyChosen["square3"] == color && alreadyChosen["square6"] == color && alreadyChosen["square9"] == color) ||
        // these 2 are for the win with 3 of the same color in the one of the diagonals
        (alreadyChosen["square1"] == color && alreadyChosen["square5"] == color && alreadyChosen["square9"] == color) ||
        (alreadyChosen["square3"] == color && alreadyChosen["square5"] == color && alreadyChosen["square7"] == color)) {

        console.log(color);
        return color
    }
}

function resetGame(){
    // remove the chips from all the squares
    allSquares = document.querySelectorAll(".square")
    for(const i of allSquares){
        i.classList.remove("red")
        i.classList.remove("yellow")
    }
    alreadyChosen = resetAlreadyChosen()
}