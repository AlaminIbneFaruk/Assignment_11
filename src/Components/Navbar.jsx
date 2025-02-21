import { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="navbar ">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-artifacts">All Artifacts</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/add-artifact">Add Artifact</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-base md:text-2xl lg:text-3xl  font-sans font-bold">
          <span className="relative bg-gradient-to-tr from-lime-500 via-green-500 to-emerald-900 bg-clip-text text-transparent">
            Artifact Bazaar
          </span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-xs">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-artifacts">All Artifacts</Link>
          </li>

          {user && (
            <>
              <li>
                <Link to="/add-artifact">Add Artifact</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {!user ? (
          <div>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link
              to="/register"
              className="btn bg-gradient-to-r from-stone-600 to-amber-300 text-white ml-2"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="btn btn-outline btn-warning flex items-center gap-2 text-white"
              >
                {user?.photoURL && (
                  <div onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                  className="relative inline-block  cursor-pointer">
                    <img
                      src={user?.photoURL}
                      alt="User"
                      className="w-8 h-8 rounded-full inline"
                    />
                    {isHovered&&(
                      <div className="inline">
                        {user?.displayName}
                      </div>
                    )}
                  </div>
                )}
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box shadow-md z-10 mt-3 w-52 p-2 bg-gradient-to-r from-stone-600 to-amber-300 text-white"
              >
                <li>
                  <Link to={`/myartifacts/${user?.uid}`}>My Artifacts</Link>
                </li>
                <li>
                  <Link to={`/liked-artifacts/${user?.uid}`}>Liked Artifacts</Link>
                </li>
              </ul>
            </div>
            <button
              className="btn bg-gradient-to-r from-stone-600 to-amber-300 text-white"
              onClick={signOutUser}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
