import { motion } from "framer-motion";
import PropTypes from "prop-types";

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
  rsvpLink,
  imageUrl,
}) => {
  return (
    <motion.div
      className="card bg-base-300 shadow-xl hover:scale-105 transition transform duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <figure>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-2xl font-bold text-neutralText">{title}</h3>
        <p className="text-gray-500">
          {date} | {time}
        </p>
        <p className="text-gray-600">Location: {location}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="card-actions justify-end">
          <a
            href={rsvpLink}
            className="btn btn-warning lg:mt-4 bg-gradient-to-r from-stone-900 to-amber-500 text-white font-semibold"
          >
            RSVP Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const EventSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const events = [
    {
      title: "Textile Traditions",
      date: "May 20, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Ancient Bazaar Hall 1",
      description: "Explore traditional textiles from around the world.",
      rsvpLink: "#",
      imageUrl:
        "https://i.ibb.co.com/B08fXMP/Textiles-Gallery-II-TRADITON-INNOVATION-3-800x602.jpg",
    },
    {
      title: "Pottery Workshop",
      date: "June 5, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Ancient Bazaar Workshop Area",
      description: "Hands-on pottery making with local artisans.",
      rsvpLink: "#",
      imageUrl: "https://i.ibb.co.com/DDwKpHsq/Pottery-Museum.webp",
    },
    {
      title: "Spice Route Tour",
      date: "June 18, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Bazaar Market Square",
      description: "Guided tour through the historic spice trade route.",
      rsvpLink: "#",
      imageUrl: "https://i.ibb.co.com/mr14DcdL/Spice-Route.jpg",
    },
  ];

  return (
    <section className="p-4 rounded-2xl shadow-lg">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-16 text-center font-serif font-extrabold text-4xl md:text-4xl 
        bg-gradient-to-r from-stone-600 to-amber-300 bg-clip-text text-transparent 
        uppercase tracking-wider"
      >
        Upcoming Events
      </motion.h2>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </motion.div>
    </section>
  );
};
EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rsvpLink: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default EventSection;
