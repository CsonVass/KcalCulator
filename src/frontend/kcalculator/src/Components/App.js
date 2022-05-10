import { ReactKeycloakProvider } from "@react-keycloak/web";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from '../Helpers/PrivateRoute'
import keycloak from "../Keycloak";
import React from 'react'
import Header from './Header'
import Main from './Main'
import Homepage from './Homepage'
import { useState } from 'react'

const App = () => {

  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak}>
        <Header />
        <Routes>
          <Route
            path="/" element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            } />
        </Routes>

      </ReactKeycloakProvider>
    </div>
  )
}

export default App
