class EaterDier extends LivingCreature{
    constructor(x, y) {
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