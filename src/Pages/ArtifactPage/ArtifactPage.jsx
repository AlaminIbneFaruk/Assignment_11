import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const ArtifactPage = () => {
  const { id } = useParams();
  const [artifactDetails, setArtifactDetails] = useState({
    artifactName: "",
    artifactImage: "",
    artifactType: "",
    historicalContext: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    presentLocation: "",
    addedBy: {
      name: "",
      email: "",
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtifact = async () => {
      if (!id) return;
      try {
        const response = await fetch(
          `https://assignment-11-server-nu-steel.vercel.app/artifact-details/${id}`
        );
        const data = await response.json();
        if (response.ok) {
          setArtifactDetails(data);
          setLoading(false);
        } else {
          throw new Error(data.message || "Failed to fetch artifact details!");
        }
      } catch (error) {
        alert(error.message);
        setLoading(false);
      }
    };
    fetchArtifact();
  }, [id]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-5">
      <div className="text-center font-serif font-extrabold text-3xl md:text-4xl 
        bg-gradient-to-r from-stone-700 to-amber-300 bg-clip-text text-transparent py-4 uppercase tracking-wider dark:text-white">
        Artifact Details
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
        <div className="card w-full lg:card-side bg-base-100 dark:bg-gray-800 shadow-xl">
          <figure className="p-5">
            <img
              src={artifactDetails.artifactImage}
              alt={artifactDetails.artifactName}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-neutralText ">
            <h2 className="card-title text-3xl font-bold">{artifactDetails.artifactName}</h2>
            <p className="text-lg text-neutralText">{artifactDetails.artifactType}</p>
            <p className="text-lg lg:max-w-2xl">
              {artifactDetails.historicalContext} It was discovered at {artifactDetails.discoveredAt} by {artifactDetails.discoveredBy}. It was created at {artifactDetails.createdAt}.
            </p>
            <p className="text-lg">
              <FaLocationDot className="inline" /> {artifactDetails.presentLocation}
            </p>
            <div className="mt-4">
              <p className="text-md">Added By: {artifactDetails.addedBy.name}</p>
              <p className="text-md">Email: {artifactDetails.addedBy.email}</p>
            </div>
            <div className="card-actions justify-end">
              <Link
                to="/"
                className="btn bg-gradient-to-r from-stone-700 to-amber-300 text-white font-semibold rounded-lg transition text-base"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtifactPage;