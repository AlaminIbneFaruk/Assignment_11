import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init.js";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider";

import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json"
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const e_mail = event.target.email.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;
    const cpassword = event.target.Cpassword.value;
    const terms = event.target.terms.checked;
    console.log(name, e_mail, password, cpassword, terms, photo);
    if (!terms) {
      setErrorMessage("Please accept the terms and conditions");
      setSuccess(false);
      return;
    }
    setErrorMessage("");
    setSuccess(false);
    const regEX =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!regEX.test(cpassword)) {
      setErrorMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      setSuccess(false);
      return;
    }
    createUser(e_mail, cpassword)
      .then((result) => {
        console.log(result.user);
        // verification e
        //Update the user's profile
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // Profile updated!
            console.log("Profile updated");
            navigate("/");
            // ...
          })
          .catch((error) => {
            // An error occurred

            console.log(error.message);
            // ...
          });
      })
      .catch((error) => {
        console.log("Error", error.message);
        setErrorMessage(error.message);
      });
  };
  const showHidePassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Register | Artifacts Bazzar</title>
        <link rel="icon" type="image/svg+xml" href="https://i.ibb.co.com/nrgCfMk/images-7.jpg" />
      </Helmet>
      <div>
        <div className="py-20 lg:flex justify-center items-center bg-gradient-to-r from-stone-600 to-amber-300 text-black">
          
          <div className="mx-auto">
            <Lottie animationData={registerLottie} loop={true}>
            </Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="text-center font-sans font-bold bg-gradient-to-t from-stone-600 to-amber-300  bg-clip-text text-transparent text-2xl ">
                REGISTER NOW
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text text-base">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base">Password</span>
                </label>
                <input
                  name="password"
                  type={showPassword ? `text` : `password`}
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <button
                  className="btn btn-xs absolute right-4 top-12"
                  onClick={showHidePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base">Confirm Password</span>
                </label>
                <input
                  name="Cpassword"
                  type={showPassword ? `text` : `password`}
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  required
                />
                <button
                  className="btn btn-xs absolute right-4 top-12"
                  onClick={showHidePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-2">
                  <input
                    name="terms"
                    type="checkbox"
                    className="checkbox"
                    value="Accepted"
                  />
                  <label className="label-text">
                    Accept all the terms and conditions
                  </label>
                </label>
              </div>
              <div className="form-control mt-2 gap-5">
                <button type="submit" className="btn btn-warning bg-gradient-to-r from-stone-600 to-amber-300 text-white">
                  Register
                </button>
                <Link to="/login" className="btn btn-warning bg-gradient-to-r from-stone-600 to-amber-300 text-white">
                  Already have an account? Login
                </Link>
              </div>
              <p className="text-emerald-700 p-2 rounded-lg">{errorMessage}</p>
              {success && (
                <p className="text-green-600">Sign Up is Successful</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
