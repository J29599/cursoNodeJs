let deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder:  ${this.poder}`;
    }
};

let { nombre: primerNombre, apellido, poder } = deadpool; //Desestructuración de un objeto

console.log(primerNombre, apellido, poder);