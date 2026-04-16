import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Termostato {
    private _temperatura: number;

    constructor() {
        this._temperatura = 18;
    }

    set temperatura(valor: number) {
        if (valor < 18) {
            console.log("Aviso: temperatura muy baja, se ajusto automaticamente a 18°C");
            this._temperatura = 18;
        } else if (valor > 25) {
            console.log("Aviso: temperatura muy alta, se ajusto automaticamente a 25°C");
            this._temperatura = 25;
        } else {
            this._temperatura = valor;
        }
    }

    get temperatura(): string {
        return this._temperatura + "°C";
    }
}

rl.question("Ingrese la temperatura: ", (dato) => {
    let termo = new Termostato();
    termo.temperatura = parseInt(dato);

    console.log("Temperatura final: " + termo.temperatura);
    rl.close();
});
