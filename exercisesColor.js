var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#messageDisplay")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")



for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent === "easy") {
            numSquares = 3;
        } else {

            numSquares = 6;
        }

        reset();
    })
}

function reset() {
    colors = generateRandomColors(numSquares);
    // pick new random colors
    pickedColor = pickColor();
    // change colors of squares
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    // change the color of the squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.background = colors[i];

        } else {
            squares[i].style.display = "none"
        }


    }
    h1.style.background = "steelblue";
}


// easyBtn.addEventListener("click", function() {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function() {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {

//         squares[i].style.background = colors[i];

//         squares[i].style.display = "block";
//     }

// });

resetButton.addEventListener("click", function() {
    reset();
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    /////add initial colors to squares
    squares[i].style.background = colors[i]

    //////add click listeners to squares
    squares[i].addEventListener("click", function() {

        // grab color of clicked square
        var clickedColor = this.style.background;
        // compaare color of picked color
        console.log(pickedColor, clickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "000000";
            messageDisplay.textContent = "Try Again"
        }
    });
}

function changeColors(color) {
    //loop through all the squares
    for (var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

};

function generateRandomColors(num) {
    //make an array 
    var arr = []
        //add num random colors to array
    for (var i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor())

    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a green froom 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a blue froom 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}