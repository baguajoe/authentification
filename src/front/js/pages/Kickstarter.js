import React from "react";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

const KickstarterPage = () => {
    return (
      <div>
        <Navbar />
  
        {/* Hero Section */}
        <section className="hero bg-dark text-white text-center p-5">
          <div className="container">
            <h1 className="display-3">Support Our Kickstarter Campaign!</h1>
            <p className="lead">
              Help us bring StreampireX to life by backing our campaign. We're redefining live entertainment through VR, live events, podcasting, and radio broadcasting!
            </p>
            <a href="#donate" className="btn btn-primary btn-lg">
              Back Us Now
            </a>
          </div>
        </section>
  
        {/* Kickstarter Campaign Launch Date Section */}
        <section className="campaign-launch-date py-5 bg-light">
          <div className="container text-center">
            <h2 className="display-4 mb-4">Kickstarter Launch Date</h2>
            <p className="lead">
              The StreampireX Kickstarter campaign is launching in <strong>May 2025</strong>!
            </p>
            <p>
              Be one of the first to support the project, and get exclusive rewards as we bring StreampireX to life!
            </p>
            <a href="#donate" className="btn btn-primary btn-lg">
              Donate Early & Support Us
            </a>
          </div>
        </section>
  
        {/* Project Info Section */}
        <section className="project-info py-5">
          <div className="container text-center">
            <h2 className="display-4 mb-4">Why StreampireX?</h2>
            <p>
              StreampireX is an innovative platform designed to empower creators and artists by combining VR technology, live event streaming, and monetization opportunities. With our platform, artists can host immersive live performances, launch their own radio stations, and engage with fans in real-time. We’re also providing easy ways for podcasters to grow their audience and monetize their content. Your support will make all of this possible!
            </p>
          </div>
        </section>
  
        {/* Funding Goal Section */}
        <section className="funding-goal bg-light py-5">
          <div className="container text-center">
            <h2 className="display-4 mb-4">Our Funding Goal</h2>
            <p>
              We aim to raise <strong>$150,000</strong> to complete the development of StreampireX. Your contributions will help cover costs such as development, VR integrations, marketing, and the rewards for our backers.
            </p>
            <div className="goal-progress">
              <p>Current Raised: <strong>$0</strong></p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "0%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  0% funded
                </div>
              </div>
              <p className="mt-3">We're getting closer to making StreampireX a reality! Every bit counts, so please consider pledging today.</p>
            </div>
          </div>
        </section>
  
        {/* Rewards Section */}
        <section className="rewards py-5">
          <div className="container text-center">
            <h2 className="display-4 mb-4">Our Rewards for Backers</h2>
            <p>Choose from a variety of exciting rewards based on your pledge level:</p>
            <div className="row">
              {/* $20 Donation */}
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title">$20 - Early Access</h4>
                    <p className="card-text">
                      Get early access to StreampireX before it’s publicly available. Be among the first to explore our platform and see all the exciting features we’re launching.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* $50 Donation */}
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title">$50 - Founder's Badge + Early Access</h4>
                    <p className="card-text">
                      Get early access to StreampireX along with a Founder's Badge that will display your support on your profile. You'll also be recognized as one of the key supporters of the project.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* $100 Donation */}
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title">$100 - Exclusive VR Content + All of the Above</h4>
                    <p className="card-text">
                      Enjoy exclusive VR content that will only be available to our backers. Plus, you’ll get the Founder’s Badge, Early Access, and everything from the $20 reward tier.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* $500 Donation */}
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title">$500 - Personal Avatar + All of the Above</h4>
                    <p className="card-text">
                      Work with our team to create a personalized avatar for you to use in VR live events. This exclusive reward also includes all previous rewards, including early access and exclusive content.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* $1000 Donation */}
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title">$1000 - VIP Experience + All of the Above</h4>
                    <p className="card-text">
                      Get a VIP experience with personal shoutouts, exclusive live events, and even a private session with an artist or performer of your choice! Plus, you’ll get all previous rewards.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* $1500 Donation */}
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title">$1500 - Exclusive StreampireX Hoodie + All of the Above</h4>
                    <p className="card-text">
                      Receive a limited edition StreampireX hoodie, designed just for our Kickstarter backers. You’ll also receive all the previous rewards, including early access, exclusive VR content, personal avatar, and VIP experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call-to-Action Section */}
        <section className="cta bg-dark text-white text-center p-5">
          <div className="container">
            <h2 className="display-4 mb-4">Be Part of the Revolution!</h2>
            <p className="lead">
              Your support will help bring StreampireX to life. Together, we can revolutionize the world of live entertainment. Pledge today!
            </p>
            <a href="#donate" className="btn btn-primary btn-lg">
              Donate Early & Support Us Now
            </a>
          </div>
        </section>
  
        <Footer />
      </div>
    );
  };
  
  export default KickstarterPage;