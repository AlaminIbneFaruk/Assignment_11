import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const ArtifactPage = () => {
  const { id } = useParams(); // Get the artifact ID from the URL
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
        } else {
          throw new Error(data.message || "Failed to fetch artifact details!");
        }
      } catch (error) {
        alert(error.message);
      }
    };
    fetchArtifact();
  }, [id]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-5">
      <div
        className="text-center font-serif font-extrabold text-3xl md:text-4xl 
  bg-gradient-to-r from-stone-600 to-amber-300 bg-clip-text text-transparent py-4 uppercase tracking-wider dark:text-white"
      >
        Artifact Details
      </div>
      <div className="card w-full lg:card-side bg-base-100 dark:bg-gray-800 shadow-xl">
        <figure className="p-5">
          <img
            src={artifactDetails.artifactImage}
            alt={artifactDetails.artifactName}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-neutralText ">
          <h2 className="card-title text-3xl font-bold">
            {artifactDetails.artifactName}
          </h2>
          <p className="text-lg text-neutralText">
            {artifactDetails.artifactType}
          </p>
          <p className="text-lg lg:max-w-2xl">
            {artifactDetails.historicalContext} It was discovered at{" "}
            {artifactDetails.discoveredAt} by {artifactDetails.discoveredBy}. It
            was created at {artifactDetails.createdAt}.
          </p>
          <p className="text-lg">
            <FaLocationDot className="inline" />{" "}
            {artifactDetails.presentLocation}
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
    </div>
  );
};

export default ArtifactPage;
