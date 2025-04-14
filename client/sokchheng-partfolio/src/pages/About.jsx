import React, { useEffect } from "react";
import { Underline, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import Portfolio from './Portfolio';
import AvatarModel from "../components/models/AvatarModel";
import MyModel from "../components/models/MyModel";

const About = () => {
  useEffect(()=>{
    document.title = "About | Sokchheng";
  }, []);
  return (
    <>
      <div className="about_container">
        <div className="main">
          <section className="aboutHeder">
            <div className="about-icon">
              <UserRound className="UserRound" />
            </div>
            <h1>About</h1>
          </section>

          <section>
            {/* <Portfolio /> */}
            {/* <AvatarModel /> */}
            <MyModel />
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
