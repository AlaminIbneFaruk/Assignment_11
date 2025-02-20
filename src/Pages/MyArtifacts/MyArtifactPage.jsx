import { Helmet } from "react-helmet";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-toastify";
import MyArtifact from "./MyArtifact";


const MyArtifactPage = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.uid) return; // Ensure user is available before fetching

    const fetchArtifacts = async () => {
      try {
        const res = await fetch(`http://localhost:5000/myartifacts/${user.uid}`);
        if (!res.ok) throw new Error("Failed to fetch artifacts");

        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Invalid response format");

        setArtifacts(data);
      } catch (err) {
        toast.error(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchArtifacts();
  }, [user?.uid]);
  console.log(artifacts.map(artifact=>(artifact)))

  return (
    <div className="container mx-auto p-5">
      <Helmet>
        <title>My Artifacts | Artifacts Bazaar</title>
        <link rel="icon" type="image/svg+xml" href="https://i.ibb.co.com/nrgCfMk/images-7.jpg" />
      </Helmet>

      <div className="text-3xl py-4 font-bold">
        <h2>My Artifacts </h2>
      </div>

      {loading ? (
        <p className="text-center text-lg font-semibold">Loading artifacts...</p>
      ) : artifacts.length === 0 ? (
        <p className="text-center text-lg text-gray-500">You have no artifacts yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {artifacts.map((artifact) => (
            <div key={artifact?._id}>
                <MyArtifact artifact={artifact} key={artifact?._id}></MyArtifact>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtifactPage;
