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
let logo = document.getElementById("drawing");


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
referenceThreeBox.style.display = 'grid';

ninexelement.addEventListener("click", setNine);
function setNine() {
    turnCount = 0;
    resultText.innerHTML = "team QUAGSIRE's turn (X)";
    referenceThreeBox.style.display = 'none';
    referenceNineBox.style.display = 'grid';
    //logo.style.display = 'none';
    startyManUltimate();
}

threexelement.addEventListener("click", setThree);
function setThree() {
    turnCount = 0;
    resultText.innerHTML = "team QUAGSIRE's turn (X)";
    referenceNineBox.style.display = 'none';
    referenceThreeBox.style.display = 'grid';
    startyMan();
}

//joverButton.addEventListener("click", startyMan);
joverButton.addEventListener("click", () => {
    if (referenceThreeBox.style.display == 'none') {
        startyManUltimate();
    }
    if (referenceThreeBox.style.display == 'grid') {
        startyMan();
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
        // save the index 0-80 which is the addedTTTIndex

        //disable all grids
        ultimateTicButton.forEach(ele);
        function ele(tileButtons) {
            tileButtons.disabled = true;
            tileButtons.style.backgroundColor = "white";
        }
        
        if (firstTurn == true) { //Quagsire's turn
            firstTurn = false; //switch turns
            //resultText.innerHTML = "team CLODSIRE's turn (O)";
            buttonTile.style.color = "lightskyblue";
            buttonTile.innerText = ","; //draw X
            for (let i = 0; i <= 80; i++) { //i is index of the button that was clicked (the one with ,)
                if (ultimateTicButton[i].innerText == ",") { //finds it
                    checkWinUltimate(i); //go !
                }
            }
            //buttonTile.innerText = "X";
            //buttonTile.disabled = true; //make button not able to be clicked anymore
        }
        else { //Clodsire's turn
            firstTurn = true; //switch turns
            //resultText.innerHTML = "team QUAGSIRE's turn (X)";
            buttonTile.style.color = "saddlebrown";
            buttonTile.innerText = ","; //draw da O
            for (let i = 0; i <= 80; i++) { //i is index of the button that was clicked (the one with ,)
                if (ultimateTicButton[i].innerText == ",") { //finds it
                    checkWinUltimate(i); //go !
                }
            }
            //buttonTile.innerText = "O";
            //buttonTile.disabled = true; //make button not able to be clicked anymore
        }
        turnCount += 1; //increase counter on every click
        /*
        for (let i = 0; i <= 80; i++) { //i is index of the button that was clicked (the one with ,)
            if (ultimateTicButton[i].innerText == ",") {
                checkWinUltimate(i);
            }
        }
        */

        /*
        if (checkWinUltimate() == false) { //check for wins on every click
            checkDrawUltimate(); //check for draws on every click
        }
        */
    }
    )
}

function checkWinUltimate(index) {
    for (let i = 0; i < 80; i += 27) { //0, 27, 54
        for (let j = 0; j < 9; j += 3) { //0, 3, 6
            checkWinUltimateAndGridLock(i + j, index); //top left of each 3x3 grid
            /*
            if (checkWinUltimateAndGridLock(i + j, index) == false) {
                checkDrawUltimate();
            }
            */
        }
    }
}

function checkDrawUltimate() { //what happens in a draw?
    if (turnCount == 9) {
        enderManUltimate();
        resultText.innerHTML = "Draw";
        //resultText.style.visibility = 'visible';

    }
}

