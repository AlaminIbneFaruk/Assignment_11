const CategoriesSection = () => {
  const categories = [
    {
      title: "Tools",
      category: "Tools",
      description:
        "Explore tools used throughout history for various purposes.",
      image:
        "https://i.ibb.co/pKTzJ26/Product-5a-ba7aebae-2f82-4c9d-bbf2-cbc16e9ea8b4.jpg",
    },
    {
      title: "Artistic-Creations",
      category: "Artistic-Creations",
      description:
        "Discover artistic creations that reflect the culture and beliefs of their time.",
      image: "https://i.ibb.co.com/0CNV730/download-1.jpg",
    },
    {
      title: "Holy Artifacts",
      category: "Holy-Artifacts",
      description:
        "Learn about sacred items used in religious rituals across cultures.",
      image: "https://i.ibb.co.com/r2Cn4PhF/Egypt-Mask.jpg",
    },
    {
      title: "Documents",
      category: "Documents",
      description:
        "Uncover ancient documents that shape our understanding of history.",
      image: "https://i.ibb.co.com/gLpLhr1S/Papyrus-scroll.jpg",
    },
    {
      title: "Ceramics",
      category: "Ceramics",
      description:
        "Examine ceramics that reflect the artistry and culture of their time.",
      image: "https://i.ibb.co/DVcGRm3/images.jpg",
    },
    {
      title: "Textiles",
      category: "Textiles",
      description:
        "Discover textiles that showcase the craftsmanship of different cultures.",
      image:
        "https://i.ibb.co/hCyPTvX/220px-Kantha-Quilt-LACMA-AC1994-131-1.jpg",
    },
    {
      title: "Neumismatic",
      category: "Neumismatic",
      description:
        "Explore coins and currency that tell the story of trade and economy.",
      image: "https://i.ibb.co.com/nrgCfMk/images-7.jpg",
    },
  ];

  return (
    <div className="text-neutral-content">
      <div
        className="my-12 py-12 text-center font-serif font-extrabold text-3xl md:text-4xl 
        bg-gradient-to-r from-stone-700 to-amber-300 bg-clip-text text-transparent 
        uppercase tracking-wider "
      >
        Artifacts We Have
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-secondary text-neutral-content  dark:hover:bg-gray-700 
              hover:scale-105 transition-transform duration-300 ease-in-out 
              shadow-xl rounded-lg overflow-hidden"
          >
            {/* Image Section */}
            <figure className="bg-gray-200 p-2 flex items-center justify-center h-48 w-full overflow-hidden">
              <img
                className="object-cover h-full rounded-md"
                src={category?.image}
                alt={category?.title}
              />
            </figure>

            {/* Content Section */}
            <div className="p-4">
              <h2 className="text-white dark:text-amber-300 text-2xl font-bold">
                {category.title}
              </h2>
              <p className="text-gray-100 dark:text-gray-300 text-sm mt-2">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
