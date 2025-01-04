

import { Link } from "react-router-dom";
import { MdOutlineWavingHand } from "react-icons/md";
// import { Hand, Ampersand } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { kbachKhmer } from "../assets/images";

const Home = () => {
  return (
    <div className="container_home">
      <div className="center_home_container">
        <main>
          <section>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <h1 className="welcome">Welcome</h1>
            </motion.div>
          </section>

          <div className="art-card">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="art-img"
            >
              <img src={kbachKhmer} alt="sokchheg-image-card" />
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="art-info"
            >
              <h2 className="hey">
                Hey
                <MdOutlineWavingHand className="waveHand" />, I am
              </h2>
              <h1 className="myname">
                VANG<span>SOKCHHENG</span>
              </h1>
              <p className="bio">
                {/* <span className="skill">|<Ampersand /></span> */}
                software
                <span>•</span>
                web developer
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="art-btn"
            >
              <Link id="btn-art" className="" to="/feature">
                More
              </Link>
              <Link id="btn-art" className="" to="/contact">
                Contact
              </Link>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
