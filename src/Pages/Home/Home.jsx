import Hero from "./Hero.jsx";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import CategoriesSection from "./CategoriesSection.jsx";
import EventSection from "./EventSection.jsx";
import SocialMediaSection from "./SocialMediaSection.jsx";
import CaseStudies from "./CaseStudies.jsx";
import FeaturedDonors from "./FeaturedDonors.jsx";
const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="https://i.ibb.co.com/nrgCfMk/images-7.jpg" />
        <title>Home | Artifacts Bazzar</title>
      </Helmet>
      <div className={`min-h-screen`}>
        <Hero/>
        <CategoriesSection/>
        <Outlet></Outlet>
        <SocialMediaSection/>
        <EventSection/>
        <CaseStudies/>
        <FeaturedDonors/>
      </div>
    </>
  );
};

export default Home;