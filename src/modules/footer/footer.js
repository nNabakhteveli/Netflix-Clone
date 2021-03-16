import React from 'react';
import logo from './logo.svg';

class Copyright extends React.Component {
  render(){
    return (
      <div class='copyright'>
        <div className="copy-text">
          <span>Made by Nika Nabakhteveli,</span><br />
          <span>By powers of:</span>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
          <a href='https://help.netflix.com/en/contactus' className='questions' target='_blank'><p>Question? Contact us.</p></a>
        <div>
        </div>
        <div className="firstFour">
          <a className='list-item' href='https://help.netflix.com/en/node/412'><p>FAQ</p></a>
          <a className='list-item' href='https://ir.netflix.net/ir-overview/profile/default.aspx'><p>Investor Relations</p></a>
          <a className='list-item' href='https://help.netflix.com/legal/privacy'><p>Privacy</p></a>
          <a className='list-item' href='https://fast.com/'><p>Speed Test</p></a>
        </div>
  
        <div className="secondFour">
          <a className='list-item' href='https://help.netflix.com/en/'><p>Help Center</p></a>
          <a className='list-item' href='https://jobs.netflix.com/'><p>Jobs</p></a>
          <a className='list-item' href='https://help.netflix.com/legal/privacy#cookies'><p>Cookie Preferences</p></a>
          <a className='list-item' href='https://help.netflix.com/legal/notices'><p>Legal Notices</p></a>
        </div>
  
        <div className="thirdFour">
          <a className='list-item' href='https://www.netflix.com/ge/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount'><p>Account</p></a>
          <a className='list-item' href='https://devices.netflix.com/en/'><p>Ways to Watch</p></a>
          <a className='list-item' href='https://help.netflix.com/legal/corpinfo'><p>Coprorate Information</p></a>
          <a className='list-item' href='https://www.netflix.com/ge/browse/genre/839338'><p>Netflix Originals</p></a>
        </div>
  
        <div className="fourthFour">
          <a className='list-item' href='https://media.netflix.com/en/'><p>Media Center</p></a>
          <a className='list-item' href='https://help.netflix.com/legal/termsofuse'><p>Terms of Use</p></a>
          <a className='list-item' href='https://help.netflix.com/en/contactus'><p>Contact Us</p></a>
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