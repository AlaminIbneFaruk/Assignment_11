import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MyArtifact = ({ artifact }) => {
  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/artifactupdate/${id}`);
  };

  return (
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
