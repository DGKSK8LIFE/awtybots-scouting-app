import React from "react";
import NavBar from "../components/navbar";
// import Card from '../components/card';
import axios from 'axios';

const queryApiThenMarshall = () => {
  return axios.get('http://localhost:8080/api/read')
}

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      {/* <Card obj={}/> */}
    </React.Fragment>
  );
}

export default Home;
