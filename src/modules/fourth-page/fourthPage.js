import React from 'react';

export class FourthPage extends React.Component {
  render() {
    return (
      <div className="fourth-page">
        <div className='pre-div'>
          <pre className='pre-header'>
            {
              `Watch everywhere.
              `
            }
            <pre className='pre-text'>
              {
              ` Steam unlimited movies and TV shows  
 on your phone, tablet, laptop, and TV without
 paying more.`
              }
            </pre>
          </pre>
        </div>
        <div>
          <img className="collage-img" src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' alt='mobile' />
        </div>
        <hr className="fourth-page-hr" />
      </div>
    );
  }
}