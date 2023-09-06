// '//' is how you comment
// Idk what to put here

//make variables for the buttons and text bro bro
let joverButton = document.querySelector(".joe-button");
let resultText = document.getElementById("result");
let winLine = document.getElementsByClassName("win-line");
let threexelement = document.getElementById("threebythree");
let ninexelement = document.getElementById("ninebynine");
let referenceThreeBox = document.querySelector(".tic-box");
let referenceNineBox = document.querySelector(".ultimate-tic-box");


//query selector to search multiple elements
let ticButton = document.querySelectorAll(".tic-tac-button");
let ultimateTicButton = document.querySelectorAll(".ultimate-tic-tac-button");

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

//resultText.style.visibility = 'hidden';

ninexelement.addEventListener("click", setNine);
function setNine() {
    //turnCount = 0;
    //resultText.innerHTML = "team QUAGSIRE's turn (X)";
    referenceThreeBox.style.display = 'none';
    referenceNineBox.style.display = 'grid';
    startyManUltimate();
}

threexelement.addEventListener("click", setThree);
function setThree() {
    //turnCount = 0;
    //resultText.innerHTML = "team QUAGSIRE's turn (X)";
    referenceNineBox.style.display = 'none';
    referenceThreeBox.style.display = 'grid';
    startyMan();
}

//joverButton.addEventListener("click", startyMan);
joverButton.addEventListener("click", () => {
    if (referenceThreeBox.style.display == 'none') {
        startyManUltimate();
        console.log("slatt");
    }
    if (referenceThreeBox.style.display == 'grid') {
        startyMan();
        console.log("goog");
    }
});


//what happens when a tic-tac-toe button gets clicked !!!11
ticButton.forEach(clickyTic);
ultimateTicButton.forEach(clickyTicUltimate);

//da click function
function clickyTic(buttonTile) {
    buttonTile.addEventListener("click", () => { //when button is clicked, everything below is run
        if (firstTurn == true) { //Quagsire's turn
            firstTurn = false; //switch turns
            resultText.innerHTML = "team CLODSIRE's turn (O)";
            buttonTile.style.color = "lightskyblue";
            buttonTile.innerText = "X"; //draw X
            buttonTile.disabled = true; //make button not able to be clicked anymore
        }
        else { //Clodsire's turn
            firstTurn = true; //switch turns
            resultText.innerHTML = "team QUAGSIRE's turn (X)";
            buttonTile.style.color = "saddlebrown";
            buttonTile.innerText = "O"; //draw da O
            buttonTile.disabled = true; //make button not able to be clicked anymore
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
        resultText.innerHTML = "Draw";
        //resultText.style.visibility = 'visible';

    }
}

function checkWin() {
    isWin = false;
    for (let i = 0; i < threeToWin.length; i++) { //p to check everything
        const p = threeToWin[i];
        let [first, second, third] = [ //check combinations of 3
            ticButton[p[0]].innerText, //innerText gets X or O
            ticButton[p[1]].innerText,
            ticButton[p[2]].innerText,
        ];
        if (first != "" && second != "" && third != "" && first == second && second == third) { 
        //check if 3 slots are filled with something (X or O) and they are all equal to each other (all X or all Y)
            enderMan();
            if (first == "X") {
                resultText.innerHTML = "team QUAGSIRE wins (X)";
                //resultText.style.visibility = 'visible';
                isWin = true;
            }
            if (first == "O") {
                resultText.innerHTML = "team CLODSIRE wins (O)";
                //resultText.style.visibility = 'visible';
                isWin = true;
            }
            drawWinLine(i, first);
        }
    }
    return isWin;
}


function drawWinLine(specificCondition, winner) {
    if (winner == "X") {
        key = String(specificCondition);
        var dict = {"0": 0, "1": 1, "2": 2,
                    "3": 3, "4": 4, "5": 5,
                    "6": 6, "7": 7};
        imageNumber = dict[key];
        winLine[imageNumber].style.display = 'block';
    }
    if (winner == "O") {
        key = String(specificCondition);
        var dict = {"0": 8, "1": 9, "2": 10,
                    "3": 11, "4": 12, "5": 13,
                    "6": 14, "7": 15};
        imageNumber = dict[key];
        winLine[imageNumber].style.display = 'block';
    }
}

function enderMan() { //end function
    ticButton.forEach(stopButtons);
    function stopButtons(tileButtons) {
        tileButtons.disabled = true;
    }
}

function startyMan() { //show function for resets
    firstTurn = true;
    turnCount = 0;
    resultText.innerHTML = "team QUAGSIRE's turn (X)";
    ticButton.forEach(startButtons);
    function startButtons(tileButtons) {
        tileButtons.disabled = false;
        tileButtons.innerText = "";
    }
    for (let i = 0; i < 16; i++) {
        winLine[i].style.display = 'none';
    }
}



//copy paste functions for ultimate versions
function clickyTicUltimate(buttonTile) {
    buttonTile.addEventListener("click", () => { //when button is clicked, everything below is run
        if (firstTurn == true) { //Quagsire's turn
            firstTurn = false; //switch turns
            resultText.innerHTML = "team CLODSIRE's turn (O)";
            buttonTile.style.color = "lightskyblue";
            buttonTile.innerText = "X"; //draw X
            buttonTile.disabled = true; //make button not able to be clicked anymore
        }
        else { //Clodsire's turn
            firstTurn = true; //switch turns
            resultText.innerHTML = "team QUAGSIRE's turn (X)";
            buttonTile.style.color = "saddlebrown";
            buttonTile.innerText = "O"; //draw da O
            buttonTile.disabled = true; //make button not able to be clicked anymore
        }
        turnCount += 1; //increase counter on every click
        if (checkWinUltimate() == false) { //check for wins on every click
            checkDraw(); //check for draws on every click
        };
    }
    )
}

function checkDrawUltimate() { //what happens in a draw?
    if (turnCount == 9) {
        enderManUltimate();
        resultText.innerHTML = "Draw";
        //resultText.style.visibility = 'visible';

    }
}

function checkWinUltimate() {
    isWin = false;
    for (let i = 0; i < threeToWin.length; i++) { //p to check everything
        const p = threeToWin[i];
        let [first, second, third] = [ //check combinations of 3
            ultimateTicButton[p[0]].innerText, //innerText gets X or O
            ultimateTicButton[p[1]].innerText,
            ultimateTicButton[p[2]].innerText,
        ];
        if (first != "" && second != "" && third != "" && first == second && second == third) { 
        //check if 3 slots are filled with something (X or O) and they are all equal to each other (all X or all Y)
            enderManUltimate();
            if (first == "X") {
                resultText.innerHTML = "team QUAGSIRE wins (X)";
                isWin = true;
            }
            if (first == "O") {
                resultText.innerHTML = "team CLODSIRE wins (O)";
                isWin = true;
            }
        }
    }
    return isWin;
}
function enderManUltimate() { //end function
    ultimateTicButton.forEach(stopButtons);
    function stopButtons(tileButtons) {
        tileButtons.disabled = true;
    }
}
function startyManUltimate() { //show function for resets
    firstTurn = true;
    turnCount = 0;
    resultText.innerHTML = "team QUAGSIRE's turn (X)";
    ultimateTicButton.forEach(startButtons);
    function startButtons(tileButtons) {
        tileButtons.disabled = false;
        tileButtons.innerText = "";
    }
}

