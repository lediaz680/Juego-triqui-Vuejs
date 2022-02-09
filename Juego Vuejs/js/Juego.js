class Juego {

    constructor() {
        this.inProgress = true;
        this.winner = null; // O o X
        this.currentTurn = Juego.O; // O o X
        this.movesMade = 0;
        this.cuadrados = new Array(9).fill().map(c => new Cuadrado());
    }

    deshacerMovimiento() {
        if (this.currentTurn === 'O') {
            this.currentTurn = 'X'
        } else {
            this.currentTurn = 'O'
        }
    }
    //REALIZAR MOVIDA
    makeMove(i) {
        if (this.inProgress && !this.cuadrados[i].value) {
            this.cuadrados[i].value = this.currentTurn;
           
            this.movesMade++;
            this.checkForWinner();
            this.currentTurn = (this.currentTurn === Juego.O) ? Juego.X : Juego.O;
        }
    }
    //CHEQUEAR GANADOR
    checkForWinner() {
        const ganadorCombinacioes = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]

        ];

        ganadorCombinacioes.forEach((gc) => {
            const [a, b, c] = gc;
            const cuadA = this.cuadrados[a];
            const cuadB = this.cuadrados[b];
            const cuadC = this.cuadrados[c];

            if (cuadA.value && cuadA.value === cuadB.value && cuadA.value === cuadC.value) {
                this.inProgress = false;
                this.winner = cuadA.value; //O o X
                cuadA.isHighLighted = cuadB.isHighLighted = cuadC.isHighLighted = true;
            }
        });

        //check 
        if (this.movesMade === this.cuadrados.length) {
            this.inProgress = false; //inPorgrees false y winner null
        }
    }
}

Juego.O = "O";
Juego.X = 'X';