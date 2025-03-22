import React from "react";
import { Navbar } from "../component/navbar"; // Assuming these are in the correct folder
import { Footer } from "../component/footer"; // Adjust the import path if needed
import "../../styles/home.css"


const Home = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar here */}
      
      {/* Hero Section */}
      <section className="hero bg-dark text-white text-center p-5">
        <div className="container">
          <h1 className="display-3">Welcome to StreampireX</h1>
          <p className="lead">
            Discover the future of VR live performances, podcasting, radio, and more. Join us as we redefine live entertainment!
          </p>
          <a href="/signup" className="btn btn-primary btn-lg">
            Get Early Access
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-4">Our Features</h2>
          <div className="row">
            {/* VR-Enhanced Live Events */}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">VR-Enhanced Live Events</h4>
                  <p className="card-text">
                    Immerse yourself in live performances with VR support and connect with your audience like never before.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Customizable Artist Avatars */}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Customizable Artist Avatars</h4>
                  <p className="card-text">
                    Create unique avatars using your selfie and interact with fans in real-time during live performances.
                  </p>
                </div>
              </div>
            </div>

            {/* Monetization for Creators */}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Monetization for Creators</h4>
                  <p className="card-text">
                    Generate revenue from ticketed events, subscriptions, ad revenue, and fan donations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcasting Section */}
      <section className="podcast py-5 bg-light">
        <div className="container text-center">
          <h2 className="display-4 mb-4">Podcasting</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Podcast Hosting</h4>
                  <p className="card-text">
                    Upload and share your podcasts with a global audience. Monetize your content through subscriptions, ads, and donations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Podcast Customization</h4>
                  <p className="card-text">
                    Add your podcast's custom cover art, descriptions, and metadata to attract listeners.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Podcast Analytics</h4>
                  <p className="card-text">
                    Track plays, listener engagement, and revenue generated from your podcast episodes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radio Station Broadcasting Section */}
      <section className="radio-stations py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-4">Radio Station Broadcasting</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Live Radio Broadcasts</h4>
                  <p className="card-text">
                    Stream live radio broadcasts with real-time interaction and customizable listener experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Radio Station Customization</h4>
                  <p className="card-text">
                    Personalize your radio station's branding, logo, and cover image for a unique broadcasting experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Listener Interactions</h4>
                  <p className="card-text">
                    Engage your listeners through live chats, calls, and interactive features during your broadcast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Features Section */}
      <section className="artists py-5 bg-light">
        <div className="container text-center">
          <h2 className="display-4 mb-4">For Artists</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Artist Dashboard</h4>
                  <p className="card-text">
                    Manage your performances, podcasts, radio stations, and revenue all in one place.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Live Performance Monetization</h4>
                  <p className="card-text">
                    Monetize your live performances through ticket sales, fan donations, and ad revenue.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Fan Engagement</h4>
                  <p className="card-text">
                    Interact with your fans during live streams and broadcasts using real-time comments and calls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kickstarter Section */}
      <section className="kickstarter bg-light py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-4">Support Our Kickstarter</h2>
          <p>
            Our Kickstarter campaign launches in May 2025! Help us bring StreampireX to life and get exclusive rewards.
          </p>
          <ul className="list-unstyled">
            <li>Early access to the platform</li>
            <li>Exclusive gifts for backers</li>
            <li>Founder's badges</li>
            <li>Limited-edition VR content</li>
          </ul>
          <a href="/kickstarter" className="btn btn-success btn-lg">
            Back Us on Kickstarter
          </a>
        </div>
      </section>

      {/* Features Call-to-Action Section */}
      <section className="cta bg-dark text-white text-center p-5">
        <div className="container">
          <h2 className="display-4 mb-4">Ready to Dive In?</h2>
          <p className="lead">
            Join StreampireX and be part of the revolution in live entertainment. Get started today!
          </p>
          <a href="/signup" className="btn btn-primary btn-lg">
            Sign Up for Early Access
          </a>
        </div>
      </section>

      <Footer /> {/* Include the Footer here */}
    </div>
  );
};

export default Home;
