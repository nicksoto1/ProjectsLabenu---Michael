//Exercicio 3
import { validateCharacter, Character } from "../src/Character"

//a
export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strong > defender.defense) {
    defender.life -= attacker.strong - defender.defense;
  }
};

//b
export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strong > defender.defense) {
    defender.life -= attacker.strong - defender.defense;
  }
};