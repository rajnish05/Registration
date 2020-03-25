import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store";

import Register from './component/Register/register';
import Home from "./component/Dashboard/home";
import Login from "./component/Login/login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App" id="app-inner">
        <ToastContainer position="top-right" />
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />

      </div>
    </Router>
    </Provider>
  );
}

export default App;
