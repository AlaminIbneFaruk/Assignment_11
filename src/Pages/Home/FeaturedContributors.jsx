import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa"; // Import the profile icon

const contributors = [
  {
    name: "John Doe",
    role: "Platinum Donor",
    bio: "A passionate supporter of historical preservation.",
    contributions: ["Donated for artifact restoration", "Funded exhibition"],
    image: "https://i.ibb.co/SwnbRg3r/John.webp",
  },
  {
    name: "Jane Smith",
    role: "Gold Donor",
    bio: "Dedicated to supporting ancient art collections.",
    contributions: [
      "Sponsored artifact documentation",
      "Provided funding for conservation",
    ],
    image: "https://i.ibb.co/Gftk2p7Z/Jane.jpg",
  },
  {
    name: "Alex Brown",
    role: "Silver Donor",
    bio: "Committed to the preservation of historical manuscripts.",
    contributions: [
      "Provided funding for manuscript restoration",
      "Organized educational programs",
    ],
    image: "", // No image for this donor
  },
];

const FeaturedContributors = () => {
  return (
    <section className="p-8 bg-base-100">
      <h2
        className="my-16 text-center font-serif font-extrabold text-4xl md:text-4xl 
        bg-gradient-to-r from-stone-700 to-amber-300 bg-clip-text text-transparent 
         uppercase tracking-wider"
      >
        Featured Donors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contributors.map((donor, index) => (
          <motion.div
            key={index}
            className="card card-side bg-base-300 shadow-xl p-4 rounded-2xl hover:shadow-2xl transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full md:w-1/2 lg:w-1/3">
              {/* Show the profile icon if no image is available */}
              {donor.image ? (
                <img
                  src={donor.image}
                  alt={donor.name}
                  className="rounded-lg w-full h-full object-cover mb-4"
                />
              ) : (
                <div className="w-full h-full bg-base-100 rounded-lg flex items-center justify-center mb-4">
                  <FaUserCircle className="text-6xl text-neutral-content" />
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 pl-4 text-neutral-content">
              <h3 className="text-xl font-semibold">{donor.name}</h3>
              <p className="text-sm text-neutral-content">{donor.role}</p>
              <p className="mt-2">{donor.bio}</p>
              <ul className="mt-3 list-disc list-inside">
                {donor.contributions.map((item, idx) => (
                  <li key={idx} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedContributors;
