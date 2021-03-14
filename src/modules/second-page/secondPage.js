import React from 'react';

export class SecondPage extends React.Component {
  render() {
    return (
      <div className="second-page">
        <hr className="sec-page-first-hr" />
        <div className='pre-div'>
          <pre className="pre-text">
            <span className='pre-text-span'>       Enjoy on your TV.</span>
          {
            ` 
            Watch on Smart TVs, Playstation, Xbox,
            Chromecast, Apple TV, Blu-ray players,
            and more.`}
          </pre>
        </div>
        <div className='tv-div'>
          <video className="video" autoPlay muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" /></video>
          <img className="tv-img" src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' /> 
        </div>
        <hr className="sec-page-sec-hr" />
      </div>
    );
  }
}