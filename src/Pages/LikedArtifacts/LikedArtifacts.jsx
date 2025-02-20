import { Helmet } from "react-helmet";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-toastify";

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext); // Get authenticated user
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLikedArtifacts = async () => {
      if (!user?.uid) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/liked-artifacts/${user.uid}`);
        const data = await response.json();

        if (!response.ok) throw new Error(data.message || "Failed to fetch liked artifacts!");

        setLikedArtifacts(data);
      } catch (err) {
        setError(err.message);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedArtifacts();
  }, [user?.uid]); // Runs when user ID changes

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-200 p-5">
      <Helmet>
        <title>Liked Artifacts</title>
      </Helmet>

      <div className="w-full max-w-6xl shadow-xl bg-white p-6 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Liked Artifacts</h2>

        {loading && <p className="text-center text-xl">Loading...</p>}
        {error && <p className="text-center text-red-600 text-xl">{error}</p>}

        {!loading && !error && likedArtifacts.length === 0 && (
          <p className="text-center text-lg text-gray-700">You have not liked any artifacts yet. ❤️</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {likedArtifacts.map((artifact) => (
            <div key={artifact._id} className="card shadow-lg p-4 border rounded-lg">
              <img
                src={artifact.artifactImage}
                alt={artifact.artifactName}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-3">{artifact.artifactName}</h3>
              <p className="text-gray-600">{artifact.artifactType}</p>
              <p className="text-gray-800 font-medium mt-2">Discovered By: {artifact.discoveredBy}</p>
              <p className="text-gray-800">Present Location: {artifact.presentLocation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikedArtifacts;
