import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateArtifact = () => {
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

  useEffect(() => {
    const fetchArtifact = async () => {
      if (!id) return;
      try {
        const response = await fetch(
          `https://assignment-11-62e47.web.app/artifact-details/${id}`
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!artifactDetails.artifactName || !artifactDetails.artifactType) {
      alert("Please fill in all required fields.");
      return;
    }
    try {
      const response = await fetch(`https://assignment-11-server-nu-steel.vercel.app/artifactupdate/${id}`, {
        method: "PUT", // Use PUT for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artifactDetails), // Send the updated artifact details
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update artifact!");
      }
      const updatedArtifact = await response.json();
      console.log("Artifact updated successfully:", updatedArtifact);
      alert("Artifact updated successfully!");
    } catch (error) {
      console.error("Error updating artifact:", error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-200 p-5">
      <div className="card w-full max-w-6xl shadow-xl bg-base-100 p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Update Artifact</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                { label: "Artifact Name", key: "artifactName" },
                { label: "Artifact Type", key: "artifactType" },
                { label: "Historical Context", key: "historicalContext" },
                { label: "Created At", key: "createdAt" },
                { label: "Discovered At", key: "discoveredAt" },
                { label: "Discovered By", key: "discoveredBy" },
                { label: "Present Location", key: "presentLocation" },
              ].map(({ label, key }) => (
                <div key={key} className="form-control">
                  <label className="label font-bold">{label}</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={artifactDetails[key]}
                    onChange={(e) =>
                      setArtifactDetails({
                        ...artifactDetails,
                        [key]: e.target.value,
                      })
                    }
                  />
                </div>
              ))}
              {/* Added By Section */}
              <div className="form-control">
                <label className="label font-bold">Added By</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={artifactDetails.addedBy.name}
                  readOnly
                />
                <input
                  type="email"
                  className="input input-bordered w-full mt-2"
                  value={artifactDetails.addedBy.email}
                  readOnly
                />
              </div>
            </div>
            {/* Artifact Image */}
            <div className="form-control flex items-center">
              <label className="label font-bold">Artifact Image</label>
              <div className="w-full border-2 border-gray-300 rounded-lg p-4">
                <img
                  src={artifactDetails.artifactImage}
                  alt={artifactDetails.artifactName}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <label className="label font-bold">Artifact Image URL</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={artifactDetails.artifactImage}
                onChange={(e) =>
                  setArtifactDetails({
                    ...artifactDetails,
                    artifactImage: e.target.value,
                  })
                }
              />
              <input
                type="submit"
                className="btn bg-gradient-to-r from-stone-900 to-amber-500 btn-warning btn-outline text-white w-full mt-4"
                value="Update"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateArtifact;
