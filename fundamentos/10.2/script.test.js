// const { uppercase } = require('./exercise1.js');
// const { getUserName } = require('./exercise2.js');
// const { getRepos } = require('./exercise4.js');

// // const Animals = [
  // //   { name: 'Dorminhoco', age: 1, type: 'Dog' },
  // //   { name: 'Soneca', age: 2, type: 'Dog' },
  // //   { name: 'Preguiça', age: 5, type: 'Cat' },
  // // ];
  
  // // const findAnimalsByType = (type) => (
    // //   new Promise((resolve, reject) => {
      // //     setTimeout(() => {
        // //       const arrayAnimals = Animals.filter((animal) => animal.type === type);
        // //       if (arrayAnimals.length !== 0) {
          // //         return resolve(arrayAnimals);
          // //       }
          
          // //       return reject({ error: 'Não possui esse tipo de animal.' });
          // //     }, 100);
          // //   })
          // // );
          
          // // const getListAnimals = (type) => (
            // //   findAnimalsByType(type).then(list => list)
            // // );
            
            // // describe('Quando o tipo do animal existe', () => {
              // //   test('Retorne a lista de animais', () => {
                // //     expect.assertions(2);
                // //     return getListAnimals('Dog').then((animalsList) => {
                  // //       expect(animalsList[0].name).toBe('Dorminhoco');
                  // //       expect(animalsList[1].name).toBe('Soneca');
                  // //     })
                  // //   });
                  // // });
                  
                  
                  // // describe('Quando o tipo do animal, não existe', () => {
                    // //   test('Retorne a lista de animais', () => {
                      // //     getListAnimals('Lion').catch(error =>
                      // //       expect(error).toEqual({ error: "Não possui esse tipo de animal." })
                      // //     );
                      // //   });
                      // // });
                      
                      // // describe('uppcase tests', () => {
                        // //   it('test if uppercase function exists', () => {
                          // //     expect(typeof uppercase).toBe('function');
                          // //   })
                          // // });
                          
                          // describe('Test if the function getUserName is working', () => {
                            //   it('should return the name whose a parameter ID was used', async () => {
                              //     const result = await getUserName(4);
                              //     expect(result).toBe('Mark');
                              //   });
                              //   it(('should return an error if an incorret ID was used'), async () => {
//     try {
  //       await getUserName(6);
  //     } catch (error) {
    //       expect(error).toEqual(error);
    //     }
    //   });
    // })
    
    // describe('Test if the function getUserName is working', () => {
      //   it(('should return the name whose a parameter ID was used'), () => {
        //     return getUserName(4).then((result) => {
          //       expect(result).toBe('Mark');
          //     })
          //   });
          //   it(('should return an error if an incorret ID was used'), () => {
            //     return getUserName(4).catch((error) => {
              //       expect(error).toBe(error);
              //     })
              //   });
              // })
              
              // describe('Get the repo of those url used as parameter', () => {
                //   it('Should return an array with all the repositories',() => {
                  //     getRepos('https://api.github.com/orgs/tryber/repos').then((result) => {
                    //       expect.assertions(2);
                    //       expect(result).toContain('sd-01-week4-5-project-todo-list');
                    //       expect(result).toContain('sd-01-week4-5-project-meme-generator');
                    //     })
                    //   });
                    // })
                    
                    // beforeEach(() => console.log('1 - beforeEach'));
                    // afterEach(() => console.log('1 - afterEach'));
                    
                    // test('', () => console.log('1 - test'));
                    
                    // describe('Scoped / Nested block', () => {
                      //   beforeEach(() => console.log('2 - beforeEach'));
                      //   afterEach(() => console.log('2 - afterEach'));
                      
                      //   test('', () => console.log('2 - test'));
                      // });
const { getAnimal } = require('./exercise6')

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });
  
  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });
  });