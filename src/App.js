import React from 'react';
import Router from './components/Router';
import {BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav';

class App extends React.Component {
  render(){
    console.log(this.props);
    return (
      <BrowserRouter>
      <div>
        {/* <Login /> */}
        <Nav />
        <Router />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;