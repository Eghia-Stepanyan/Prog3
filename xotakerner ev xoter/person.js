class Person extends LivingCreature{
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