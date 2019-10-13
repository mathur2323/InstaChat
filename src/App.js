import React from 'react';
import Router from './components/Router';
import {BrowserRouter} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Nav from './components/Nav';

const history = createBrowserHistory()

class App extends React.Component {
  constructor() {
    super()
  
    this.state = {
      search:false
    }
  }
  
  render(){
    return (
      <BrowserRouter history={history}>
      <div>
        {/* <Login /> */}
        <Nav history={history} />
        <Router />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;