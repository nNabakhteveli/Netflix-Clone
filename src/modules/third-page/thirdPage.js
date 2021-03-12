import React from 'react';

export class ThirdPage extends React.Component {
  render() {
    return (
      <div className="third-page">
        <div className='full-pre'>
          <pre className="third-page-pre">
            <span className='pre-header'>
              <pre className='pre-header'>
                {
                  `         Download your shows 
         to watch offline.`
                } 
              </pre>
            </span>
            {
              `             Save your favorites easily and always have 
             something to watch.`
            }
          </pre>
        </div>
        <img className="mobile-img" src='https://i.ibb.co/55t87BV/for-mobile.jpg' alt='mobile' />
        <hr className="third-page-hr" />
      </div>
    );
  }
}