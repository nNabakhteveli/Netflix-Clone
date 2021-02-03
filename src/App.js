import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="first-P">Unlimited movies, TV</p>
        <p className="sec-P">shows, and more.</p>
        <p className="third-P">Watch anywhere. Cancel anytime.</p>
        <p className="fourth-P">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="div1">
          <input placeholder=" Your Email Address" className="email-input"/>
          <button className="button-within-input">TRY 30 DAYS FREE</button>
        </div>     
      </header>
    </div>
  );
}

export default App;