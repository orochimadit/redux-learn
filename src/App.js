import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Counter from './Counter';
class App extends Component{
 
  render(){  
    return (
    <div className="App">
      <Counter count="0"/>
    </div>
  );
}
}

export default App;
