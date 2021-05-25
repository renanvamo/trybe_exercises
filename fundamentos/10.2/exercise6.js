const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    const animalSelected = Animals.find((animal) => name === animal.name);
    if (animalSelected) {
      return resolve(animalSelected);
    }
    return reject('Nenhum animal com esse nome!');
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name)
    .then(animal => animal);
};
// ---------------------

module.exports = {
  getAnimal,
}