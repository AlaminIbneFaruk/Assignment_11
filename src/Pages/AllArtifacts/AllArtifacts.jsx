import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Artifact from "../Artifact";

const AllArtifacts = () => {
  const Artifacts = useLoaderData();
  console.log(Artifacts);
  return (
    <>
      <Helmet>
        <title>All Artifacts| Artifacts Bazzar</title>
      </Helmet>
      <div className="grid grid-cols-3 gap-10 text-xl p-20">
        {
          Artifacts.map(artifact=><Artifact key={artifact._id} artifact={artifact}>{artifact.artifactName}</Artifact>)
        }
      </div>
    </>
  );
};

export default AllArtifacts;
