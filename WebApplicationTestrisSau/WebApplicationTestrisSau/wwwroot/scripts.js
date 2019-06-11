function createTable() {
    var tableDiv = document.getElementById("main-table");
    for (var i = 0; i < 6; i++) {
        var row = document.createElement("tr");
        
        for (let j = 0; j < 6; j++) {
            let cell = document.createElement("td");
            cell.id = i * 3 + j + 1;
            row.appendChild(cell);
        }
        tableDiv.appendChild(row);
    }
    return tableDiv;
}

class Cell{
    constructor(cell){
        this.cell = cell;
        this.state = 0;
    }

    isOccupied(){
        if(state == 0)
            setStateOccupied("");
        else{
            alert("You lost;");
            return;
        }
    }

    setStateOccupied(name){
        var fullCell = document.createElement("img");

    }

    setStateFree(){
    
    }
}

class BasePiece{
    constructor(imgName){
        this.imgName = imgName;
    }
    putOnGrid(){
        
    }
}

class FirstPiece extends BasePiece{
    constructor(imgName){
        super(imgName);
    }

    putOnGrid(){
        
    }
}

class SecondPiece extends BasePiece{
    constructor(imgName){
        super(imgName);
    }
}

class ThirdPiece extends BasePiece{
    constructor(imgName){
        super(imgName);
    }
}

class FourthPiece extends BasePiece{
    constructor(imgName){
        super(imgName);
    }
}

var table = createTable();

var cella = new Cell(table);




