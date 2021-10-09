import * as bcrypt from "bcryptjs";

export class HashManager {
private cost: number  = Number(process.env.BCRYPT_COST)

  // cost: number = 12;
  private cost: number = Number(process.env.BCRYPT_COST)

  public hash: (text: string) => Promise<string> = async (
    plainText: string
  ): Promise<string> => {
    const rounds = Number( this.cost)
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(plainText, salt);
  };

  //Posso tirar tambem a tipagem:
  // : (plainText: string, cypherText: string) => Promise<boolean>
  public compare = async (
    plainText: string,
    cypherText: string
  ): Promise<boolean> => {
    return bcrypt.compare(plainText, cypherText);
  };
}

class Account {
  public name?: string  // variavel -> propriedade
  public age?: number
  public balance: number = 0
  public statement: any

  public printStatement = ()=> {     // função -> metodo
    for (let each of this.statement) {
      console.log(each)
    }
  }
}


const account: Account = new  Account ()  // objeto -> instancia

// export const hash = async (plainText: string): Promise<string> => {
//   const rounds = Number(process.env.BCRYPT_COST);
//   const salt = await bcrypt.genSalt(rounds);
//   return bcrypt.hash(plainText, salt)
// }

// export const compare = async (plainText: string, cypherText: string): Promise<boolean> => {
//   return bcrypt.compare(plainText, cypherText)
// }
