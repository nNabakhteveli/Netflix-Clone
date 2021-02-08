import './App.css';

function Footer(){
  return(
    <div className='footer'>
      <div>
        <a href='https://help.netflix.com/en/contactus' target='_blank' style={{textDecoration:'none', color: 'grey'}}><p className='questions'>Question? Contact us.</p></a>
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
          <option selected value>English</option>
          <option>ქართული</option>
          <option>русский</option>
        </select>
      </div>
    </div>
  );
}


function FourthPage(){
  return(
    <div className="fourth-page">
        <p className="fourth-first-p">Watch everywhere.</p>
        <p className='fourth-sec-p'>Stream unlimited movies and TV shows on</p>
        <p className="fourth-span-1">your phone, tablet, laptop, and TV without</p>
        <span className='fourth-span-2'>something to watch.</span>
        <div>
          <img className="collage-img" src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' alt='mobile' />
        </div>
        <hr className="fourth-page-hr" />
    </div>
  );
}


function ThirdPage(){
  return(
    <div className="third-page">
        <p className="third-first-p">Download your shows</p><br />
        <span className='span1'>to watch offline.</span>
        <p className="third-sec-p">Save your favorites easily and always have</p><br />
        <span className='span2'>something to watch.</span>
        <img className="mobile-img" src='https://i.ibb.co/55t87BV/for-mobile.jpg' alt='mobile' />
        <hr className="third-page-sec-hr" />
    </div>
  );
}


function SecondPage(){
  return(
    <div className="second-page">
      <hr className="sec-page-first-hr" />
        <p className="sec-first-p">Enjoy on your TV.</p>
        <p className="sec-sec-p">Watch on Smart TVs, Playstation, Xbox,<br />
        Chromecast, Apple TV, Blu-ray players,<br /> <span className='and-more'>and more.</span>
        </p>
        <img className="tv-background-img" src='https://i.ibb.co/crqPKQP/tv-background-pic.jpg' /><hr className="sec-page-sec-hr"/>
        <img className="tv-img" src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' />
    </div>
  );
}

function App() {
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

export default App;