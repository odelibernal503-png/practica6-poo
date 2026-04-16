import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class TanqueDiesel {
    private _nivel: number;

    constructor() {
        this._nivel = 0;
    }

    set nivel(valor: number) {
        if (valor < 0 || valor > 100) {
            console.log("Error: el nivel debe estar entre 0 y 100");
        } else {
            this._nivel = valor;
        }
    }

    get nivel(): string {
        return this._nivel + "%";
    }

    get estadoReserva(): string {
        if (this._nivel < 15) {
            return "ALERTA: NIVEL CRITICO";
        } else {
            return "Nivel Normal";
        }
    }
}

rl.question("Ingrese el nivel de diesel: ", (dato: string) => {
    let tanque = new TanqueDiesel();
    tanque.nivel = parseInt(dato);

    console.log("Nivel actual: " + tanque.nivel);
    console.log("Estado: " + tanque.estadoReserva);
    rl.close();
});