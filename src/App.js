import React, { Component } from 'react';
import Home from './containers/Home/home'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
      <header >
     <Home/>
      </header>
    </div>
     );
  }
}
 
export default App;