import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ErrorLottie from "../../assets/lottie/error.json";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Page not Found | Artifacts Bazzar</title>
      </Helmet>
      <div className="bg-gradient-to-r from-stone-900 to-amber-500 min-h-screen flex justify-center items-center relative">
        <div className="max-w-3xl mx-auto my-auto text-center relative z-10">

          <div className="max-w-60 mx-auto mb-4">
            <Lottie animationData={ErrorLottie} loop={true} />
          </div>
          <div className="max-w-md">
            <p className="mb-2 text-3xl text-white">
              Oops! The page you are looking for could not be found.
            </p>
            <Link
              to="/"
              className="mb-20 btn bg-gradient-to-r from-stone-900  to-amber-500 text-white border-none"
            >
              Go Back Home
            </Link>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black opacity-50 z-0 w-[70vw] m-auto border-2 border-stone-500 h-[70vh]"></div>{" "}
        
      </div>
    </>
  );
};

export default ErrorPage;
