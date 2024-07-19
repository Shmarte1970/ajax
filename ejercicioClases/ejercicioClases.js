class Animal {
    constructor(nombre, extremidades, ojos, boca, veneno, respiracion) {
      this.nombre = nombre;  
      this.extremidades = extremidades;
      this.ojos = ojos;
      this.boca = boca;
      this.veneno = veneno;
      this.respiracion = respiracion;
    }

    mostrarInfo() {
        console.log(`Este animal se llamma ${this.nombre}.`);
        console.log(`Este animal tiene ${this.extremidades} extremidades.`);
        console.log(`Este animal tiene ${this.ojos} ojos.`);
        console.log(`Este animal tiene una boca de tipo ${this.boca}.`);
        console.log(`¿Este animal es venenoso? ${this.veneno ? 'Sí' : 'No'}.`);
        console.log(`Este animal respira de manera ${this.respiracion}.`);
      }
  
    }
  
  class Mamifero extends Animal {
    constructor(nombre, extremidades, ojos, boca, veneno, respiracion, pelo) {
      super(nombre, extremidades, ojos, boca, veneno, respiracion);
      this.pelo = pelo; // Booleano si el mamífero tiene pelo o no
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`¿Este mamífero tiene pelo? ${this.pelo ? 'Sí' : 'No'}.`);
        console.log(`--------------------------------------------------`);
      }
  
  }
  
  class Pez extends Animal {
    constructor(nombre, extremidades, ojos, boca, veneno, respiracion, tipoAgua) {
      super(nombre, extremidades, ojos, boca, veneno, respiracion);
      this.tipoAgua = tipoAgua; // Tipo de agua en la que vive (dulce o salada)
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`¿Este pez vide en agua ? ${this.tipoAgua}.`);
        console.log(`--------------------------------------------------`);
      }

  }
  
  class Ave extends Animal {
    constructor(nombre, extremidades, ojos, boca, veneno, respiracion, puedeVolar) {
      super(nombre, extremidades, ojos, boca, veneno, respiracion);
      this.puedeVolar = puedeVolar; // Booleano si el ave puede volar o no
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`¿Esta ave puede volar? ${this.puedeVolar ? 'Sí' : 'No'}.`);
        console.log(`--------------------------------------------------`);
      }
  
  }
  
  // Animales
  const mamiferoLobo = new Mamifero('Lobo', 4, 2, 'mamífero', false, 'pulmonar', true);
  mamiferoLobo.mostrarInfo();

  const mamiferoLiebreSaltadora = new Mamifero('Libre Saltadora' ,2, 2, 'mamífero', false, 'pulmonar', true);
  mamiferoLiebreSaltadora.mostrarInfo();
  
  const pezPirana = new Pez('Pirana', 0, 2, 'pez', false, 'branquial', 'dulce');
  pezPirana.mostrarInfo();
  
  const pezPiedra = new Pez('Pez Piedra', 0, 2, 'pez', true, 'branquial', 'salada');
  pezPiedra.mostrarInfo();

  const aveAguilaCalva = new Ave('Aguila Clava ' ,2, 2, 'pico', false, 'pulmonar', true);
  aveAguilaCalva.mostrarInfo();
  
  const avePinguino = new Ave('Pinguino' ,2, 2, 'pico', false, 'pulmonar', false);
  avePinguino.mostrarInfo();