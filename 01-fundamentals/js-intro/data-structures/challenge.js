/*
using a while loop

repeatly prompt the user if they want to keep going? using the prompt function

if they type in stop

alert ok and stop the loop

otherwise keep prompting the user if they want to keep going?


if you have to restart chrome - i am sorry


*/



let condition = true;

while (condition) {
    let input = prompt("You want to keep going?");
    if (input === "stop") {
        condition = false;
        alert("ok");
    }
}