function checkWinUltimateAndGridLock(x, target) { //x are the numbers of the top left of each grid
    let y = ~~(x / 9); //divide by 9 to get 0-8 y coordinate
    x %= 9; //mod by 9 to get 0-8 x coordinate
    let tripleGridArray = [] //create array
    for (let i = 0; i < 3; i++) { //traverse through 3
        for (let j = 0; j < 3; j++) { //traverse through 3
            let newX = x + j;
            let newY = y + i; //the other 8 coordinates
            let index = 9 * newY + newX; //revert y back to 0-80 values, add back the x
            
            /*
            aaron comments lmao
            if (index == addedTTTIndex) { // get index of coordinate you just added
                i * 27 + j * 3 // top left corner of 3x3 you wanna enable
            }
            */
            if (index == target) { // 1 instance where the clicked index (target) is in the 3x3 grid being checked
                tlCorner = i * 27 + j * 3 // takes this specific i and j and corresponds it with top left corner of corresponding 3x3 grid

                //get the other 8 coords AGAIN but with the top left corner
                let n = ~~(tlCorner / 9);
                let m = tlCorner % 9;
                for (let p = 0; p < 3; p++) { //traverse through 3
                    for (let q = 0; q < 3; q++) { //traverse through 3
                        let newerX = m + q;
                        let newerY = n + p; //the \other 8 coordinates
                        let gridIndex = 9 * newerY + newerX; //back to origial indexes
                        if (ultimateTicButton[gridIndex].innerText == "") { //only enable the ones that aren't filled
                            ultimateTicButton[gridIndex].disabled = false; //enable the 9 (or less)
                        }
                        //check if all 9 boxes in grid are filled and if they are then enable everything else
                        let isAllFilled = 

                        //highlights the 9
                        ultimateTicButton[gridIndex].style.backgroundColor = "#FFFF00";
                    }
                }
            }
            
            tripleGridArray.push(ultimateTicButton[index]); //array gets 3x3 tictactoe board
        }
    }
    //put back X or O
    if (ultimateTicButton[target].innerText == ",") {
        if (ultimateTicButton[target].style.color == "lightskyblue") {
            ultimateTicButton[target].innerText = "X";
            resultText.innerHTML = "team CLODSIRE's turn (O)";
        }
        if (ultimateTicButton[target].style.color == "saddlebrown") {
            ultimateTicButton[target].innerText = "O";
            resultText.innerHTML = "team QUAGSIRE's turn (X)";
        }
        ultimateTicButton[target].disabled = true;
        console.log(ultimateTicButton[target])
    }

    //original 3x3 check win function
    isWin = false;
    for (let i = 0; i < threeToWin.length; i++) {
        const p = threeToWin[i];
        let [first, second, third] = [ //check combinations of 3
            tripleGridArray[p[0]].innerText, //innerText gets X or O
            tripleGridArray[p[1]].innerText,
            tripleGridArray[p[2]].innerText,
        ];
        if (first != "" && second != "" && third != "" && first == second && second == third) { 
        //check if 3 slots are filled with something (X or O) and they are all equal to each other (all X or all Y)
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
    //return isWin;
    //if not win, then check for draws
    /*
    if (isWin == false) {

    }
    */
}


/*
function corresponsion() {
    for (let i = 0; i <= 80; i++) { //i is index of the button that was clicked (the one with ,)
        if (ultimateTicButton[i].innerText == ",") {
            let xCoord = String(i % 3); //0, 1, or 2 for x columns
            let yCoord = "slatt!";

            //if statements to get 0, 1, or 2 for y rows
            if (i < 27) {
                yCoord = String(~~(i / 9));
            }
            else if (i < 54) {
                yCoord = String(~~((i-27) / 9));
            }
            else if (i < 81) {
                yCoord = String(~~((i-54) / 9));
            }

            //dictionaries to get positioning
            var hori = {"0": "left", 
                        "1": "mid", 
                        "2": "right"}
            var vert = {"0": "top", 
                        "1": "cent", 
                        "2": "bot"}
            
            //ok now get the corresponding 3x3 grid
            //let xPosition = hori[xCoord];
            //let yPosition = vert[yCoord];
            //let describedPosition = "" + xPosition + yPosition
            let describedPosition = "" + hori[xCoord] + vert[yCoord];
            var tlCorner = {"lefttop": 0, "midtop": 3, "righttop": 6,
                            "leftcent": 27, "midcent": 30, "rightcent": 33,
                            "leftbot": 54, "midbot": 57, "rightbot": 60}
            let tlIndex = tlCorner[describedPosition]; //gets the top left corner of 3x3 grid

            //copy and pasted aaron logic to get the other 8 coords with the index of the top left corner
            let y = ~~(tlIndex / 9); //divide by 9 to get 0-8 y coordinate
            tlIndex %= 9; //mod by 9 to get 0-8 x coordinate
            for (let i = 0; i < 3; i++) { //traverse through 3
                for (let j = 0; j < 3; j++) { //traverse through 3
                    let newX = tlIndex + j;
                    let newY = tlIndex + i; //the other 8 coordinates
                    let index = 9 * newY + newX; //revert y back to 0-80 values, add back the x
                    ultimateTicButton[i].disabled = false;
                }
            }
        }
    }
}
*/


/*
function enderManUltimate() { //end function
    ultimateTicButton.forEach(stopButtons);
    function stopButtons(tileButtons) {
        tileButtons.disabled = true;
    }
}
*/
function startyManUltimate() { //show function for resets
    firstTurn = true;
    turnCount = 0;
    resultText.innerHTML = "team QUAGSIRE's turn (X)";
    ultimateTicButton.forEach(startButtons);
    function startButtons(tileButtons) {
        tileButtons.disabled = false;
        tileButtons.innerText = "";
        tileButtons.style.backgroundColor = "white";
    }
}

