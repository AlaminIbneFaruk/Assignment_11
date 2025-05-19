import { motion } from "framer-motion";

const artifactCaseStudies = [
  {
    id: 1,
    title: "The Discovery of the Rosetta Stone",
    description:
      "How the Rosetta Stone, discovered in 1799 by French soldiers, became the key to understanding Egyptian hieroglyphs.",
    image: "https://i.ibb.co/SXbNPsxM/Rosetta-Stone.jpg",
  },
  {
    id: 2,
    title: "Uncovering the Terracotta Army",
    description:
      "The accidental discovery of the Terracotta Army in 1974 by farmers in China, revealing the grandeur of Qin Shi Huang’s mausoleum.",
    image: "https://i.ibb.co/0pd6ZxFd/teracotta-army.webp",
  },
  {
    id: 3,
    title: "Preserving the Ancient Egyptian Papyrus Scroll",
    description:
      "The story of how a 2,000-year-old papyrus scroll was discovered in a tomb and the challenges faced in its preservation.",
    image: "https://i.ibb.co/gLpLhr1S/Papyrus-scroll.jpg",
  },
  {
    id: 4,
    title: "Preserving the Ancient Egyptian Mummy",
    description:
      "An in-depth look at the discovery and preservation challenges of an ancient Egyptian mummy, highlighting modern techniques used to safeguard this priceless relic.",
    image: "https://i.ibb.co/VYgYby66/assets-task-01jtxe9v30f6qb36a1syr2kt3b-1746892328-img-0.webp",
  },
];

const CaseStudies = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="mb-12 pt-16 text-center font-serif font-extrabold text-4xl 
          bg-gradient-to-r from-stone-700 to-amber-300 bg-clip-text text-transparent 
          uppercase tracking-wider"
        >
          Artifact Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artifactCaseStudies.map((artifact, index) => (
            <motion.div
              key={artifact.id}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl shadow-lg bg-base-100 overflow-hidden flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <figure className="w-full md:w-1/2 h-56 md:h-auto bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={artifact.image}
                  alt={artifact.title}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="p-6 w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-neutral-content">
                  {artifact.title}
                </h3>
                <p className="text-neutral-content">{artifact.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
