import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Page not Found | Artifacts Bazzar</title>
      </Helmet>
      <div className="bg-gradient-to-r from-stone-900  to-amber-500 min-h-screen flex justify-center items-center">
        <div
          className="hero max-w-3xl mx-auto my-auto"
          style={{
            backgroundImage: "url(https://i.ibb.co/KXhZ3BB/page-Not-Found.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-opacity-60 bg-black max-w-[calc(100%-200px)] h-80 rounded-lg m-10"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <p className="mb-2 text-3xl text-white">
                Oops! The page you are looking for could not be found.
              </p>
              <Link
                to="/"
                className="mb-20 btn bg-gradient-to-b from-emerald-500 via-emerald-400 to-white text-black border-none"
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

export default ErrorPage;
