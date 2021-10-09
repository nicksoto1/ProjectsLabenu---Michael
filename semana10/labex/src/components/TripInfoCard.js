import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TripInfoItem from './TripInfoItem';





const TripInfo = () => {
  return(
    <Card>
  <CardContent>
    <Typography  variant={'h5'} gutterBottom>
 Informações da viagem
    </Typography>
    <TripInfoItem infoName={'Nome'} info={'Viagem para marte'}/>
    <TripInfoItem infoName={'Planeta'}  info={'Marte'}/>
    <TripInfoItem infoName={'Data'} info={'01/07/2020'} />
    <TripInfoItem infoName={'Descrição'} info={'Viagem maneira pra colonizar marte'} />
    <TripInfoItem infoName={'Duração em dias'}  info={228}/>

  </CardContent>  
</Card>
  )
}


export default CandidatesList