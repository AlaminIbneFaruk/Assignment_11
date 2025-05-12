import { Helmet } from "react-helmet";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import MyArtifact from "./MyArtifact";

const MyArtifactPage = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.uid) return;

    const fetchArtifacts = async () => {
      try {
        const res = await fetch(`https://assignment-11-server-nu-steel.vercel.app/myartifacts/${user.uid}`);
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

  return (
    <div className="container mx-auto p-5">
      <Helmet>
        <title>My Artifacts | Artifacts Bazaar</title>
        <link rel="icon" type="image/svg+xml" href="https://i.ibb.co.com/nrgCfMk/images-7.jpg" />
      </Helmet>

      <div className="text-3xl py-4 font-bold">
        <h2>My Artifacts</h2>
      </div>

      {loading ? (
        <motion.div
          className="flex justify-center items-center h-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader bg-gradient-to-r from-stone-900 to-amber-500 p-4 rounded-full animate-spin">
            Loading artifacts...
          </div>
        </motion.div>
      ) : artifacts.length === 0 ? (
        <p className="text-center text-lg text-gray-500">You have no artifacts yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {artifacts.map((artifact) => (
            <div key={artifact?._id}>
              <MyArtifact artifact={artifact} key={artifact?._id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtifactPage;
