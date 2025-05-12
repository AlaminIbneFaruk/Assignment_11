import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Artifact from "../../Components/Artifact.jsx";

const AllArtifacts = () => {
  const Artifacts = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Artifacts.length > 0) {
      setLoading(false);
    }
  }, [Artifacts]);

  return (
    <>
      <Helmet>
        <title>All Artifacts | Artifacts Bazaar</title>
      </Helmet>

      <div className="py-8 bg-white dark:bg-stone-900">
        <div className="text-center font-serif font-extrabold text-3xl md:text-4xl 
          bg-gradient-to-r from-stone-700 to-amber-300 bg-clip-text text-transparent 
          py-4 uppercase tracking-wider dark:text-white">
          All Available Artifacts
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 text-xl px-5 lg:px-20 py-10 dark:text-white">
            {Artifacts.map((artifact) => (
              <Artifact key={artifact._id} artifact={artifact} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllArtifacts;