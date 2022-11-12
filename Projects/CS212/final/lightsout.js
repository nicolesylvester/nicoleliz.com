// function to create the board
function createboard() {

    // initialize values
    var row, col, newRow, newCell;

    // loop the rows adding rows to the board
    for (row = 0; row < 5; row++) {
        newRow = document.createElement("tr");
        newRow.id = `${row}`;
        board.appendChild(newRow);

        // loop the cols adding individual cells to the board and
        // setting them to off
        for (col = 0; col < 5; col++) {
            newCell = document.createElement("td");
            newCell.id = `${row}-${col}`;
            newCell.className = "off";
            board.appendChild(newCell);
        }
    }
    
    clickCell();
    fillboard();
}

// function to fill in the board with random lights
function fillboard() {

    // initialize values
    var randNum, randRow, randCol, light;

    // find a random number to run the loop
    randNum = Math.floor(Math.random() * 10 + 5);

    // loop random number of times
    while (randNum >= 0) {

        // find random row and col between 0,1,2,3,4 and turning it on
        randRow = Math.floor(Math.random() * 5);
        randCol = Math.floor(Math.random() * 5);
        light = document.getElementById(`${randRow}-${randCol}`);
        light.click();

        // decrement random number to loop again
        randNum = randNum - 1;
    }

}

// function to chnage nearby cells
function changeNearby(row, col) {

    //initialize variables
    var topLight, bottomLight, leftLight, rightLight;

    // check for a light in the row above
    if (row - 1 >= 0) {

        // change the top light 
        topLight = document.getElementById(`${row - 1}-${col}`);
        changeLight(topLight);

    }

    //check for a light in the row below
    if (row + 1 <= 4) {

        //change the bottom light
        bottomLight = document.getElementById(`${row + 1}-${col}`);
        changeLight(bottomLight);

    }

    //check for a light to the col left
    if (col - 1 >= 0) {

        // change the left light
        leftLight = document.getElementById(`${row}-${col - 1}`);
        changeLight(leftLight);

    }

    //check for a light to the col right
    if (col + 1 <= 4) {

        //change the right light
        rightLight = document.getElementById(`${row}-${col + 1}`);
        changeLight(rightLight);

    }

    //check for game won
    solved();
}


// function to change cell when clicked on
function clickCell() {

    // initialize variables
    var row, col, newRow, newCol;

    // loop the rows and cols
    for (row = 0; row < 5; row++) {
        for (col = 0; col < 5; col++) {

            let pos = document.getElementById(`${row}-${col}`);
            pos.addEventListener('click', function () {

                // if the light is on, turn it off
                if (pos.className == "on") {
                    pos.className = "off";

                }

                // if the light is off, turn it on
                else {
                    pos.className = "on";
 
                }

                newRow = Number(pos.id.split("-")[0]);
                newCol = Number(pos.id.split("-")[1]);
                changeNearby(newRow, newCol);
            })
        }
    }
}

// function that changes the light state
function changeLight(cell) {

    // if off, turn the light on
    if (cell.className == "off") {

        cell.className = "on";

    }

    // if on, turn the light off
    else {

        cell.className = "off";

    }
}

// function to check if the game is solved
function solved() {

    // check for no more lights on
    var numLight = document.getElementsByClassName("on");

    if (numLight.length === 0) {

        // alert the user they won!
        alert(`you win!`);
    }
}

