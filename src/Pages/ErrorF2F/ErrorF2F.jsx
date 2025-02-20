import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ErrorLottie from "../../assets/lottie/error.json";
const ErrorF2F = () => {
  return (
    <>
      <Helmet>
        
      </Helmet>
      <div className="bg-amber-200 min-h-screen flex justify-center items-center">
        <div className="hero max-w-3xl mx-auto my-auto">
          <div className="hero-overlay bg-opacity-60 bg-black rounded-lg m-10"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <div className="max-w-60 mx-auto">
                <Lottie animationData={ErrorLottie} loop={true}></Lottie>
              </div>
              <p className="mb-2 text-3xl text-white py-5">
                Oops! Data Cannot be fetched properly
              </p>
              <Link
                to="/"
                className="mb-20 btn bg-gradient-to-r from-stone-600 to-amber-300 text-white border-none"
              >
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorF2F;
