const listItems = document.querySelectorAll('li')
const addBtn = document.querySelector('.add-btn')
const newItemInput = document.querySelector('.new-item-input')

const items = document.querySelector('.items')

function handleClick(event) {
    event.target.classList.toggle('completed')
}

function handleAdd(event) {
    // prevents the form from submitting to the server and keep things client-side
    event.preventDefault()
    // grab value from input box
    let value = newItemInput.value
    // create new element li
    let elem = document.createElement('li')
    // set textContent with the value from input box
    elem.textContent = value
    // add event listener to the new li
    // elem.addEventListener('click', handleClick)
    // append new li to ul
    items.appendChild(elem)
}

listItems.forEach(item => {
    item.addEventListener('click', handleClick)
})

addBtn.addEventListener('click', handleAdd)


// events - objects
// event bubbling - adding event listener to a parent (ul) instead of a child (li) means when li is clicked, the ul is notified and handle the click instead of the li itself.
// aka event delegation

// event bubbling -g bubbling up
// event capturing - trickling down
// event propagation - up or down
// event delegation - handle events somewhere else
// dom traversal