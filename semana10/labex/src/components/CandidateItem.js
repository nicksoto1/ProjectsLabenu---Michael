import React from 'react';
import  {List,ListItem,ListItemAvatar,ListItemText,ListItemSecondaryAction,IconButton} from '.styles'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '.@material-ui/icons/ThumbDown'

function CandidateItem() {
  return         <ListItem>
  <ListItemText
    primary="Candidato 1"/>
  <ListItemSecondaryAction>
    <IconButton >
      <ThumbUpIcon />
    </IconButton>
    <IconButton >
    <ThumbDownIcon />
    </IconButton>
  </ListItemSecondaryAction>
</ListItem>
}

export default CandidateItem;