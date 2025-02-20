import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Artifact from "../../Components/Artifact.jsx";

const AllArtifacts = () => {
  const Artifacts = useLoaderData();
  console.log(Artifacts);
  return (
    <>
      <Helmet>
        <title>All Artifacts| Artifacts Bazzar</title>
      </Helmet>

      <div>
        <div className="text-center font-serif font-extrabold text-3xl md:text-4xl 
  bg-gradient-to-r from-amber-600 to-stone-900 bg-clip-text text-transparent 
  py-4 uppercase tracking-wider">
          All Available Artifacts
        </div>
        <div className="grid grid-cols-3 gap-10 text-xl px-20 py-10">
          {Artifacts.map((artifact) => (
            <Artifact key={artifact._id} artifact={artifact}>
            </Artifact>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllArtifacts;
