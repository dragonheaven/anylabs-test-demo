import React from "react";
import Todo from "../components/Todo";
import Progress from "../components/Progress";
import Done from "../components/Done";

import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="home d-flex flex-column">
        <div className="mb-3">
          <h1 className="title">
            Anyway Labs Test Project
          </h1>
          <p className="desc">Just some good deeds</p>
        </div>
        <div className="row flex-1">
          <div className="col-lg-4">
            <Todo />
          </div>
          <div className="col-lg-4">
            <Progress />
          </div>
          <div className="col-lg-4">
            <Done />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
