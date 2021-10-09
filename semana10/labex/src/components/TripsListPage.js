import React from "react";
import PageTitle from "../components/PageTitle";
import {
  Button,
  List,
  ListItem,
  ListItemText, 
  ListItemLink,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { TripsListPageContainer } from "./styles";

const TripsLIstPage = () => {
  return (
    <TripsListPageContainer>
      <PageTitle title={"LIsta de Viagens"} />
      <Link to={"/viagens/criar"}>
        <Button variant={"contained"} color={"primary"}>
          Criar Viagem
        </Button>
      </Link>

      <List component="nav" aria-label="secondary mailbox folders">
        <Link to={"/viagens/detalhe"}>
          <ListItem button>
            <ListItemText primary="Viagem para marte" />
          </ListItem>
        </Link>

        <Link to={"/viagens/detalhe"}>
          <ListItem button>
            <ListItemText primary="Viagem para a lua" />
          </ListItem>
        </Link>
      </List>
    </TripsListPageContainer>
  );
};

export default TripsLIstPage;
