// find all the tags/elements/onjects we want to work with

const input = document.querySelector("input")
const button = document.querySelector("button")
const para = document.querySelector("p")

// convention handleEvent - e.g. handleClick

// far to cel (fah - 32) * 5/9
function handleClick() {
    let fah = Number(input.value)
    let cel = (fah - 32) * 5/9
    para.textContent = cel
}

button.addEventListener("click", handleClick)