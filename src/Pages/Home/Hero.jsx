import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Hero = () => {
  const image1 = "https://i.ibb.co/DVcGRm3/images.jpg";
  const image2 =
    "https://i.ibb.co/mhw2yDV/set-archeology-tools-science-equipment-260nw-1410627773.webp";
  const image3 =
    "https://i.ibb.co/BgLCnXq/1200px-Everlight-Artefacts-concept-art.jpg";

  return (
    <div className="carousel w-full ">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-auto">
        <div className="hero min-h-screen text-white">
          <div className="hero-content flex flex-col-reverse bg-opacity-60 bg-amber-800 rounded-lg md:flex-row items-center max-w-screen-lg mx-auto px-6">
            <motion.img
              src={image1}
              className="w-full md:w-1/3 rounded-lg shadow-2xl"
              animate={{ y: [0, 20, 0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className=" rounded-lg w-full md:w-1/2 text-center md:text-left lg:min-h-[calc(80vh-10px)] flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl font-bold">
                Discover the Echoes of History
              </h1>
              <p className="py-4 text-sm md:text-md">
                Explore rare artifacts that tell the stories of civilizations
                past. From forgotten temples to legendary treasures, embark on a
                journey through time.
              </p>
              <button className="btn bg-gradient-to-r from-stone-600 to-amber-300 text-white">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
        <Navigation slideA="#slide3" slideB="#slide2" />
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-auto">
        <div className="hero min-h-screen text-white">
          <div className="hero-content flex flex-col md:flex-row items-center max-w-screen-xl mx-auto px-6 bg-opacity-60 bg-amber-800 rounded-lg">
            <div className=" p-6  w-full md:w-1/2 lg:min-h-[calc(80vh-12px)] text-center md:text-left lg:flex lg:flex-col lg:justify-center">
              <h1 className="text-3xl md:text-5xl font-bold">
                Timeless Treasures Await
              </h1>
              <p className="py-4 text-sm md:text-md">
                Dive into an unparalleled collection of ancient relics that
                shaped humanity. Experience the artistry, mythology, and
                mysteries of ancient cultures.
              </p>
              <button className="btn bg-gradient-to-r from-stone-600 to-amber-300 text-white">
                Browse Artifacts
              </button>
            </div>
            <motion.img
              src={image2}
              className="w-full md:w-1/2 rounded-lg shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: "0px" }}
            />
          </div>
        </div>
        <Navigation slideA="#slide1" slideB="#slide3" />
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-auto">
        <div
          className="hero min-h-screen bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <div className="hero-content flex flex-col md:flex-row items-center max-w-screen-xl mx-auto px-6">
            <div className="bg-opacity-60 bg-black p-6 rounded-lg w-full md:w-2/3 text-center md:text-left md:min-h-[calc(70vh-10px)] lg:flex lg:flex-col lg:justify-center lg:items-center">
              <h1 className="text-3xl md:text-5xl font-bold text-center ">
                <span className="bg-gradient-to-b from-amber-800 to-yellow-400 bg-clip-text text-transparent">
                  Experience{" "}
                </span>
                <span className="bg-gradient-to-b from-amber-800 to-yellow-400 bg-clip-text text-transparent">
                  the{" "}
                </span>
                <span className="bg-gradient-to-b from-amber-800 to-yellow-400 bg-clip-text text-transparent">
                  Magic{" "}
                </span>
                <span className="bg-gradient-to-b from-amber-800 to-yellow-400 bg-clip-text text-transparent">
                  of{" "}
                </span>
                <span className="bg-gradient-to-b from-amber-800 to-yellow-400 bg-clip-text text-transparent">
                  Antiquity
                </span>
              </h1>

              <p className="py-4 text-sm md:text-md text-center">
                Unearth artifacts that hold the wisdom of ancient kings,
                scholars, and artisans. Discover the stories etched in stone,
                metal, and time.
              </p>
              <button className="btn bg-gradient-to-r from-stone-600 to-amber-300 text-white">
                Shop Artifacts
              </button>
            </div>
          </div>
        </div>
        <Navigation slideB="#slide1" slideA="#slide2" />
      </div>
    </div>
  );
};

// Carousel Navigation Component
const Navigation = ({ slideA, slideB }) => (
  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    <a href={slideA} className="btn btn-circle btn-outline btn-success">
      ❮
    </a>
    <a href={slideB} className="btn btn-circle btn-outline btn-success">
      ❯
    </a>
  </div>
);
Navigation.propTypes = {
  slideA: PropTypes.string.isRequired,
  slideB: PropTypes.string.isRequired,
};

export default Hero;
