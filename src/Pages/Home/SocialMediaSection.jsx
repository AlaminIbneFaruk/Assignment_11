import PropTypes from "prop-types";

const posts = [
  {
    id: 1,
    platform: "Instagram",
    user: "museum",
    likes: "1,532",
    image:
      "https://i.ibb.co/VYgYby66/assets-task-01jtxe9v30f6qb36a1syr2kt3b-1746892328-img-0.webp",
    text: "An exceptional example of Ancient Egyptian sculpture.",
    hashtag: "#artifacts",
  },
  {
    id: 2,
    platform: "Twitter",
    user: "museum",
    text: "We're hosting a lecture on ancient pottery this Saturday at 2PM! Don't miss the opportunity to learn from our guest expert.",
    hashtag: "#museumlecture #pottery",
  },
  {
    id: 3,
    platform: "Twitter",
    user: "gera71x",
    text: "Had an amazing time at the museum today!",
    hashtag: "#museum #mammoth",
  },
  {
    id: 4,
    platform: "Instagram",
    user: "gera71x",
    image: "https://i.ibb.co/cXCyF5mq/Mamoth-Skeleton.webp",
    text: "",
    hashtag: "",
  },
  {
    id: 5,
    platform: "Instagram",
    user: "museum",
    image: "https://i.ibb.co/nNc0fZwd/Ancient-Bowl.webp",
    text: "",
    hashtag: "",
  },
  {
    id: 6,
    platform: "Skype",
    user: "museum",
    likes: "1,532",
    text: "An exceptional example of Ancient Egyptian sculpture.",
    hashtag: "#artifacts",
  },
  {
    id: 7,
    platform: "Instagram",
    user: "museum",
    likes: "1,532",
    text: "An exceptional example of Ancient Egyptian ceramic bowl.",
    hashtag: "#artifacts",
    image:
      "https://i.ibb.co/VYgYby66/assets-task-01jtxe9v30f6qb36a1syr2kt3b-1746892328-img-0.webp",
  },
  {
    id: 8,
    platform: "Pinterest",
    user: "Askin",
    likes: "123,224",
    text: "An exceptional example of Ancient Egyptian ceramic bowl.",
    hashtag: "#artifacts",
    image: "https://i.ibb.co/spj4vvyc/Ancient-Bowl-Historic.webp",
  },
];

const SocialMediaCard = ({ post }) => {
  return (
    <div className="card w-full bg-base-300 shadow-lg rounded-lg mb-4 break-inside-avoid">
      <div className="card-body p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-xl font-bold text-base-content">{post.user}</div>
          <span className="badge badge-outline">{post.platform}</span>
        </div>
        {post.image && (
          <figure className="rounded-xl overflow-hidden mb-3">
            <img
              src={post.image}
              alt="post"
              className="w-full h-auto object-cover"
            />
          </figure>
        )}
        <p className="text-base-content">{post.text}</p>
        {post.hashtag && (
          <p className="text-primary mt-1 font-semibold">{post.hashtag}</p>
        )}
        {post.likes && (
          <p className="text-sm text-gray-400 mt-1">{post.likes} likes</p>
        )}
      </div>
    </div>
  );
};

SocialMediaCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    platform: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    likes: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    hashtag: PropTypes.string,
  }).isRequired,
};

const SocialMediaShowcase = () => {
  return (
    <div className="my-4 py-8 px-4 bg-base-100 text-base-content">
      <h1
        className="text-center font-serif font-extrabold text-3xl md:text-4xl mb-8 
        bg-gradient-to-r from-amber-500 to-stone-800 bg-clip-text text-transparent 
        uppercase tracking-wider"
      >
        Social Media Showcase
      </h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {posts.map((post) => (
          <SocialMediaCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaShowcase;
