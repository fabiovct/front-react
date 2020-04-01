import React from 'react';
import logo from './logo.svg';
//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Routes from './routes';
import Header from './components/Header';
import {connect} from 'react-redux';
import store from './store';
import {BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Header/>
      <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;


 /*export default connect(state => ({
  user: state.users
}))(App);*/
