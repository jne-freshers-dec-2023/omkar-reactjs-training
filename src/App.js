import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //using this we can set or store the user creaditials in localstorage i write in app.js folder not in loginhandler
  // coz every time app.js will rerun again and again

  // const storeUserLoggedInInformation = localStorage("isLoggedIn", "1");

  // this code execute every component whenever components loads the state will change
  //  if(storeUserLoggedInInformation=='1'){
  //   setIsLoggedIn(true) // setting the state of loging page.
  //  }


  // i used the useEffect hook for setting the state and it will execute once and after w
  //henever the dependencies updates it will again update so updation is depends on changing dependencies.

  // useEffect(() => {
  //   if (storeUserLoggedInInformation === '1') {
  //     setIsLoggedIn(true); // setting the state of loging page.
  //   }
  // }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
