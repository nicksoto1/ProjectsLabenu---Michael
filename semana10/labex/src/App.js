import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from './components/HomePage'
import {ListTripsPage} from './components/ListTripsPage';
import FormPage from './components/FormPage';

// import Entrada from './components/Entrada/Entrada'
// import {Layout} from './components/Layout/Layout'

import LoginPage from './components/LoginPage'
import AdmPage from './components/AdmPage';
import AdmCreateTripPage from './components/AdmCreateTripPage';
import AdmDetailsPage from './components/AdmDetailsPage'
import AdmTripsPage from './components/AdmTripsPage';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
     {/* <LoginPage /> */}
      <HomePage />
        {/* <Layout /> */}
     

{/* <Entrada /> */}


<BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/list-trips">
          <ListTripsPage/>
        </Route>
        <Route exact path="/form/:id">
          <FormPage/>
          </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/adm">
          <AdmPage />
        </Route>
        <Route exact path="/adm-createtrip">
          <AdmCreateTripPage />
        </Route>
        <Route exact path="/adm-details/:id">
          <AdmDetailsPage />
        </Route>
        <Route exact path="/adm-trip">
          <AdmTripsPage />
        </Route>
      </Switch>
    </BrowserRouter>



    </div>
  );
}

export default App;
