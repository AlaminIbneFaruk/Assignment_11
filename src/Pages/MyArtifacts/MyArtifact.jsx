import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MyArtifact = ({ artifact }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (artifact) {
      setLoading(false);
    }
  }, [artifact]);

  const handleUpdate = (id) => {
    navigate(`/artifactupdate/${id}`);
  };

  return (
    <>
      {loading ? (
        <motion.div
          className="flex justify-center items-center h-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-full animate-spin">
            Loading...
          </div>
        </motion.div>
      ) : (
        <div className="rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-200 h-96">
          <img
            className="w-full h-48 object-cover border-b-2 border-black"
            src={artifact?.artifactImage}
            alt={artifact?.artifactName}
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{artifact?.artifactName}</h2>
            <p className="text-sm text-gray-600 mt-2">{artifact?.historicalContext}</p>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => handleUpdate(artifact?._id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                aria-label="View artifact details"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

MyArtifact.propTypes = {
  artifact: PropTypes.shape({
    artifactName: PropTypes.string.isRequired,
    historicalContext: PropTypes.string.isRequired,
    artifactImage: PropTypes.string.isRequired,
    likeCounts: PropTypes.number,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default MyArtifact;