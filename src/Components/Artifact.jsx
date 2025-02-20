import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Artifact = ({ artifact }) => {
  const navigate = useNavigate();
  
  const [likeCount, setLikeCount] = useState(Number(artifact.likeCounts || 0));

  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
  };

  const handleDetails = (id) => {
    navigate(`/artifact-details/${id}`);
  };

  return (
    <div className="rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-200">
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
            className="btn btn-outline flex items-center gap-1"
            onClick={handleLike}
            aria-label="Like this artifact"
          >
            <AiOutlineLike />
            Like <span>{likeCount}</span>
          </button>
          <button
            onClick={() => handleDetails(artifact?._id)}
            className="px-4 py-2 bg-gradient-to-r from-stone-900 to-amber-500 btn-warning text-white font-semibold rounded-lg  transition text-base"
            aria-label="View artifact details"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

Artifact.propTypes = {
  artifact: PropTypes.shape({
    artifactName: PropTypes.string.isRequired,
    historicalContext: PropTypes.string.isRequired,
    artifactImage: PropTypes.string.isRequired,
    likeCounts: PropTypes.number,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Artifact;
