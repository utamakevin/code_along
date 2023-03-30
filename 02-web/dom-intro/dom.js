console.log("DOM API")

let h1 = document.querySelector("h1")
h1.textContent = "the dom api"

let button = document.querySelector("button")

function doSomething() {
    console.log("happy happy")
}

button.addEventListener("click", doSomething)

console.log("bye")