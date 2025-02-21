import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-20">
        <nav>
          <Link
            to="/"
            className="btn btn-ghost text-5xl font-sans font-extrabold bg-gradient-to-tr from-lime-500 via-green-500 to-emerald-900 bg-clip-text text-transparent mb-2"
          >
            ARTIFACT BAZZAR
          </Link>
          <div className="px-5">
            <p className="text-2xl"># Artifacts Bazzar.Ltd </p>
            <p>Where History Meets Memories.</p>
            <p className="py-4">
              Copyright © {new Date().getFullYear()} - All right reserved by
              Artifacts Bazzar Ltd
            </p>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-2xl">Navigation</h6>
          <div className="flex flex-col">
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/all-Artifactss" className="link link-hover">
              All Artifacts
            </Link>
            <Link to="/login" className="link link-hover">
              Login
            </Link>
            <Link to="/register" className="link link-hover">
              Register
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
