class Fraccion {
    constructor(numerador, denominador) {
        if (denominador === 0) {
            throw new Error("El denominador no puede ser cero.");
        }
        this.numerador = numerador;
        this.denominador = denominador;
        this.simplificar();
    }

    // Método para simplificar la fracción
    simplificar() {
        const mcd = this.mcd(this.numerador, this.denominador);
        this.numerador /= mcd;
        this.denominador /= mcd;
    }

    // Método para calcular el máximo común divisor
    mcd(a, b) {
        if (b === 0) {
            return a;
        }
        return this.mcd(b, a % b);
    }

    // Método para sumar otra fracción
    sumar(otra) {
        const nuevoNumerador = this.numerador * otra.denominador + otra.numerador * this.denominador;
        const nuevoDenominador = this.denominador * otra.denominador;
        return new Fraccion(nuevoNumerador, nuevoDenominador);
    }

    // Método para restar otra fracción
    restar(otra) {
        const nuevoNumerador = this.numerador * otra.denominador - otra.numerador * this.denominador;
        const nuevoDenominador = this.denominador * otra.denominador;
        return new Fraccion(nuevoNumerador, nuevoDenominador);
    }

    // Método para multiplicar otra fracción
    multiplicar(otra) {
        const nuevoNumerador = this.numerador * otra.numerador;
        const nuevoDenominador = this.denominador * otra.denominador;
        return new Fraccion(nuevoNumerador, nuevoDenominador);
    }

    // Método para dividir por otra fracción
    dividir(otra) {
        if (otra.numerador === 0) {
            throw new Error("No se puede dividir por una fracción con numerador cero.");
        }
        const nuevoNumerador = this.numerador * otra.denominador;
        const nuevoDenominador = this.denominador * otra.numerador;
        return new Fraccion(nuevoNumerador, nuevoDenominador);
    }

    // Método para representar la fracción como una cadena
    toString() {
        return `${this.numerador}/${this.denominador}`;
    }
}

    //Creando los objetos fracciones

const fraccion1 = new Fraccion(3,4);   
const fraccion2 = new Fraccion(2,5);


    // Instanciando Metodos


    // La suma

const resultadoSuma = fraccion1.sumar(fraccion2);
console.log (`La suma de ${fraccion1} + ${fraccion2} es:  ${resultadoSuma.toString()}`);

    // La resta

const resultadoResta = fraccion1.restar(fraccion2);
console.log (`La resta de ${fraccion1} - ${fraccion2} es:  ${resultadoResta.toString()}`);
