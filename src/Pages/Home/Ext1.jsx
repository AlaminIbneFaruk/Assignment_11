const Ext1 = () => {
  const steps = [
    {
      title: "Step 1: Select Your Artifact",
      description:
        "Choose an artifact to explore its historical significance and origin.",
      image:
        "https://i.ibb.co/pKTzJ26/Product-5a-ba7aebae-2f82-4c9d-bbf2-cbc16e9ea8b4.jpg",
    },
    {
      title: "Step 2: Learn About Its History",
      description:
        "Dive deep into the artifact's historical background and cultural impact.",
      image: "https://i.ibb.co/51mPpqf/MIRP0590-1.jpg",
    },
    {
      title: "Step 3: Analyze Its Craftsmanship",
      description:
        "Examine the unique design and techniques used in creating the artifact.",
      image: "https://i.ibb.co/V9HS65q/images-10.jpg",
    },
    {
      title: "Step 4: Discover Its Journey",
      description:
        "Trace the artifact's journey through time and its significance today.",
      image: "https://i.ibb.co/QdL3hnn/images-9.jpg",
    },
    {
      title: "Step 5: Share Your Insights",
      description:
        "Discuss and share your newfound knowledge with fellow enthusiasts.",
      image:
        "https://i.ibb.co/hCyPTvX/220px-Kantha-Quilt-LACMA-AC1994-131-1.jpg",
    },
    {
      title: "Step 6: Plan Your Visit",
      description:
        "Plan a visit to museums or historical sites to see the artifacts in person.",
      image: "https://i.ibb.co/hLxRmQw/1641894305093-ky9x6lht-256x256.png",
    },
  ];

  return (
    <div>
      <div
        className="text-center font-serif font-extrabold text-3xl md:text-4xl 
  bg-gradient-to-r from-amber-600 to-stone-900 bg-clip-text text-transparent 
  py-6 uppercase tracking-wider"
      >
        Artifact Discovery Journey
      </div>
      <div className="flex justify-center">
        <div className="scroll-container overflow-hidden relative w-full">
          <div className="scroll-content flex animate-scroll">
            {steps.map((step, index) => (
              <div
                key={index}
                className="hero bg-gradient-to-bl from-amber-500  to-stone-800
                 shadow-xl lg:mb-0 w-80 mx-4 rounded-lg"
              >
                <div className="hero-content flex-col w-80 p-6 bg-black bg-opacity-40">
                  <h2 className="card-title text-white text-2xl font-bold">
                    {step.title}
                  </h2>
                  <p className="text-white">{step.description}</p>
                </div>
                <figure>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-56 object-cover rounded-b-lg"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ext1;
