import React from 'react';
import './App.css';
import { SecondPage } from './modules/secondPage';
import { ThirdPage } from './modules/thirdPage';
import { FourthPage } from './modules/fourthPage';
import { Footer } from './modules/footer';


export class App extends React.Component{
  render(){
    if(this.props.lang === 'eng'){
      return (
        <div className="App">
          <header className="App-header">
            <img src="https://i.ibb.co/mvqhz8N/netflix-logo-png-2584.png" className="netflix-logo" alt="Netflix Logo"/>
            <button className='sign-in-button'>Sign in</button>
            <p className="first-P">Unlimited movies, TV</p>
            <p className="sec-P">shows, and more.</p>
            <p className="third-P">Watch anywhere. Cancel anytime.</p>
            <p className="fourth-P">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="div1">
              <input placeholder=" Your Email Address" className="email-input"/>
              <button className="button-within-input">TRY 30 DAYS FREE</button>
              <p className="fifth-P">Only new members are eligible for this offer.</p>
            </div>
          </header>
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