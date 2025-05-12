import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <header className="navbar sticky top-0 z-50 bg-base-100 shadow-md" role="banner">
      <nav className="navbar-start" aria-label="Main navigation">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-artifacts">All Artifacts</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            {user && <li><Link to="/add-artifact">Add Artifact</Link></li>}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-base md:text-2xl lg:text-3xl font-sans font-bold" aria-label="Home">
          <img src="https://i.ibb.co.com/rKKSN4Bt/Ancient-Bazzar.png" alt="Ancient Bazaar Logo" className="w-auto h-8" />
          <span className="bg-gradient-to-r from-stone-700 to-amber-300 bg-clip-text text-transparent">Artifact Bazaar</span>
        </Link>
      </nav>
      <nav className="navbar-center hidden lg:flex" aria-label="Desktop navigation">
        <ul className="menu menu-horizontal px-1 font-bold text-xs">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/all-artifacts">All Artifacts</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          {user && <li><Link to="/add-artifact">Add Artifact</Link></li>}
        </ul>
      </nav>
      <div className="navbar-end flex items-center gap-2">
        <DarkModeToggle />
        {!user ? (
          <div className="flex items-center gap-2">
            <Link to="/login" className="btn">Login</Link>
            <Link to="/register" className="btn bg-gradient-to-r from-stone-700 to-amber-300 text-white">Register</Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-outline btn-warning flex items-center gap-2 text-white" aria-haspopup="true">
                {user?.photoURL && (
                  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative inline-block cursor-pointer">
                    <img src={user?.photoURL} alt="User" className="w-8 h-8 rounded-full" />
                    {isHovered && <div className="inline">{user?.displayName}</div>}
                  </div>
                )}
              </button>
              <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box shadow-md z-10 mt-3 w-52 p-2 bg-gradient-to-r from-stone-700 to-amber-300 text-white">
                <li><Link to={`/myartifacts/${user?.uid}`}>My Artifacts</Link></li>
              </ul>
            </div>
            <button className="btn bg-gradient-to-r from-stone-700 to-amber-300 text-white" onClick={signOutUser} aria-label="Log Out">Log Out</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
