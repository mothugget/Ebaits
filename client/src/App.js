import { useEffect, useContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import Content from './components/Content';
import Overlay from './components/Overlay';
import { ContentContext } from './contentProvider';
import { OverlayContext } from './overlayProvider';

import './App.css';
import apiService from './apiService';

function App() {
  const { user, loading, isAuthenticated } = useAuth0();
  const { setCurrUser } = useContext(ContentContext);
  const { setOverlay } = useContext(OverlayContext);

  useEffect(() => {
    isAuthenticated ?
      apiService.getProfileSignin(user.name)
        .then(res => {
          if (res.error === 'No such user') {
            setOverlay('Register');
            setCurrUser({ email: user.name })
          } else {
            setCurrUser(res)
          }
        })
      : setCurrUser({})
  }, [isAuthenticated, setCurrUser, setOverlay])

  return (
    loading ?
      <div>loading....</div>
      : <div className="App">
        <Content />
        <Overlay />
      </div>
  );
}

export default App;
