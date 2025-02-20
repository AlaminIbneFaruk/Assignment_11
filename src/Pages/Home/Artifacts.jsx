import { useLoaderData } from "react-router-dom";
import Artifact from "../../Components/Artifact.jsx";


const Artifacts = () => {
  const Artifacts=useLoaderData();
  return (
    <div className="text-center text-5xl m-20">
      This is Artifacts
      <div className="grid grid-cols-3 gap-10 text-xl m-20">{Artifacts.map(artifact=><Artifact artifact={artifact} key={artifact._id} >{artifact.artifactName}</Artifact>)}</div>
    </div>
  );
};

export default Artifacts;