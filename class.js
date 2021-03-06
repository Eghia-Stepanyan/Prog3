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
