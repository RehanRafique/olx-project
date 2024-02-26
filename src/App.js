import Weather from './view/weatherApp';
import { useEffect, useState } from 'react';
import Header from './components/header';
import './App.css';
import Router from './Config/router';
// import { Router } from './config/router';
import Dashboard from './view/dashboard';
// import Router from './config/router';
import Footer from './components/footer';
import Detail from './view/detail';
import Navbar from './components/navbar';
import { Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/index'
import { PersistGate } from 'redux-persist/integration/react'
function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;


