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



class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }

        }

        return result;
    }
    mul() {
        this.energy++;
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let grass = new Grass(x, y);
            matrix[y][x] = 1;
            grassArr.push(grass);

            this.energy = 0;
        }
    }
}

    
    

class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCordinates(){
            this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
      this.getNewCordinates();
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }

        }

        return result;
    }
    mul() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let eater = new GrassEater(x, y);
            matrix[y][x] = 2;
            grassEaterArr.push(eater);

            this.energy = 20;
        } 
    }
    eat(){
        let found = this.chooseCell(1);
        let exact = random(found)

        if (exact){
            this.energy +=5;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if( grassArr[i].x == x && grassArr[i].y == y ){
                    grassArr.splice(i, 1)
                }
            }

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

            if(this.energy > 30){
                this.mul()
            }
        }else {
            this.move()
        }
    }
    move(){
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy--

            if(this.energy < 0){
                this.die()
            }
        }else {
            this.energy--
            if(this.energy < 0){
                this.die()
            }
        }
    }
    die(){
        for (let i = 0; i < grassEaterArr.length; i++) {
            if( grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y ){
                grassEaterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}

class EaterDier {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 100;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewCordinates(){
            this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
      this.getNewCordinates();
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }

        }

        return result;
    }
    mul() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let dier = new EaterDier(x, y);
            matrix[y][x] = 2;
            eaterDierArr.push(dier);

            this.energy = 100;
        } 
        }
        eat () {
            let found = this.chooseCell(2, );
            let exact = random(found)
    
             if (exact){
                this.energy +=5;
                let x = exact[0];
                let y = exact[1];
    
                for (let i = 0; i < grassEaterArr.length; i++) {
                    if( grassEaterArr[i].x == x && grassEaterArr[i].y == y ){
                        grassEaterArr.splice(i, 1)
                    }
                }

                // for (let i = 0; i < grassArr.length; i++) {
                //     if( grassArr[i].x == x && grassArr[i].y == y ){
                //         grassArr.splice(i, 1)
                //     }
                // }
    
    
                matrix[y][x] = 3
                matrix[this.y][this.x] = 0
                
                this.x = x;
                this.y = y
    
                if(this.energy > 130){
                    this.mul()
                }
            }else {
                this.move()
            }
        }
        move() {
            let found = this.chooseCell(0);
            let exact = random(found)
    
            if (exact){
                let x = exact[0];
                let y = exact[1];
    
                matrix[y][x] = 3
                matrix[this.y][this.x] = 0
    
                this.x = x;
                this.y = y;
    
                this.energy--
    
                if(this.energy < 0){
                    this.die()
                }
            }else {
                this.energy--
                if(this.energy < 0){
                    this.die()
                }
            
            }
        }

        die() {
            for (let i = 0; i < eaterDierArr.length; i++) {
                if( eaterDierArr[i].x == this.x && eaterDierArr[i].y == this.y ){
                    eaterDierArr.splice(i, 1)
                }
            }
        }    
    }
    
