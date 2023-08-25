import React from "react";

import RadientOnes from "../components/Home/RadientOnes/RadientOnes";
import Radients from "../components/Home/Radients/Radients";

const Home = () => {
  return (
    <>
      <div className="mainContainer ">
        <div className="mainWrapper">
          {" "}
          <RadientOnes />
          <Radients />
        </div>
      </div>
    </>
  );
};

export default Home;
