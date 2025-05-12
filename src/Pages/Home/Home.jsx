import Hero from "./Hero.jsx";
import CategoriesSection from "./CategoriesSection.jsx";
import SocialMediaShowcase from "./SocialMediaShowcase.jsx";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import EventSection from "./EventSection.jsx";
import CaseStudies from "./CaseStudies.jsx";
import FeaturedContributors from "./FeaturedContributors.jsx";

const Home = () => {

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="https://i.ibb.co.com/nrgCfMk/images-7.jpg" />
        <title>Home | Artifacts Bazzar</title>
      </Helmet>
      <div className={`min-h-screen`}>
        <Hero />
        <CategoriesSection />
        <Outlet />
        <SocialMediaShowcase />
        <EventSection />
        <CaseStudies />
        <FeaturedContributors />
      </div>
    </>
  );
};

export default Home;
