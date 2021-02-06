import './App.css';

function SecPg(){
  return(
    <div className="second-page">
      <hr className="sec-page-first-hr" />
        <p className="secpg-first-p">Enjoy on your TV.</p>
        <p className="secpg-sec-p">Watch on Smart TVs, Playstation, Xbox,<br />
        Chromecast, Apple TV, Blu-ray players,<br /> <span className='and-more'>and more.</span>
        </p>
        <img className="tv-img" src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' />
        {/* <img className="tv-background-img" src='https://i.pinimg.com/originals/95/09/a4/9509a4614438d6016db11f1b71d00591.jpg' /> */}
      <hr className="sec-page-sec-hr"/>
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
      <SecPg />
    </div>
  );
}

export default App;