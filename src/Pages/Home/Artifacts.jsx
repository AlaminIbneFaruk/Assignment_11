import { useLoaderData, useNavigate } from "react-router-dom";
import Artifact from "../../Components/Artifact.jsx";


const Artifacts = () => {
  const Artifacts=useLoaderData();

  const navigate = useNavigate();
  const handleView=()=>{
    navigate(`/all-artifacts`);
  }
  return (
    <div className="text-center text-5xl m-20">
      <div className="text-center font-serif font-extrabold text-4xl md:text-4xl 
  bg-gradient-to-r from-amber-600 to-stone-900 bg-clip-text text-transparent 
  py-6 uppercase tracking-wider">Explore Unique Artifacts</div>
      <div className="grid grid-cols-3 gap-10 text-xl m-20">{Artifacts.map(artifact=><Artifact artifact={artifact} key={artifact._id} >{artifact.artifactName}</Artifact>)}</div>
      <div>
        <button
        onClick={handleView} 
        className="btn btn-warning bg-gradient-to-r from-stone-900 to-amber-500 text-white font-semibold"
        >View More</button>
      </div>
    </div>
  );
};

export default Artifacts;