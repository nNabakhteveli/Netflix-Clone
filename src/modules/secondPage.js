import React from 'react';

export class SecondPage extends React.Component {
  render() {
    return (
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
}