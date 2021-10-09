import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import  {List} from '.styles'
import CandidateItem from './CandidateItem'


const CandidatesList = () => {
  return <Card>
  <CardContent>
    <Typography  variant={'h5'} gutterBottom>
 Lista de Candidatos
    </Typography>
    <List dense={true}>
<CandidateItem />
<CandidateItem />
<CandidateItem />
<CandidateItem />
<CandidateItem />
            </List>
  </CardContent>
</Card>

}


export default CandidatesList