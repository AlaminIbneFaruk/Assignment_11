import { Carousel } from "react-responsive-carousel";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const animationSettings = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeInOut" },
};

const Hero = () => {
  const image1 = "https://i.ibb.co/DVcGRm3/images.jpg";
  const image2 =
    "https://i.ibb.co/mhw2yDV/set-archeology-tools-science-equipment-260nw-1410627773.webp";
  const image3 =
    "https://i.ibb.co/BgLCnXq/1200px-Everlight-Artefacts-concept-art.jpg";

  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div className="carousel-container w-full bg-base-100 text-neutral-content">
      <Carousel
        showThumbs={true}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={800}
        lazyLoad
      >
        <div className="hero min-h-[80vh]">
          <div className="px-8 flex flex-col lg:flex-row  justify-between items-center lg:gap-44">
            <figure className="bg-gray-200 lg:px-24 lg:py-24 border-2"> 
              <motion.img
                src={image1}
                alt="Ancient Artifact 1"
                className=" h-[40%] md:w-auto rounded-lg shadow-2xl object-cover"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                loading="lazy"
              />
            </figure>
            <div className="rounded-lg w-full text-center md:text-left flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold border-s-2 border-amber-500 px-4">
                Discover the Echoes of History
              </h1>
              <p className=" text-md md:text-lg">
                Uncover artifacts that whisper stories of ancient civilizations.
              </p>
              <Link
                to="/all-artifacts"
                aria-label="Start Your Journey"
                className="btn bg-gradient-to-r from-stone-700 to-amber-300 text-white px-4 rounded-lg shadow-lg hover:from-gray-700 hover:to-gray-500 transition-all duration-300"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>

        <div className="hero min-h-[80vh]">
          <div className="px-8 flex flex-col lg:flex-row  justify-between items-center lg:gap-80">
            <div className=" w-full  md:text-left flex flex-col justify-center gap-4">
              <h1 className="text-4xl md:text-5xl font-bold border-s-2 border-amber-500 px-4">
                Timeless Treasures Await
              </h1>
              <p className=" text-md md:text-lg">
                Explore relics that shaped humanity.
              </p>
              <Link
                to="/all-artifacts"
                aria-label="Browse Artifacts"
                className="btn bg-gradient-to-r from-stone-700 to-amber-300 text-white px-4 rounded-lg shadow-lg hover:from-gray-700 hover:to-gray-500 transition-all duration-300"
              >
                Browse Artifacts
              </Link>
            </div>
            <motion.img
              src={image2}
              alt="Ancient Artifact 2"
              className="w-full h-auto rounded-lg shadow-2xl object-cover "
              {...animationSettings}
              loading="lazy"
            />
          </div>
        </div>

        <motion.div
          ref={parallaxRef}
          className="hero bg-cover text-white h-full md:min-h-[80vh]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${image3})`,
            backgroundSize: "cover",
            backgroundPositionY: backgroundY,
          }}
        >
          <motion.div
            className="hero-content flex flex-col items-center mx-auto px-6 h-full justify-center"
            {...animationSettings}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
              Experience the Magic of Antiquity
            </h1>
            <p className=" text-sm sm:text-md md:text-lg text-center max-w-md">
              Unearth artifacts that hold the wisdom of ancient civilizations.
            </p>
            <Link
              to="/all-artifacts"
              aria-label="Shop Artifacts"
              className="btn bg-gradient-to-r from-stone-700 to-amber-300 text-white px-6 rounded-md hover:from-gray-700 hover:to-gray-500 transition-all duration-300"
            >
              Shop Artifacts
            </Link>
          </motion.div>
        </motion.div>
      </Carousel>
    </div>
  );
};

export default Hero;
