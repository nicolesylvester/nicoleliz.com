const MAX_ROWS = 5;
const MAX_COLS = 5;

function createboard() {

    var row, col, newRow, newCell;
    for (row = 0; row < 5; row++) {
        newRow = document.createElement("tr");
        newRow.id = `${row}`;
        board.appendChild(newRow);

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

function fillboard() {
        var randNum, randRow, randCol, light;
        randNum = Math.floor(Math.random() * 10 + 5);

        while (randNum >= 0) {
            randRow = Math.floor(Math.random() * 4);
            randCol = Math.floor(Math.random() * 4);
            light = document.getElementById(`${randRow}-${randCol}`);
            light.click();

            randNum = randNum - 1;
        }

 }

function changeNearby(row, col) {

    //initialize variables
    var topLight, bottomLight, leftLight, rightLight;

    //check if light cell above exists
    if (row - 1 >= 0) {

        //get cell location, toggle state
        topLight = document.getElementById(`${row - 1}-${col}`);
        changeLight(topLight);

    }

    //check for light cell below exists
    if (row + 1 <= 4) {

        //get cell location, toggle state
        bottomLight = document.getElementById(`${row + 1}-${col}`);
        changeLight(bottomLight);

    }

    //check for light cell to the left exists
    if (col - 1 >= 0) {

        //get cell location, toggle state
        leftLight = document.getElementById(`${row}-${col - 1}`);
        changeLight(leftLight);

    }

    //check if light cell to the right exists
    if (col + 1 >= 0) {

        //get cell location, toggle state
        rightLight = document.getElementById(`${row}-${col + 1}`);
        changeLight(rightLight);

    }

    //check if solution was found
    checkForGameEnd();
}

function clickCell() {

    var row, col, newRow, newCol;
    for (row = 0; row < 5; row++) {
        for (col = 0; col < 5; col++) {
            let pos = document.getElementById(`${row}-${col}`);
            pos.addEventListener('click', function () {

                if (pos.className == "on") {
                    pos.className = "off";
                    newRow = Number(pos.id.split("-")[0]);
                    newCol = Number(pos.id.split("-")[1]);
                    changeNearby(newRow, newCol);
                }
                else {
                    pos.className = "on";
                    newRow = Number(pos.id.split("-")[0]);
                    newCol = Number(pos.id.split("-")[1]);
                    changeNearby(newRow, newCol);
                }
            })
        }
    }
}

function changeLight(cell) {
    if (cell.className == "off") {

        cell.className = "on";

    }
    
    else {

        cell.className = "off";

    }
}

function solved() {
    var numLight = document.getElementsByClassName("off");
    if (numLight.length == 0) {
        window.alert("you win!");
    }
}

function reset() {
    for (var rowIndex = 0; rowIndex < 5; rowIndex++) {
        for (var colIndex = 0; colIndex < 5; colIndex++) {
            var light = document.getElementById(`${rowIndex}-${colIndex}`);
            var data = Math.round(Math.random() % 2);
            if (data === 1) {
                light.click();
            }
        }
    }
}