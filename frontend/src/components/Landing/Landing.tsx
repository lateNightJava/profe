import * as React from 'react';
import * as landingPhoto from './lex-aliviado-unsplash.jpg';
import './Landing.scss';

class Landing extends React.Component<{}, {}> {
  render() {
    return (
      <div
        className="landing"
        data-test="landingComponent"
      >
        <img src={landingPhoto} />
      </div>
    );
  }
}

export {
  Landing,
};

// Photo by Lex Aliviado on Unsplash
