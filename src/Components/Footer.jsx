import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-base-100 text-base-content py-10 transition-colors" role="contentinfo">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-20">
        <nav aria-label="Footer Navigation">
          <Link to="/" className="btn btn-ghost mb-2">
            <img
              src="https://i.ibb.co.com/rKKSN4Bt/Ancient-Bazzar.png"
              alt="Ancient Bazaar Logo"
              className="w-auto h-8"
            />
            <p className="text-5xl font-sans font-extrabold bg-gradient-to-r from-stone-600 to-amber-300 bg-clip-text text-transparent">
              ARTIFACT BAZZAR
            </p>
          </Link>
          <div className="px-5">
            <p className="text-2xl"># Artifacts Bazzar.Ltd </p>
            <p>Where History Meets Memories.</p>
            <p className="py-4">
              Copyright © {new Date().getFullYear()} - All rights reserved by
              Artifacts Bazzar Ltd
            </p>
          </div>
        </nav>
        <nav aria-label="Footer Links">
          <h6 className="footer-title text-2xl">Navigation</h6>
          <div className="flex flex-col" role="navigation">
            <Link to="/" className="link link-hover">Home</Link>
            <Link to="/all-Artifactss" className="link link-hover">All Artifacts</Link>
            <Link to="/login" className="link link-hover">Login</Link>
            <Link to="/register" className="link link-hover">Register</Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
