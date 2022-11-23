const playerOne = document.getElementById("playerOne")
const playerTwo = document.getElementById("playerTwo")

const playerTime = document.getElementById("player")

let clickCount = 0

const playBtn = document.getElementById("playBtn")

playBtn.addEventListener('click', function(){
    playerTime.innerText = playerOne.value

    const divjogo = document.querySelectorAll(".div-jogo")

    divjogo.forEach( function (item){
        item.addEventListener('click', function(){
            clickCount++

            const divAtual = document.getElementById(item.id) 

            if(divAtual.dataset.value === ""){
                if(playerTime.innerText === playerOne.value){
                    divAtual.dataset.value = 'X'
                    divAtual.innerText = divAtual.dataset.value
                } else {
                    divAtual.dataset.value = 'O'
                    divAtual.innerText = divAtual.dataset.value
                }
            }

            const ternarioValidador = playerTime.innerText === playerOne.value ? playerTwo.value : playerOne.value

            playerTime.innerText = ternarioValidador

            console.log(clickCount)

            winner()
        })  
        
    })
    playBtn.disabled = true
    playBtn.style.backgroundColor = "#aaa"
    playBtn.style.color = "black"
})

function createButton(){
    const infoPlayers = document.getElementById("info-players")
    const tryAgainBtn = document.createElement("button")
    tryAgainBtn.id = "playBtn"
    tryAgainBtn.innerText = "Recomeçar"
    tryAgainBtn.style.backgroundColor = "green"
    infoPlayers.appendChild(tryAgainBtn)
    tryAgainBtn.addEventListener("click", function (){
        location.reload()
    })
}

function winner (){
    const referenceTime = document.getElementById("reference-time")

    const divjogo = document.querySelectorAll(".div-jogo")

    for(i = 0; i < divjogo.length; i++){
       //console.log(divjogo[i].id + " - " + divjogo[i].dataset.value)
       if(divjogo[0].dataset.value === "O" && divjogo[1].dataset.value === "O" && divjogo[2].dataset.value === "O" || 
          divjogo[3].dataset.value === "O" && divjogo[4].dataset.value === "O" && divjogo[5].dataset.value === "O" || 
          divjogo[6].dataset.value === "O" && divjogo[7].dataset.value === "O" && divjogo[8].dataset.value === "O" || 
          divjogo[0].dataset.value === "O" && divjogo[4].dataset.value === "O" && divjogo[8].dataset.value === "O" ||
          divjogo[2].dataset.value === "O" && divjogo[4].dataset.value === "O" && divjogo[6].dataset.value === "O" ||
          divjogo[0].dataset.value === "O" && divjogo[3].dataset.value === "O" && divjogo[6].dataset.value === "O" ||
          divjogo[1].dataset.value === "O" && divjogo[4].dataset.value === "O" && divjogo[7].dataset.value === "O" ||
          divjogo[2].dataset.value === "O" && divjogo[5].dataset.value === "O" && divjogo[8].dataset.value === "O"){
            clickCount = clickCount - 5
            alert("Ganhador: " + playerTwo.value)
            playerTime.innerText = playerTwo.value
            referenceTime.innerText = "GANHADOR"
            createButton()
            break
       } else if(divjogo[0].dataset.value === "X" && divjogo[1].dataset.value === "X" && divjogo[2].dataset.value === "X" || 
                 divjogo[3].dataset.value === "X" && divjogo[4].dataset.value === "X" && divjogo[5].dataset.value === "X" || 
                 divjogo[6].dataset.value === "X" && divjogo[7].dataset.value === "X" && divjogo[8].dataset.value === "X" || 
                 divjogo[0].dataset.value === "X" && divjogo[4].dataset.value === "X" && divjogo[8].dataset.value === "X" ||
                 divjogo[2].dataset.value === "X" && divjogo[4].dataset.value === "X" && divjogo[6].dataset.value === "X" ||
                 divjogo[0].dataset.value === "X" && divjogo[3].dataset.value === "X" && divjogo[6].dataset.value === "X" ||
                 divjogo[1].dataset.value === "X" && divjogo[4].dataset.value === "X" && divjogo[7].dataset.value === "X" ||
                 divjogo[2].dataset.value === "X" && divjogo[5].dataset.value === "X" && divjogo[8].dataset.value === "X"){
                    clickCount = clickCount - 5
                    alert("Ganhador: " + playerOne.value)
                    playerTime.innerText = playerOne.value
                    referenceTime.innerText = "GANHADOR"
                    createButton()
                    break
                } 
    }   
    if(clickCount >=9){
        alert("Jogo Empatado")
        referenceTime.innerText = "JOGO EMPATADO"
        playerTime.innerText = ""
        createButton()
    }
    
}
