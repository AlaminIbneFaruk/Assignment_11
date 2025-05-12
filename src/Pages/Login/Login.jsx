import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import LoginLottie from "../../assets/lottie/login.json";
import {toast} from "react-toastify";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const emailref = useRef(null);
  const { signInUser, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setErrorMessage("");

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(`Login Successful for ${user.displayName}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(`Error: ${error.message}`);
        toast.error(`Login Failed ${errorMessage}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {

        const user = result.user;
        toast.success(`Google login successful for ${user.displayName}!`);
        navigate("/");
      })
      .catch((error) => {
        toast.error("Google login failed: " + error.message);
      });
  };

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="https://i.ibb.co.com/nrgCfMk/images-7.jpg" />
        <title>Login | Artifacts Bazzar</title>
      </Helmet>
      <div className="py-20 bg-gradient-to-r from-stone-700 to-amber-300 flex justify-center items-center">
        <div className="bg-opacity-8 w-5/12 mx-auto">
          <Lottie animationData={LoginLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl z-20">
          <div className="max-w-60 text-center font-serif font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-stone-700 to-amber-300 bg-clip-text text-transparent py-4 uppercase tracking-wider pt-5 mx-auto">
            Login Now
          </div>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input name="email" ref={emailref} type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-2 gap-5">
              <button className="btn btn-warning bg-gradient-to-r from-stone-700 to-amber-300 text-white text-lg" type="submit">Login</button>
              <Link to="/register" className="text-lg btn btn-warning bg-gradient-to-r from-stone-700 to-amber-300 text-white">Register Now</Link>
            </div>
            <button className="btn bg-blue-400 text-white hover:bg-blue-600" onClick={handleGoogle}>
              <FaGoogle className="text-2xl" />
              <span className="text-3xl">Google</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
