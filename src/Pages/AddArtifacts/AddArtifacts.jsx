
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Helmet } from "react-helmet";

const AddArtifact = () => {
  const { user } = useContext(AuthContext);

  const [artifactDetails, setArtifactDetails] = useState({
    artifactName: "",
    artifactImage: "",
    artifactType: "",
    historicalContext: "",
    createdAt: new Date().toISOString(),
    discoveredAt: "",
    discoveredBy: "",
    presentLocation: "",
    addedBy: {
      name: user?.displayName || "Unknown User",
      email: user?.email || "No Email",
      uid: user?.uid || "No uid",
    },
    likeCounts: "0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtifactDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://assignment-11-server-nu-steel.vercel.app/add-artifact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artifactDetails),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Success:", data);
        alert("Artifact details added successfully!");
      } else {
        throw new Error(data.message || "Failed to add artifact!");
      }
    } catch (error) {
      console.error("This are given", artifactDetails);
      console.error("Error adding artifact:", error);
      alert(error.message);
    }
  };

  const image =
    "https://i.ibb.co.com/mhw2yDV/set-archeology-tools-science-equipment-260nw-1410627773.webp";
  return (
    <>
      <Helmet>
        <title>Add Artifact | Artifacts Bazzar</title>
      </Helmet>
      <div>
        <div className="hero flex flex-col md:flex-row justify-between bg-gradient-to-br from-stone-800 to-amber-400 min-h-screen gap-x-20">
          <div className="flex-1 ">
            <img src={image} className="w-full rounded-s-lg shadow-2xl mx-20" />
          </div>
          <div className="hero-content flex-col ">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
              <div className="text-center lg:text-left mx-5 mt-5">
                <h1
                  className="font-serif font-extrabold text-3xl md:text-4xl 
  bg-gradient-to-r from-amber-600 to-stone-900 bg-clip-text text-transparent py-4 uppercase tracking-wider mx-auto text-center"
                >
                  Add Artifact
                </h1>
                <p className="pt-6 text-neutral text-lg font-bold">
                  Fill in the details below to add a new Artifact.
                </p>
              </div>
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Artifact Image
                    </span>
                  </label>
                  <input
                    type="text"
                    name="artifactImage"
                    value={artifactDetails.artifactImage}
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Artifact Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="artifactName"
                    value={artifactDetails.artifactName}
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Created At
                    </span>
                  </label>
                  <input
                    type="text"
                    name="createdAt"
                    value={new Date()
                      .toISOString()
                      .slice(0, 16)
                      .replace("T", " ")} // Formats current date & time
                    className="input input-bordered"
                    readOnly
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Artifact Type
                    </span>
                  </label>
                  <select
                    name="artifactType"
                    value={artifactDetails.artifactType}
                    onChange={handleChange}
                    className="select select-bordered"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Tools">Tools</option>
                    <option value="Weapons">Weapons</option>
                    <option value="Documents">Documents</option>
                    <option value="Writings">Writings</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Historical Context:
                    </span>
                  </label>
                  <textarea
                    name="historicalContext"
                    value={artifactDetails.historicalContext}
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Discovered At:
                    </span>
                  </label>
                  <input
                    type="text"
                    name="discoveredAt"
                    value={artifactDetails.discoveredAt}
                    onChange={handleChange}
                    className="input input-bordered"
                    placeholder="e.g., 100 BC"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Discovered By:
                    </span>
                  </label>
                  <input
                    type="text"
                    name="discoveredBy"
                    value={artifactDetails.discoveredBy}
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Present Location:
                    </span>
                  </label>
                  <input
                    type="text"
                    name="presentLocation"
                    value={artifactDetails.presentLocation}
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Added By:
                    </span>
                  </label>
                  <input
                    type="text"
                    value={`${user.displayName} (${user.email})`}
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn bg-gradient-to-r from-stone-900 to-amber-500 btn-outline text-white"
                    type="submit"
                  >
                    Add Artifact
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddArtifact;
