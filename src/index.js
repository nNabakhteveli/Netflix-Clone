import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

// class some extends React.Component {
  // const language = document.getElementsByClassName('language');
//   render(){
  //     if(language.value === 'eng'){
    //       this.props.lang ='eng';
    //     }
    //     return 0;
    //   }
    // }
    
ReactDOM.render(
  <React.StrictMode>
    <App lang='eng'/>
  </React.StrictMode>,
  document.getElementById('root')
);