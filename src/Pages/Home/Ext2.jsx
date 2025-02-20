import { Fade } from "react-awesome-reveal";

const Ext2 = () => {
  const artifacts = [
    {
      title: "Rosetta Stone",
      description:
        "A granodiorite stele inscribed with three scripts, key to deciphering Egyptian hieroglyphs.",
    },
    {
      title: "Terracotta Army",
      description:
        "A collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China.",
    },
    {
      title: "Machu Picchu Artifacts",
      description:
        "Ancient Incan artifacts found in the lost city of Machu Picchu, revealing insights into Incan civilization.",
    },
    {
      title: "Dead Sea Scrolls",
      description:
        "Ancient Jewish texts found in the Qumran Caves near the Dead Sea, containing biblical manuscripts.",
    },
    {
      title: "Tutankhamun's Mask",
      description:
        "A gold funerary mask of the Egyptian Pharaoh Tutankhamun, showcasing exquisite craftsmanship.",
    },
    {
      title: "Antikythera Mechanism",
      description:
        "An ancient Greek analog computer used to predict astronomical positions and eclipses.",
    },
    {
      title: "Venus of Willendorf",
      description:
        "A Paleolithic figurine representing fertility and believed to be over 25,000 years old.",
    },
    {
      title: "Cave Paintings of Lascaux",
      description:
        "Prehistoric cave paintings in France, depicting animals and human figures from 17,000 years ago.",
    },
    {
      title: "Sutton Hoo Helmet",
      description:
        "An Anglo-Saxon helmet discovered in an elaborate ship burial in England, dating back to the 7th century.",
    },
    {
      title: "Code of Hammurabi",
      description:
        "A Babylonian legal code inscribed on a stele, one of the oldest written laws in human history.",
    },
  ];

  return (
    <div className="container  mx-auto p-10 m-10">
      <div
        className="text-center font-serif font-extrabold text-3xl md:text-4xl 
  bg-gradient-to-r from-amber-600 to-stone-900 bg-clip-text text-transparent 
  py-6 uppercase tracking-wider"
      >
        Timeless Treasures: Icons of History
      </div>

      <div className="flex flex-wrap justify-center gap-6 z-10 m-10">
        {artifacts.map((artifact, index) => (
          <Fade key={index}>
            <div
              className="card bg-gradient-to-b from-white to-gray-100 shadow-2xl rounded-xl h-72 pb-5 
                     flex-1 max-w-xs transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            >
              <div className="card-body flex flex-col items-center justify-center text-center p-6">
                <h2 className="card-title text-2xl font-bold text-gray-800 tracking-wide">
                  {artifact.title}
                </h2>
                <p className="text-gray-700 text-md leading-relaxed mt-3">
                  {artifact.description}
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Ext2;
