import React, { useEffect } from "react";
import { Underline, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import Portfolio from './Portfolio';

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
            <h1>About Me</h1>
          </section>
          <section>
            <Portfolio />
          </section>
        </div>
      </div>
    </>
  );
};

export default About;

/*

about content

1. background

2. education
  year 
  graduate
  univercity

3. ...

experiences 
  year 
    position
  current position


skills

- graph
website 80%
software 75%
API 60%
cyber security -999999%

- cv | cover latter


*/
