import { motion } from "framer-motion";

const artifactCaseStudies = [
  {
    id: 1,
    title: "The Discovery of the Rosetta Stone",
    description:
      "How the Rosetta Stone, discovered in 1799 by French soldiers, became the key to understanding Egyptian hieroglyphs.",
    image: "https://i.ibb.co.com/SXbNPsxM/Rosetta-Stone.jpg",
  },
  {
    id: 2,
    title: "Uncovering the Terracotta Army",
    description:
      "The accidental discovery of the Terracotta Army in 1974 by farmers in China, revealing the grandeur of Qin Shi Huang’s mausoleum.",
    image: "https://i.ibb.co.com/0pd6ZxFd/teracotta-army.webp",
  },
  {
    id: 3,
    title: "Preserving the Ancient Egyptian Papyrus Scroll",
    description:
      "The story of how a 2,000-year-old papyrus scroll was discovered in a tomb and the challenges faced in its preservation.",
    image: "https://i.ibb.co.com/gLpLhr1S/Papyrus-scroll.jpg",
  },
];

const CaseStudies = () => {
  return (
    <div className=" bg-gray-100 dark:bg-gray-900">
      <div className=" mx-auto px-4">
        <h2
          className="my-12 pt-16 text-center font-serif font-extrabold text-4xl 
          bg-gradient-to-r from-amber-500 to-stone-800 bg-clip-text text-transparent 
          uppercase tracking-wider"
        >
          Artifact Case Studies
        </h2>
        <div className="grid gap-6">
          {artifactCaseStudies.map((artifact, index) => (
            <motion.div
              key={artifact.id}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl shadow-lg ${
                index === 0 ? "col-span-full" : ""
              }`}
            >
              <div
                className={`hero bg-base-100 rounded-2xl shadow-md transition-all ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="hero-content flex-col lg:flex-row">
                  <img
                    src={artifact.image}
                    alt={artifact.title}
                    className="w-1/2 object-cover rounded-lg"
                  />
                  <div className="card-body p-4 w-2/4">
                    <h3 className="text-3xl font-bold text-neutral-content mb-8">
                      {artifact.title}
                    </h3>
                    <p className="text-neutral-content">
                      {artifact.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
