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
    <article
      className="rounded-2xl shadow-lg overflow-hidden bg-base-100 border border-base-300 flex flex-col transition-colors max-h-screen"
      aria-label={artifact?.artifactName}
    >
      <figure className="bg-gray-200 p-2 flex items-center justify-center h-48 w-full overflow-hidden">
        <img
          className="object-cover h-full object-left rounded-md"
          src={artifact?.artifactImage}
          alt={artifact?.artifactName}
        />
      </figure>
      <header className="p-4">
        <h2 className="text-lg font-semibold text-base-content">
          {artifact?.artifactName}
        </h2>
        <p className="text-sm text-base-content mt-2">
          {artifact?.artifactType}
        </p>
        <p className="text-sm text-base-content mt-2">
          {artifact?.presentLocation}
        </p>
      </header>
      <footer className="p-4 flex items-center justify-between mt-4">
        <button
          className="btn btn-outline btn-warning text-base-content flex items-center gap-1"
          onClick={handleLike}
          aria-label="Like this artifact"
        >
          <span className="text-neutral-content flex items-center gap-1">
            <AiOutlineLike />
            <span>
              Like <span>{likeCount}</span>
            </span>
          </span>
        </button>
        <button
          onClick={() => handleDetails(artifact?._id)}
          className="btn bg-gradient-to-r from-stone-700 to-amber-300 text-white font-semibold rounded-lg transition text-base"
          aria-label="View artifact details"
        >
          View Details
        </button>
      </footer>
    </article>
  );
};

Artifact.propTypes = {
  artifact: PropTypes.shape({
    artifactName: PropTypes.string.isRequired,
    artifactImage: PropTypes.string.isRequired,
    artifactType: PropTypes.string.isRequired,
    presentLocation: PropTypes.string.isRequired,
    likeCounts: PropTypes.number,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Artifact;
