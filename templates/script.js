// '//' is how you comment
// Idk what to put here

//make variables for the buttons and text bro bro
let joverButton = document.querySelector(".joe-button");
//let joverTextReference = document.getElementById("jover-text") not needed tbh
let endermanText = document.getElementById("result");
let quagclod = document.getElementById("turn-counter");


//query selector to search multiple elements
let ticButton = document.querySelectorAll(".tic-tac-button");

//make lists to go4dawin
let threeToWin = [
    //horizontal wins
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],  

    //vertical wins
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //diagonal wins
    [0, 4, 8],
    [2, 4, 6]
]

//pvp: whos turn is it? Player1 goes first
let firstTurn = true;
let turnCount = 0; // counter to count the turns that have passed
quagclod.innerHTML = "team QUAGSIRE's turn (X)";

endermanText.style.visibility = 'hidden';
joverButton.addEventListener("click", startyMan);

//what happens when a tic-tac-toe button gets clicked !!!11
ticButton.forEach(clickyTic);

//da click function
function clickyTic(carti) {
    carti.addEventListener("click", () => { //when button is clicked, everything below is run
        if (firstTurn == true) { //Quagsire's turn
            firstTurn = false; //switch turns
            quagclod.innerHTML = "team CLODSIRE's turn (O)";
            carti.style.color = "lightskyblue";
            carti.innerText = "X"; //draw X
            carti.disabled = true; //make button not able to be clicked anymore
        }
        else { //Clodsire's turn
            firstTurn = true; //switch turns
            quagclod.innerHTML = "team QUAGSIRE's turn (X)";
            carti.style.color = "saddlebrown";
            carti.innerText = "O"; //draw da O
            carti.disabled = true; //make button not able to be clicked anymore
        }
        turnCount += 1; //increase counter on every click
        if (checkWin() == false) { //check for wins on every click
            checkDraw(); //check for draws on every click
        };
    }
    )
}

function checkDraw() { //what happens in a draw?
    if (turnCount == 9) {
        enderMan();
        endermanText.innerHTML = "Draw";
        endermanText.style.visibility = 'visible';
    }
}

function checkWin() {
    googooginga = false;
    for (let p of threeToWin) { //p to check everything
        let [first, second, third] = [ //check combinations of 3
            ticButton[p[0]].innerText, //innerText gets X or O
            ticButton[p[1]].innerText,
            ticButton[p[2]].innerText,
        ];
        if (first != "" && second != "" && third != "" && first == second && second == third) { 
        //check if 3 slots are filled with something (X or O) and they are all equal to each other (all X or all Y)
            enderMan();
            if (first == "X") {
                endermanText.innerHTML = "X wins";
                endermanText.style.visibility = 'visible';
                googooginga = true;
                drawWinningLine();
            }
            if (first == "O") {
                endermanText.innerHTML = "O wins";
                endermanText.style.visibility = 'visible';
                googooginga = true;
                drawWinningLine();
            }
        }
    }
    return googooginga;
}

function enderMan() { //end function
    ticButton.forEach(stopButtons);
    function stopButtons(slatt) {
        slatt.disabled = true;
        //slatt.style.visibility = 'hidden';
    }
}

function startyMan() { //show function for resets
    firstTurn = true;
    turnCount = 0;
    ticButton.forEach(startButtons);
    function startButtons(vamp) {
        vamp.disabled = false;
        vamp.innerText = "";
        endermanText.style.visibility = 'hidden';
    }
}

function drawWinningLine() {
    var buttonContainer = document.getElementById("button-container");
    var rect = buttonContainer.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    var containerHeight = rect.height;
    var containerWidth = rect.width;
    var winningLine = document.getElementById("winning-line");
    winningLine.style.position = "absolute";
    winningLine.style.border = "thick solid black";
    // For vertical case
    var verticalMargin = containerHeight * 0.1;
    var winningLineHeight = containerHeight * 0.8;
    winningLine.style.top = `${rect.top + verticalMargin}px`;
    winningLine.style.height = `${winningLineHeight}px`;
    winningLine.style.left = `${rect.left + containerWidth * (1/6)}px`;
}

