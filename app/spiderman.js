class Spiderman {
  constructor(nombre, edad, actor, peliculas, estudio) {
    this.name = nombre;
    this.age = edad;
    this.actor = actor;
    this.movies = peliculas;
    this.studio = estudio;
  }
  getInfo() {
    return `Hola, soy ${this.actor} de ${this.studio} estudio y estas viendo Disney Channel`;
  }
}

module.exports = Spiderman;
