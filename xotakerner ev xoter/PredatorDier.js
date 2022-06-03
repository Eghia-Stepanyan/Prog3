class PredatorDier extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 8;
    }
   getNewCoordinates() {
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
   chooseCell(ch) {
       this.getNewCoordinates();
       return super.chooseCell(character);
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