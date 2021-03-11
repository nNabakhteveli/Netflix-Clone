import React from 'react';
import './App.css';
import { FirstPage } from './modules/first-page/firstPage';
import { SecondPage } from './modules/second-page/secondPage';
import { ThirdPage } from './modules/third-page/thirdPage';
import { FourthPage } from './modules/fourth-page/fourthPage';
import { Footer } from './modules/footer/footer';


export class App extends React.Component {
  render() {
    if(this.props.lang === 'eng'){
      return (
        <div>
          <FirstPage />
          <SecondPage />
          <ThirdPage />
          <FourthPage />
          <Footer />
        </div>
      );
    }
  return 0;
  }
}