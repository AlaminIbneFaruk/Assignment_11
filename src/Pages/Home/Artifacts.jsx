import { useLoaderData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Artifact from "../../Components/Artifact.jsx";

const Artifacts = () => {
  const Artifacts = useLoaderData();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Artifacts.length > 0) {
      setLoading(false);
    }
  }, [Artifacts]);

  const handleView = () => {
    navigate(`/all-artifacts`);
  };

  return (
    <div className="px-6 text-5xl ">
      <div className="my-12 py-12 text-center font-serif font-extrabold text-4xl md:text-4xl 
        bg-gradient-to-r from-stone-700 to-amber-300 bg-clip-text text-transparent 
        uppercase tracking-wider">
        Explore Unique Artifacts
      </div>

      {loading ? (
        <motion.div
          className="flex justify-center items-center h-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader bg-gradient-to-r from-stone-900 to-amber-500 p-4 rounded-full animate-spin">
            Loading...
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 text-xl lg:my-1">
          {Artifacts.map(artifact => (
            <motion.div
              key={artifact._id}
              className="artifact"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Artifact artifact={artifact}>{artifact.artifactName}</Artifact>
            </motion.div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-4">
        <button
          onClick={handleView}
          className="btn btn-warning lg:mt-4 bg-gradient-to-r from-stone-900 to-amber-500 text-white font-semibold"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Artifacts;
