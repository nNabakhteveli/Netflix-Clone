import React from 'react';

export class FourthPage extends React.Component {
  render() {
    return (
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
}