class PredatorDier {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.energy = 100;
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
            ];
        }
        getNewCordinates(){
                this.directions = [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
            ];
        }
        chooseCell(char) {
          this.getNewCordinates();
            let result = [];
    
            for (let i = 0; i < this.directions.length; i++) {
                let x = this.directions[i][0];
                let y = this.directions[i][1];
    
                if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                    if (matrix[y][x] == char) {
                        result.push(this.directions[i]);
                    }
                }
    
            }
    
            return result;
        }
        mul() {
            let found = this.chooseCell(0);
            let exact = random(found)
    
            if (exact && this.energy > 8) {
                let x = exact[0];
                let y = exact[1];
    
                let dier = new PredatorDier(x, y);
                matrix[y][x] = 2;
                predatorDierArr.push(dier);
    
                this.energy = 100;
            } 
        }
            eat () {
                let found = this.chooseCell(3);
                let exact = random(found)
        
                if (exact){
                    this.energy +=5;
                    let x = exact[0];
                    let y = exact[1];
        
                    for (let i = 0; i < predatorDierArr.length; i++) {
                        if( predatorDierArr[i].x == x && predatorDierArr[i].y == y ){
                            predatorDierArr.splice(i, 1)
                        }
                    }
    
                    // for (let i = 0; i < grassArr.length; i++) {
                    //     if( grassArr[i].x == x && grassArr[i].y == y ){
                    //         grassArr.splice(i, 1)
                    //     }
                    // }
        
        
                    matrix[y][x] = 4
                    matrix[this.y][this.x] = 0
                    
                    this.x = x;
                    this.y = y
        
                    if(this.energy > 130){
                        this.mul()
                    }
                }else {
                    this.move()
                }
            }
            move() {
                let found = this.chooseCell(0);
                let exact = random(found)
        
                if (exact){
                    let x = exact[0];
                    let y = exact[1];
        
                    matrix[y][x] = 3
                    matrix[this.y][this.x] = 0
        
                    this.x = x;
                    this.y = y;
        
                    this.energy--
        
                    if(this.energy < 0){
                        this.die()
                    }
                }else {
                    this.energy--
                    if(this.energy < 0){
                        this.die()
                    }
                }
            }
            die() {
                for (let i = 0; i < predatorDierArr.length; i++) {
                    if( predatorDierArr[i].x == this.x && predatorDierArr[i].y == this.y ){
                        predatorDierArr.splice(i, 1)
                    }
                }
            }    
        }

        class Person {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.energy = 100;
                this.directions = [
                    [this.x - 1, this.y - 1],
                    [this.x, this.y - 1],
                    [this.x + 1, this.y - 1],
                    [this.x - 1, this.y],
                    [this.x + 1, this.y],
                    [this.x - 1, this.y + 1],
                    [this.x, this.y + 1],
                    [this.x + 1, this.y + 1]
                ];
            }
            getNewCordinates(){
                    this.directions = [
                    [this.x - 1, this.y - 1],
                    [this.x, this.y - 1],
                    [this.x + 1, this.y - 1],
                    [this.x - 1, this.y],
                    [this.x + 1, this.y],
                    [this.x - 1, this.y + 1],
                    [this.x, this.y + 1],
                    [this.x + 1, this.y + 1]
                ];
            }
            chooseCell(char) {
              this.getNewCordinates();
                let result = [];
        
                for (let i = 0; i < this.directions.length; i++) {
                    let x = this.directions[i][0];
                    let y = this.directions[i][1];
        
                    if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                        if (matrix[y][x] == char) {
                            result.push(this.directions[i]);
                        }
                    }
        
                }
        
                return result;
            }
            mul() {
                let found = this.chooseCell(0);
                let exact = random(found);
                if (exact && this.multiplay > 8) {
                    let x = exact[0];
                    let y = exact[1];
                    matrix[y][x] = 2;
                    let eater = new PredatorDier(x, y);
                    predatorDierArr.push(eater);
                    this.multiplay = 20
                }
            }
             
            eat() {
                
                let found = this.chooseCell(1,2,3,4);
                let exact = random(found);
                if (exact && this.multiplay > 40) {
                    let x = exact[0];
                    let y = exact[1];
                    for (let i = 0; i < grassArr.length; i++) {
                        if (grassArr[i].x == x && grassArr[i].y == y) {
                            grassArr.splice(i, 1);
                        }
                    }
                    for (let i = 0; i < grassEaterArr.length; i++) {
                        if( grassEaterArr[i].x == x && grassEaterArr[i].y == y ){
                            grassEaterArr.splice(i, 1)
                        }
                    }
                    for (let i = 0; i < EaterDierArr.length; i++) {
                        if( EaterDierArr[i].x == x && EaterDierArr[i].y == y ){
                            EaterDierArr.splice(i, 1)
                        }
                    }
                    for (let i = 0; i < predatorDierArr.length; i++) {
                        if( predatorDierArr[i].x == x && predatorDierArr[i].y == y ){
                            predatorDierArr.splice(i, 1)
                        }
                    }
                   this.multiplay +=2
                    matrix[y][x] = 5;
                    matrix[this.y][this.x] = 0
                    this.x = x;
                    this.y = y;
                    if(this.multiplay > 30){
                        this.mul()
                    }   
                }
                else{
                    this.move();
                }
            }
             
            move(){
                let found = this.chooseCell(0);
                let exact = random(found);
                if(exact){
                    let x = exact[0];
                    let y = exact[1];
                    matrix[y][x] = 5;
                    matrix[this.y][this.x] = 0
                    this.x = x;
                    this.y = y;
                    this.multiplay--;
                    if(this.multiplay < 0){
                        this.die();
                    }
                }
                else{
                    this.multiplay--;
                    if(this.multiplay < 0){
                        this.die();
                    }
                }
            }
            die(){
                for (let i = 0; i < personArr.length; i++) {
                    if (personArr[i].x == this.x && personArr[i].y == this.y) {
                        personArr.splice(i, 1);
                    }
                };
                matrix[this.y][this.x] = 0
            }
        }


       
    