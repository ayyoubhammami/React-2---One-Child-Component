import React, { Component } from 'react';

import Box from "./components/card";
import tzjopCy from './tzjopCy.jpg';
import yahya from './yahia.jpg';
import amine from './amine.jpg';
import xtkN6gP from './xtkN6gP.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
    

    <h1 style={{textAlign:"center",color:"#444444",fontSize:"42px"}}>Notre équipe</h1>
    <Box imgg={yahya}  nom="Yahya " prenom="Bouhlel" role1="FOUNDER" role2="CEO" />
    <Box imgg={amine}  nom="Amine" prenom="Bouhlel" role1="FOUNDER" role2="COO" />
    <Box imgg={xtkN6gP} nom="Aziza  " prenom="Inoubli" role1="HEAD OF " role2="COMMUNITY" />
    <Box imgg={tzjopCy}  nom="Elyes " prenom="Manai" role1="HEAD OF WEB DEPARTMENT" role2="CHIEF CONTENT OFFICER" />
      

      </div>



    );
  }
}


export default App;
