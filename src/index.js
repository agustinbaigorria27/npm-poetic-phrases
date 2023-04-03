const poems = [
  "La poesía no quiere adeptos, quiere amantes. 'Federico Garcia Loeca'",
  "Es propio de aquellos con mentes estrechas embestir contra todo aquello que no les cabe en la cabeza. 'Antonio Machado'",
  "El libro es fuerza, es valor, es poder, es alimento, antorcha del pensamiento y manantial del amor. 'Rúben Dario",
  "Requiere coraje crecer y convertirte en lo que realmente eres. 'E.E. Cummings'",
  "No hay hombre más infeliz que aquel para quien la indecisión se ha hecho costumbre. 'Henrich Heine'",
  "Esclavo es aquel que espera por alguien que venga y lo libere. 'Ezra Pound'",
  "Cuando nuestras ideas chocan con la realidad, lo que tiene que ser revisado son las ideas. 'Jorge Luis Borges'",
  "¿Hola? Soy la mamá Universe. Sí, los niños están jugando a espadas. Perdón, jugando con espadas. Están sangrando. ¡Oh, no! Están muertos. No vuelva a llamar. Lo siento, entré en pánico. 'Garnet'"
];

const randomPoems = () => {
  const poem = poems[Math.floor(Math.random() * poems.length)];
  
  return poem; // Miss this one...

  // console.log(poem); For testing on local yes
};

module.exports = randomPoems; //  Defined as a function so no need { randomPoems };