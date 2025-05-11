import Hero from "./Hero.jsx";
import Ext1 from "./Ext1.jsx";
import Ext2 from "./Ext2.jsx";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="https://i.ibb.co.com/nrgCfMk/images-7.jpg" />
        <title>Home | Artifacts Bazzar</title>
      </Helmet>
      <div className="">
        <Hero/>
        <Outlet></Outlet>
        <Ext1/>
        <Ext2/>
      </div>
    </>
  );
};

export default Home;