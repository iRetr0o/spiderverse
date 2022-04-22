const Spiderman = require("./../app/spiderman");

describe("Test de Spiderman Class", () => {
  test("1 Creando un objeto de spiderman", () => {
    // const andrewGarfield = new Spiderman(
    //   "Spiderman Sony",
    //   31,
    //   "Andrew Garfield",
    //   2,
    //   "Sony"
    // );

    const tomHolland = new Spiderman(
      "Spiderman Marvel",
      25,
      "Tom Holland",
      5,
      "Marvel"
    );
    // expect(andrewGarfield.name).toBe("Spiderman Sony");
    // expect(andrewGarfield.age).toBe(31);
    // expect(andrewGarfield.actor).toBe("Andrew Garfield");
    // expect(andrewGarfield.movies).toBe(2);
    // expect(andrewGarfield.studio).toBe("Sony");

    expect(tomHolland.name).toBe("Spiderman Marvel");
    expect(tomHolland.age).toBe(25);
    expect(tomHolland.actor).toBe("Tom Holland");
    expect(tomHolland.movies).toBe(5);
    expect(tomHolland.studio).toBe("Marvel");
    expect(tomHolland.getInfo()).toBe(
      "Hola, soy Tom Holland de Marvel estudio y estas viendo Disney Channel"
    );
  });
});
