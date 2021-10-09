//Exercicio 2
import { validateCharacter, Character } from "../src/Character"

//a
describe("Testing validateCharacter", () => {

  test("Should return false for empty name", () => {

    // const validateMock = jest.fn(
    //   (input: any) =>{
    //      return { name: " ", errors: [] } });
    //     }
    //     );

    try {
      const input = {
        name: "",
        life: 500,
        strong: 300,
        defense: 200
      }

      const output = validateCharacter(input);
    } catch (error) {
      expect(error.message).toEqual("Error Message");
    }
  });
})

//b


  test("Should return false for life 0", () => {

    try {
      const input = {
        name: "Rogerio",
        life: 0,
        strong: 300,
        defense: 200
      }

      const output = validateCharacter(input);
    } catch (error) {
      expect(error.message).toEqual("Error Message");
    }
  });


//c


  test("Should return false for strong 0", () => {

    try {
      const input = {
        name: "Kleber",
        life: 500,
        strong: 0,
        defense: 200
      }

      const output = validateCharacter(input);
    } catch (error) {
      expect(error.message).toEqual("Error Message");
    }
  });


//d


  test("Should return false for defense 0", () => {



    try {
      const input = {
        name: "Tesla",
        life: 500,
        strong: 300,
        defense: 0
      }

      const output = validateCharacter(input);
    } catch (error) {
      expect(error.message).toEqual("Error Message");
    }
  });


//e


  test("Should return a negative number for strong", () => {



    try {
      const input = {
        name: "Matheus",
        life: 500,
        strong: -100,
        defense: 0
      }

      const output = validateCharacter(input);
    } catch (error) {
      expect(error.message).toEqual("Error Message");
    }
  });


//f 


  test("Should return true for all valid inputs", () => {



    try {
      const input = {
        name: "Joao",
        life: 100,
        strong: 100,
        defense: 100
      }

      const output = validateCharacter(input);
    } catch (error) {
      expect(error.message).toEqual("Error Message");
    }
  });
