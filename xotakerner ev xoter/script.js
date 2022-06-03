var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var eaterDierArr  = [];
var predatorDierArr = [];
var personArr = [];
var side = 60;
function isFinshed() {
    if(grassArr.length === 0 && grassEaterArr.length === 0 && eaterDierArr.length === 0 || predatorDierArr.length == 0 || personArr.length === 0){
        return true;
    } else {
        return false;
    }
}
function setup() {
    function matrixGenerator(matrixSize, grassCount, grassEaterCount){
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = []
            for (let o = 0; o < matrixSize; o++) { 
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grassCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 1;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 2;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 3;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 4;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 5;
        }
    }
    matrixGenerator(20, 40, 2)
    
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            
            if (matrix[y][x] == 1){
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2){
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }
            else if (matrix[y][x] == 3){
                let eater = new EaterDier(x, y);
                eaterDierArr.push(eater);
            }
            else if (matrix[y][x] == 4){
                let eater = new PredatorDier(x, y);
                predatorDierArr.push(eater);
            }
            else if (matrix[y][x] == 5){
                let eater = new Person(x, y);
                personArr.push(eater);
            }
            else if (matrix[y][x] == 6){
                let eater = new Fire(x, y);
                fireArr.push(eater);
            }
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if(matrix[y][x] == 3) {
                fill("black");
            }
            else if(matrix[y][x] == 4) {
                fill("brown");
            }
            else if(matrix[y][x] == 5) {
                fill("blue");
            }
            rect(x * side, y * side, side, side);

        }
    }

    for (let i = 0; i < grassArr.length; i++) {
        const grass = grassArr[i];
        grass.mul();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        const eater = grassEaterArr[i];
        eater.eat();
    }
    for (let i = 0; i < eaterDierArr.length; i++) {
        const eater = eaterDierArr[i];
        eater.eat();
    }
    for (let i = 0; i < predatorDierArr.length; i++) {
        const eater = predatorDierArr[i];
        eater.eat();
    }
    for (let i = 0; i < personArr.length; i++) {
        const eater = personArr[i];
        eater.eat();
    }
    if(isFinshed()) {
         
    matrix = [ 
        ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#000000","#000000","#000000","#000000","#000000","#ffffff","#000000","#ffffff","#ffffff","#000000","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#000000","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#000000","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#000000","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#000000","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#000000","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#C0392B","#C0392B","#C0392B","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#C0392B","#C0392B","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#C0392B","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#C0392B","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#C0392B","#C0392B","#C0392B","#ffffff","#C0392B","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#C0392B","#ffffff","#C0392B","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#C0392B","#ffffff","#C0392B","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#C0392B","#ffffff","#C0392B","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#C0392B","#C0392B","#C0392B","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#C0392B","#C0392B","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]
]
    for(var i=0; i<matrix.length; i++){
        for(var j=0; j<matrix[i].length; j++){
            fill(matrix[j][i])
            rect(i*side, j*side, side, side)
        }  
    }

    }
}





       
    