const roll = document.getElementById("roll")
const hold = document.getElementById("hold")
const totalOne = document.getElementById("total-one")
const totalTwo = document.getElementById("total-two")
const currentOne = document.getElementById("current-one")
const currentTwo = document.getElementById("current-two")
const image = document.getElementById("dice")
const message = document.getElementById("message")
const start = document.getElementById("start")
const currentPlayer = document.getElementById("player")

let scoreOne = 0
let scoreTwo = 0
let currentScore = 0


const changePlayer = (currentPlayer) => {
    if(currentPlayer == 1 ){
        return 2
    } else if (currentPlayer == 2) {
        return 1
    }
    
}


const randomNum = () => {
    return Math.floor(Math.random() * 6 + 1)
}

start.addEventListener("click", () => {
    scoreOne = 0
    scoreTwo = 0
    player = 1
    currentScore = 0
    message.innerHTML = "New Game Player One To Roll First"
    currentPlayer.innerHTML = "Player One"
    currentPlayer.style.backgroundColor = "#9B5DE5"
    currentOne.innerHTML = currentScore
    currentTwo.innerHTML = currentScore
    totalOne.innerHTML = scoreOne
    totalTwo.innerHTML = scoreTwo
    roll.style.display = ""
    hold.style.display = ""
    
})


let player = 1
let totalScore = 0

roll.addEventListener("click", () => {
    let dice = randomNum()
    image.src=`./assets/dice${dice}.png`;
    if(player == 1){
        totalScore = scoreOne 
        
    } else if (player == 2){
        totalScore = scoreTwo 
    }
    currentScore += dice 
    totalScore += currentScore
    
    
    if(dice == 1){
        currentScore = 0
        message.innerHTML = `Player ${player} current score lost! <br> next player to roll!</br>`
        if(player == 1 ){
            player = 2
            currentPlayer.innerHTML = "Player Two"
            currentPlayer.style.backgroundColor = "#F15BB5"
            currentOne.innerHTML = currentScore
    
        } else if (player == 2) {
            currentPlayer.innerHTML = "Player One"
            currentPlayer.style.backgroundColor = "#9B5DE5"
            currentTwo.innerHTML = currentScore
            player = 1
            
        }
        
       
    } else if ((totalScore) >= 20){
        roll.style.display = "none"
        hold.style.display = "none"
        message.innerHTML = "you win!"
        if(player == 1){
            currentOne.innerHTML = currentScore
            
        } else if (player == 2){
            currentTwo.innerHTML = currentScore
            
        }
        start.innerHTML = "Start new Game"
    } else if(totalScore < 20){
        if(player == 1){
           
            message.innerHTML = `Hold or Roll again?`
            currentOne.innerHTML = currentScore
        } else if (player == 2){
            
            message.innerHTML = `Hold or Roll again?`
            currentTwo.innerHTML = currentScore
        }

}


    
})



hold.addEventListener("click", () => {
    
    message.innerHTML = `Your Turn To Roll!`
    if(player == 1){
        scoreOne += currentScore
        currentScore = 0
        totalOne.innerHTML = scoreOne
        player = 2
        currentPlayer.innerHTML = "Player Two"
        currentPlayer.style.backgroundColor = "#F15BB5"
        currentOne.innerHTML = currentScore
        
    } else if (player == 2){
        scoreTwo += currentScore
        currentScore = 0
        totalTwo.innerHTML = scoreTwo
        player = 1
        currentPlayer.innerHTML = "Player One"
        currentPlayer.style.backgroundColor = "#9B5DE5"
        currentTwo.innerHTML = currentScore
        
    }
    
    
})
