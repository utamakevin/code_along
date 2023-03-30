const items = document.querySelectorAll(".item")
const p = document.querySelector("p")
const buttons = document.querySelectorAll("button")
counter = 0
// alternative: document.querySelectorAll(".completed").length - set it to counter


function handleClick(event) { 
    if(event.target.classList.contains("completed")) {
        event.target.classList.remove("completed")
        counter--
        p.textContent = `${counter} / 5`

    } else {
        event.target.classList.add("completed")
        counter++
        p.textContent = `${counter} / 5`
    }

    if (counter == 5) {
        document.querySelector(".comment").textContent = "All done"
    } else {
        document.querySelector(".comment").textContent = ""
    }
}

function displayMode(event) {
    if(event.target.classList.contains("darkMode")) {
        document.body.style.backgroundColor = "black";
        items.forEach(item => {
            item.style.color = "mistyrose"
        })
        p.style.color = "mistyrose"
    } else if(event.target.classList.contains("lightMode")) {
        document.body.style.backgroundColor = "mistyrose";
        items.forEach(item => {
            item.style.color = "black"
        })
        p.style.color = "black"
    }
}


items.forEach(item => {
    
    item.addEventListener("click", handleClick)
})

buttons.forEach(button => {
    button.addEventListener("click", displayMode)
})