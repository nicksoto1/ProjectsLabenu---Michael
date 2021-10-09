//Exercicio 1

export interface  Character {
name : string,
life : number,
defense : number,
strong :  number
}

export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
    input.life === undefined || 
    input.defense === undefined ||
    input.strong === undefined 
  ) {
    return false;
  }

  if (input.life <=0 || input.strong <=0 || input.defense <=0) {
    return false;
  }
  return true;
};