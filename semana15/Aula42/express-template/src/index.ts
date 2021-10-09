import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'
//Michael Soto
const app = express()

app.use(express.json());
app.use(cors());

//Endpoint 1
app.get('/countries/all', (req:Request, res:Response)=> {
  const result = countries.map(country => ({
    id: country.id,
    name: country.name
  }))
  res
    .status(200)
    .send(result)
})

//Endpoint2
app.get('/countries/:id', (req:Request, res:Response)=> {
  const result: country | undefined = countries.find(
    country => country.id === Number(req.params.id)
 )
 if (result) {
    res.status(200).send(result)
 } else {
    res.status(404).send("Not found")
 }
})

//Endpoint3
app.get('/countries/search', (req:Request, res:Response)=> {
const result: country[] = countries

if(req.query.name){
result = result.filter

}


})



app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
});

