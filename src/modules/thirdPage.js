import React from 'react';

export class ThirdPage extends React.Component {
  render() {
    return (
      <div className="third-page">
        <p className="third-first-p">Download your shows</p><br />
        <span className='span1'>to watch offline.</span>
        <p className="third-sec-p">Save your favorites easily and always have</p><br />
        <span className='span2'>something to watch.</span>
             {/* <pre style={{color: 'white'}} className="third-first-p"> {`
              Download your shows
            to watch offline.
              `
              `
              Save your favorites easily and always have
              something to watch.
              `}
              </pre> */}
        <img className="mobile-img" src='https://i.ibb.co/55t87BV/for-mobile.jpg' alt='mobile' />
        <hr className="third-page-sec-hr" />
      </div>
    );
  }
}