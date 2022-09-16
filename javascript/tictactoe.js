let turn = 1
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

function choose(event){
    const target = event.target
    if (!alreadyChosen[target.id]){
        if (turn == 1){
            target.classList.add("red")
            alreadyChosen[target.id] = "red"
            turn = 2
        }else{
            target.classList.add("yellow")
            alreadyChosen[target.id] = "yellow"
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

        return color
    }
}