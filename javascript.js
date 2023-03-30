let boardCreated = 0;

function createBoard() {
    // remove existing board
    if (boardCreated !== 0) {
        let forDeletion = document.querySelectorAll('.row')
        forDeletion.forEach(node => {
            node.remove();
        })
        boardCreated = 0;
    }
    
    // create new board
    boardCreated += 1;
    let gridSize = document.getElementById("boxCount").value;
    const board = document.querySelector("#board");
    for (let i = 0; i < gridSize; i++){
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < gridSize; j++){
            let cell = document.createElement("div");
            cell.className = "square";
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => square.addEventListener('mouseover', () => {
        colorSquare(square);
    }));
    
}

function colorSquare(square) {
    square.className = "hover";
}