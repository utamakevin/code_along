let secretNumber = Math.floor(Math.random() * 10)
let numberOfTries = 0

let buttons = document.querySelectorAll(".options button")
let restartBtn = document.querySelector(".restart-button")
let header = document.querySelector("header")
let infoMessage = document.querySelector(".message")




function handleClick(event) {

    // increment the number of tries
    numberOfTries++
    header.textContent = `tries ${numberOfTries}`

    let guess = Number(event.target.dataset.num)
    console.log(guess)

    event.target.disabled = true

    if (guess === secretNumber) {
        infoMessage.textContent = `${guess} is correct`

        // disable all buttons
        buttons.forEach(button => {
            button.disabled = true
        })
        
        // display restart button
        restartBtn.style.display = "block"

    } else {
        infoMessage.textContent = `${guess} is wrong. keep trying`
    }

}

function handleRetry() {
    numberOfTries = 0
    header.textContent = `tries ${numberOfTries}`
    buttons.forEach(button => {
        button.disabled = false
    })
    infoMessage.textContent = "pick a number!"
    restartBtn.style.display = "none"
    secretNumber = Math.floor(Math.random() * 10)
    
}


buttons.forEach(button => {
    button.addEventListener("click", handleClick)
})

restartBtn.addEventListener("click", handleRetry)


/*
Different ways to access the attributes

buttons[0].id
buttons[0].dataset.num
buttons[0].getAttribute("data-num")
buttons[0].getAttribute("data-num").split("-") to ave access to more than one data-num attribute (string) separated by a - .
*/