import { Link } from "react-router-dom";

// Symbold
// &#34; = ""
// &#39; = '
// &#38; = &

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="banner"></div>
      <section>
        <div className="wrapper">
          <ul>

            {/* About Me */}
            <li id="h-line">
              <h2><span>🌈</span>Bio</h2>
              <p>I&#39;m a creative thinker, a problem solver, and an avid learner, always exploring new trends and techniques in design. When I'm not pushing pixels, you can find me with a sketchbook, capturing the world or lost in the pages of a good design book.</p>
            </li>

            {/* Education */}
            <li id="h-line">
              <h2><span>🎓</span>Education</h2>
              <ul>
                <h3>Master of Fine Arts in Design - Rhode Island School of Design | 2013</h3>
                <li>Specialized in Digital + Media</li>
                <li>Thesis: &#34;Interactivity and User Engagement in Digital Platforms&#34;</li>
              </ul>
              <ul>
                <h3>Bachelor of Arts in Graphic Design - University of California, Berkeley | 2011</h3>
                <li>Graduated with Honors</li>
                <li>Relevant coursework:
                  <ul>
                    <li>Typography</li>
                    <li>Web Design</li>
                    <li>Digital Photography</li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Experiences */}
            <li id="h-line">
              <h2><span>💼</span>Experience</h2>
              <ul>
              <h3>Senior UX/UI Designer - Creative Minds Inc. | June 2018 - Present</h3>
                <li>Lead the design of intuitive user interfaces for mobile and web applications, enhancing user satisfaction and engagement.</li>
                <li>Collaborate with cross-functional teams to create cohesive brand experiences across all platforms.</li>
                <li>Mentor junior designers, fostering a collaborative and innovative design culture.</li>
              </ul>
              <ul>
                <h3>Graphic Designer - BrandWorks Agency | Jan 2014 - May 2018</h3>
                <li>Developed brand identities, including logos, typography, and color schemes, for over 30 clients.</li>
                <li>Produced marketing materials, digital ads, and promotional content, resulting in a 25% increase in client engagement for key accounts.</li>
              </ul>
            </li>

            {/* Projects */}
            <li>
              <h2><span>🚀</span>Projects</h2>
              <ul>
                <h3>&#34;EcoLife&#34; Mobile App</h3>
                <li>An environmentally-focused app designed to encourage sustainable living through daily challenges, tips, and community engagement.</li>
                <li>Role: Lead Designer</li>
                <li>Tools: Sketch, InVision, Adobe Creative Suite</li>
              </ul>
              <ul>
                <h3>&#34;Brand Reimagined&#34; - Cafe Fresco</h3>
                <li>A complete rebranding project for a local café, including logo redesign, packaging, and in-store visuals, resulting in a 40% increase in foot traffic.</li>
                <li>Role: Brand Strategist & Designer</li>
                <li>Tools: Illustrator, Photoshop, Procreate</li>
              </ul>
            </li>

            {/* Skills */}
            <li>
              <h2><span>🔨</span>Skills</h2>
              <ul>
                <li>User Experience (UX) Design</li>
                <li>User Interface (UI) Design</li>
                <li>Branding & Visual Identity</li>
                <li>Adobe Creative Suite</li>
                <li>Sketch & InVision</li>
                <li>Prototyping & Wireframing</li>
              </ul>
            </li>
          </ul>
          
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
