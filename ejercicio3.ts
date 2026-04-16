import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class CajaFuerte {
    private _pin: string;

    constructor() {
        this._pin = "0000";
    }

    set pin(valor: string) {
        if (/^\d{4}$/.test(valor)) {
            this._pin = valor;
        } else {
            throw new Error("Error: el PIN debe tener exactamente 4 digitos");
        }
    }

    get pin(): string {
        return "****";
    }
}

rl.question("Configure su PIN de 4 digitos: ", (dato: string) => {
    let caja = new CajaFuerte();

    try {
        caja.pin = dato;
        console.log("PIN guardado correctamente: " + caja.pin);
    } catch (error: any) {
        console.log(error.message);
    }

    rl.close();
});