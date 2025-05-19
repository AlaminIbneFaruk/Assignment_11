import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-base-100 text-base-content py-10 transition-colors" role="contentinfo">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-8  gap-8 md:gap-0">
        {/* Brand & Info */}
        <nav aria-label="Footer Navigation" className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3">
          <Link to="/" className="btn btn-ghost flex flex-col md:flex-row items-center md:items-center gap-3 mb-4 md:mb-6">
            <img
              src="https://i.ibb.co.com/rKKSN4Bt/Ancient-Bazzar.png"
              alt="Ancient Bazaar Logo"
              className="w-auto h-12 md:h-8"
            />
            <p className="text-2xl md:text-2xl font-sans font-extrabold bg-gradient-to-r from-stone-700 to-amber-300 bg-clip-text text-transparent uppercase">
              ARTIFACT BAZZAR
            </p>
          </Link>
          <div className="px-2 md:px-0">
            <p className="text-xl md:text-2xl font-semibold"># Artifacts Bazzar.Ltd</p>
            <p className="mb-4 md:mb-6">Where History Meets Memories.</p>
            <p className="text-sm md:text-base">
              &copy; {new Date().getFullYear()} - All rights reserved by Artifacts Bazzar Ltd
            </p>
          </div>
        </nav>

        {/* Navigation Links */}
        <nav aria-label="Footer Links" className="md:w-1/3 flex flex-col items-center md:items-center text-center ">
          <h6 className="footer-title text-2xl mb-4 font-semibold">Navigation</h6>
          <div className="flex flex-col space-y-2" role="navigation">
            <Link to="/" className="link link-hover text-lg md:text-base">Home</Link>
            <Link to="/all-artifacts" className="link link-hover text-lg md:text-base">All Artifacts</Link>
            <Link to="/login" className="link link-hover text-lg md:text-base">Login</Link>
            <Link to="/register" className="link link-hover text-lg md:text-base">Register</Link>
          </div>
        </nav>

        {/* Social Media Links */}
        <nav aria-label="Social Media Links" className="md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right">
          <h6 className="footer-title text-2xl mb-4 font-semibold">Follow Us</h6>
          <div className="flex space-x-6 justify-center md:justify-end text-2xl">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/yourwhatsappphonenumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-600 transition-colors">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-600 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
