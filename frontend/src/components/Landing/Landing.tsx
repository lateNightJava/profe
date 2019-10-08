import * as React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../Search';
import * as landingPhoto from './lex-aliviado-unsplash.jpg';
import './Landing.scss';

class Landing extends React.Component<{}, {}> {
  render() {
    return (
      <div
        className="landing"
        data-test="landingComponent"
      >
        <section
          className="landing-banner"
        >
          <div
            className="landing-search-wrapper"
          >
            <h2>Find, Book, and Rate Instructors</h2>
            <Search />
          </div>
          <a
            className="landing-banner-credit"
            href="https://unsplash.com/@lexaliviado?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            target="_blank"
            rel="noopener noreferrer"
            title="Download free do whatever you want high-resolution photos from Lex Aliviado"
          >
            <span style={{ display: "inline-block", padding: "2px 3px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  height: "12px",
                  width: "auto",
                  position: "relative",
                  verticalAlign: "middle",
                  top: "-2px",
                  fill: "white",
                }}
                viewBox="0 0 32 32"
              >
                <title>unsplash-logo</title>
                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
              </svg>
            </span>
            <span style={{ display: "inline-block", padding: "2px 3px" }}>
              Lex Aliviado
            </span>
          </a>
        </section>
        <section className="landing-description">
          <h3>For Students:</h3>
          <ul>
            <li>Find an instructor in your area!</li>
            <li>Book a lesson!</li>
            <li>Rate your instructor!</li>
          </ul>
        </section>
        <Link
          className="landing-join-now-btn"
          to="/signup"
        >
          Join Now
        </Link>
        <section className="landing-description">
          <h3>For Instructors:</h3>
          <ul>
            <li>Display your availability!</li>
            <li>Book lessons with students!</li>
            <li>Get rated and watch your studio grow!</li>
          </ul>
        </section>
        <Link
          className="landing-join-now-btn"
          to="/signup"
        >
          Join Now
        </Link>
      </div>
    );
  }
}

export {
  Landing,
};

// Photo by Lex Aliviado on Unsplash
