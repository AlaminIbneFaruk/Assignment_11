import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    // Fetch artifact details when the page is loaded
    const fetchArtifact = async () => {
      if (!id) return;

      try {
        const response = await fetch(
          `http://localhost:5000/artifact-details/${id}`
        );
        const data = await response.json();
        if (response.ok) {
          setArtifactDetails(data); // Populate the form with fetched data
        } else {
          throw new Error(data.message || "Failed to fetch artifact details!");
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchArtifact();
  }, [id]); // Run the effect whenever the ID changes

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-200 p-5">
      <div className="card w-full max-w-6xl shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">Artifact Details</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="space-y-6 md:w-2/3">
              {/* Artifact Name */}
              <div className="form-control gap-5">
                <label className="label border-2 border-amber-500 p-4 rounded-md">
                  <span className="label-text text-lg">Artifact Name</span>
                </label>
                <p className="text-xl">{artifactDetails.artifactName}</p>
              </div>

              {/* Artifact Type */}
              <div className="form-control gap-5">
                <label className="label border-2 border-amber-500 p-4 rounded-md">
                  <span className="label-text text-lg">Artifact Type</span>
                </label>
                <p className="text-xl">{artifactDetails.artifactType}</p>
              </div>

              {/* Historical Context */}
              <div className="form-control gap-5">
                <label className="label border-2 border-amber-500 p-4 rounded-md">
                  <span className="label-text text-lg">Historical Context</span>
                </label>
                <p className="text-xl">{artifactDetails.historicalContext}</p>
              </div>

              {/* Created At */}
              <div className="form-control gap-5">
                <label className="label border-2 border-amber-500 p-4 rounded-md">
                  <span className="label-text text-lg">Created At</span>
                </label>
                <p className="text-xl">{artifactDetails.createdAt}</p>
              </div>

              {/* Discovered At */}
              <div className="form-control gap-5">
                <label className="label border-2 border-amber-500 p-4 rounded-md">
                  <span className="label-text text-lg">Discovered At</span>
                </label>
                <p className="text-xl">{artifactDetails.discoveredAt}</p>
              </div>

              {/* Discovered By */}
              <div className="form-control gap-5">
                <label className="label border-2 border-amber-500 p-4 rounded-md">
                  <span className="label-text text-lg">Discovered By</span>
                </label>
                <p className="text-xl">{artifactDetails.discoveredBy}</p>
              </div>

              {/* Present Location */}
              <div className="form-control gap-5">
                <label className="label border-2 border-amber-500 p-4 rounded-md">
                  <span className="label-text text-lg">Present Location</span>
                </label>
                <p className="text-xl">{artifactDetails.presentLocation}</p>
              </div>

              {/* Added By (User info) */}
              <div className="form-control gap-5">
                <label className="label border-2 border-amber-500 p-4 rounded-md">
                  <span className="label-text text-lg">Added By</span>
                </label>
                <p className="text-xl">Name: {artifactDetails.addedBy.name}</p>
                <p className="text-xl">Email: {artifactDetails.addedBy.email}</p>
              </div>
            </div>

            {/* Artifact Image */}
            <div className="form-control gap-5 md:w-1/3">
              <label className="label border-2 border-amber-500 p-4 rounded-md">
                <span className="label-text text-lg">Artifact Image</span>
              </label>
              <div className="border-2 border-stone-400 card">
                <img
                  src={artifactDetails.artifactImage}
                  alt={artifactDetails.artifactName}
                  className="w-full h-auto max-h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactPage;
