import axios from 'axios'
import { json } from 'express'
import { address } from '../types/address'

const URL = 'https://viacep.com.br/ws'


export async  function getAddressByCep(cep:string): Promise<address> {

  try {

    const result = await axios.get(`${URL} / ${cep}/ json `)

const myAddress: address = {
name: result.data.logradouro,
neighborhood: result.data.bairro,
city: result.data.localidade,
state:result.data.uf
}
return myAddress
  } catch (error) {
    throw new Error("error.message");
    
  }
  
}