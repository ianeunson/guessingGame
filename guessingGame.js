// Asks user to enter a number and makes sure it's a number
let maximum = parseInt(prompt("Enter a maximum number"));

//While user has not entered a valid number it asks to enter a valid number
while(!maximum){
    maximum = parseInt(prompt("Enter a valid number!"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);