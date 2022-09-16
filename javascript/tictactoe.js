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