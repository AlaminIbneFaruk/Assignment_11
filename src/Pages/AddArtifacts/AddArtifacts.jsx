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
      console.error("Error adding artifact:", error);
      alert(error.message);
    }
  };

  const image = "https://i.ibb.co.com/mhw2yDV/set-archeology-tools-science-equipment-260nw-1410627773.webp";

  return (
    <>
      <Helmet>
        <title>Add Artifact | Artifacts Bazzar</title>
      </Helmet>
      <section className="hero flex flex-col md:flex-row justify-between bg-gradient-to-br from-stone-800 to-amber-400 min-h-screen gap-x-20">
        <figure className="flex-1">
          <img src={image} className="w-full rounded-s-lg shadow-2xl lg:mx-20" alt="Add Artifact" />
        </figure>
        <article className="hero-content flex-col">
          <div className="card bg-base-100 text-base-content w-full shrink-0 shadow-2xl dark:bg-gray-900 dark:text-white">
            <header className="text-center lg:text-left mx-5 mt-5">
              <h1 className="font-serif font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-stone-600 to-amber-300 bg-clip-text text-transparent py-4 uppercase tracking-wider">Add Artifact</h1>
              <p className="pt-6 text-neutralText text-lg font-bold">Fill in the details below to add a new Artifact.</p>
            </header>
            <form className="card-body" onSubmit={handleSubmit} aria-label="Add Artifact Form">
              <fieldset className="form-control">
                <label className="label" htmlFor="artifactImage">Artifact Image</label>
                <input type="text" name="artifactImage" id="artifactImage" value={artifactDetails.artifactImage} onChange={handleChange} className="input input-bordered dark:bg-gray-800 dark:text-white" required />
              </fieldset>
              <fieldset className="form-control">
                <label className="label" htmlFor="artifactName">Artifact Name</label>
                <input type="text" name="artifactName" id="artifactName" value={artifactDetails.artifactName} onChange={handleChange} className="input input-bordered dark:bg-gray-800 dark:text-white" required />
              </fieldset>
              <fieldset className="form-control">
                <label className="label" htmlFor="artifactType">Artifact Type</label>
                <select name="artifactType" id="artifactType" value={artifactDetails.artifactType} onChange={handleChange} className="select select-bordered dark:bg-gray-800 dark:text-white" required>
                  <option value="">Select Type</option>
                  <option value="Tools">Tools</option>
                  <option value="Weapons">Weapons</option>
                  <option value="Documents">Documents</option>
                  <option value="Writings">Writings</option>
                </select>
              </fieldset>
              <button className="btn bg-gradient-to-r from-stone-900 to-amber-500 btn-outline text-white" type="submit">Add Artifact</button>
            </form>
          </div>
        </article>
      </section>
    </>
  );
};

export default AddArtifact;
