import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-dark text-white text-center p-5">
        <div className="container">
          <h1 className="display-3">Welcome to StreampireX</h1>
          <p className="lead">
            Discover the future of VR live performances, podcasting, radio, and more. Join us as we redefine live entertainment!
          </p>
          <Link to="/signup" className="btn btn-primary btn-lg">
            Get Early Access
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5">
        <div className="container text-center">
          <h2 className="display-4 mb-4">Our Features</h2>
          <div className="row">
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
          <Link to="/kickstarter" className="btn btn-success btn-lg">
            Back Us on Kickstarter
          </Link>
        </div>
      </section>

      {/* Features Call-to-Action Section */}
      <section className="cta bg-dark text-white text-center p-5">
        <div className="container">
          <h2 className="display-4 mb-4">Ready to Dive In?</h2>
          <p className="lead">
            Join StreampireX and be part of the revolution in live entertainment. Get started today!
          </p>
          <Link to="/signup" className="btn btn-primary btn-lg">
            Sign Up for Early Access
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
