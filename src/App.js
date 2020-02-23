import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Counter from './Counter';
import store from './store/';
class App extends Component{
 
  render(){  
    return (
    <div className="App">
      <Counter store={store}/>
    </div>
  );
}
}

export default App;
