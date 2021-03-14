import React from 'react';
import logo from './logo.svg';

class Copyright extends React.Component {
  render(){
      return (
          <div class='copyright'>
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
              </header>
          </div>
      );
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
          <a href='https://help.netflix.com/en/contactus' className='questions' target='_blank' style={{textDecoration:'none', color: 'grey'}}><p>Question? Contact us.</p></a>
        <div>
        </div>
        <div className="firstFour">
          <a href='https://help.netflix.com/en/node/412' style={{textDecoration:'none', color: 'grey'}}><p>FAQ</p></a>
          <a href='https://ir.netflix.net/ir-overview/profile/default.aspx' style={{textDecoration:'none', color: 'grey'}}><p>Investor Relations</p></a>
          <a href='https://help.netflix.com/legal/privacy' style={{textDecoration:'none', color: 'grey'}}><p>Privacy</p></a>
          <a href='https://fast.com/' style={{textDecoration:'none', color: 'grey'}}><p>Speed Test</p></a>
        </div>
  
        <div className="secondFour">
          <a href='https://help.netflix.com/en/' style={{textDecoration:'none', color: 'grey'}}><p>Help Center</p></a>
          <a href='https://jobs.netflix.com/' style={{textDecoration:'none', color: 'grey'}}><p>Jobs</p></a>
          <a href='https://help.netflix.com/legal/privacy#cookies' style={{textDecoration:'none', color: 'grey'}}><p>Cookie Preferences</p></a>
          <a href='https://help.netflix.com/legal/notices' style={{textDecoration:'none', color: 'grey'}}><p>Legal Notices</p></a>
        </div>
  
        <div className="thirdFour">
          <a href='https://www.netflix.com/ge/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount' style={{textDecoration:'none', color: 'grey'}} ><p>Account</p></a>
          <a href='https://devices.netflix.com/en/' style={{textDecoration:'none', color: 'grey'}}><p>Ways to Watch</p></a>
          <a href='https://help.netflix.com/legal/corpinfo' style={{textDecoration:'none', color: 'grey'}}><p>Coprorate Information</p></a>
          <a href='https://www.netflix.com/ge/browse/genre/839338' style={{textDecoration:'none', color: 'grey'}}><p>Netflix Originals</p></a>
        </div>
  
        <div className="fourthFour">
          <a href='https://media.netflix.com/en/' style={{textDecoration:'none', color: 'grey'}}><p>Media Center</p></a>
          <a href='https://help.netflix.com/legal/termsofuse' style={{textDecoration:'none', color: 'grey'}}><p>Terms of Use</p></a>
          <a href='https://help.netflix.com/en/contactus' style={{textDecoration:'none', color: 'grey'}}><p>Contact Us</p></a>
        </div>
          
        <div>
          <select className='language'>
            <option selected value value='eng'>English</option>
            <option value='geo'>ქართული</option>
            <option value='rus'>русский</option>
          </select>
        </div>

        <Copyright />
      </div>
    );
  }
}