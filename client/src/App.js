import {useState, useEffect, useContext} from 'react';
import { useAuth0 } from "@auth0/auth0-react"

import Content from './components/Content';
import Overlay from './components/Overlay';
import { ContentContext } from './contentProvider';

import './App.css';
import apiService from './apiService';

function App() {
  const { user, isAuthenticated } = useAuth0();
  const { currUser, setCurrUser } = useContext(ContentContext);

  useEffect(()=> {isAuthenticated?
    apiService.getProfileSignin(user.name)
    :setCurrUser({})},[])
  
  
  return (
    <div className="App">
      <Content />
      <Overlay />
    </div>
  ); 
}

export default App;
