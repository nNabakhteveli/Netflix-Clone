import './App.css';

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
    </div>
  );
}

export default App;