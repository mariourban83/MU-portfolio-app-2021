import React from "react";
import {
  DiBootstrap,
  DiCss3,
  DiHeroku,
  DiHtml5,
  DiJavascript1,
  DiLinux,
  DiMongodb,
  DiMysql,
  DiReact,
  DiSass,
} from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaGit,
  FaGoogle,
  FaNodeJs,
  FaPython,
  FaVuejs,
} from "react-icons/fa";
import {
  SiFlask,
  SiDjango,
  SiVisualstudiocode,
  SiFirebase,
} from "react-icons/si";

const Home = () => {
  return (
    <>
      <div className="row fade-in-4s">
        <section className="about">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/profilePic.png`}
            alt="myself"
            loading="lazy"
          />
          <p>
            <span>Hi, I'm Mario, </span>
          </p>
          <p>
            multi-talented human. Recently, in 2020, I was awarded Diploma in Full Stack Web Development from
            <a href="https://www.codeinstitute.net" > Code Institute Ireland 
            </a>  where I graduated with
            <a href="https://www.credential.net/674958dd-cd65-4c65-b5af-ab88aff51d9e"> First Class Honour.
            </a>
          </p>
          <p>
            What I do? Most of my time I design and build user-friendly, easy to use, responsive web
            applications. My preffered programming languages are 
            Javascript and Python with React and Django, but I can quickly learn & adapt other technologies when necessary.
          </p>
          <p>
            I don’t like to define myself by the work I’ve done. I define myself
            by the work I want to do. Skills can be taught, personality is
            inherent. I prefer to keep learning new things daily, continue
            challenging myself, and do interesting things that matter to me...
          </p>
          <h1>Now, bit more about me...⤵ </h1>
        </section>
        <section className="soft-hard-skills">
          <h1> My Soft skills</h1>
          <ul>
            <li>✔ Team player</li>
            <li>✔ Collaborative mindset and open-minded</li>
            <li>✔ Motivated to take on new challenges</li>
            <li>✔ Strong sense for general awareness & self awareness</li>
            <li>✔ Open and adoptable to changes and unexpected obstacles</li>
            <li>✔ Self-organized and able to work independently</li>
            <li>✔ Good at stress management</li>
          </ul>
          <h1> My Hard skills</h1>
          <ul>
            <li>✔ User-centric mindset for problem solving</li>
            <li>✔ Ability to work and juggle between multiple projects</li>
            <li>✔ Diligence and attention to detail</li>
            <li>
              ✔ High self-motivation in working individually or whithin a teams
            </li>
            <li>✔ Understanding the overall market and competitive space</li>
            <li>✔ Inter-personal and organizational skills</li>
            <li>✔ Foundation in Marketing and Advertising</li>
          </ul>
        </section>

        <section className="tech-skills">
          <h1>My Technical Skills</h1>
          <br />
          <h2>Programming & Languages </h2>
          <ul>
            <li>
              <span>
                <DiHtml5 />
              </span>{" "}
              Html5
            </li>
            <li>
              <span>
                <DiCss3 />
              </span>{" "}
              Css3
            </li>
            <li>
              <span>
                <DiBootstrap />
              </span>{" "}
              Bootstrap
            </li>
            <li>
              <span>
                <DiSass />
              </span>{" "}
              Sass
            </li>
            <li>
              <span>
                <FaPython />
              </span>{" "}
              Python
            </li>
            <li>
              <span>
                <DiJavascript1 />
              </span>{" "}
              Javascript
            </li>
            <li>
              <span>
                <DiMysql />
              </span>{" "}
              MySQL
            </li>
            <li>
              <span>
                <DiMongodb />
              </span>{" "}
              MongoDB
            </li>
          </ul>
          <br />
          <h2>Framework & Libraries</h2>
          <ul>
            <li>
              <span>
                <SiDjango />
              </span>{" "}
              Django
            </li>
            <li>
              <span>
                <SiFlask />
              </span>{" "}
              Flask
            </li>
            <li>
              <span>
                <DiReact />
              </span>{" "}
              React JS
            </li>
            <li>
              <span>
                <FaVuejs />
              </span>{" "}
              Vue JS
            </li>
          </ul>
          <br />
          <h2>Tools</h2>
          <ul>
            <li>
              <span>
                <SiVisualstudiocode />
              </span>{" "}
              VScode
            </li>
            <li>
              <span>
                <DiLinux />
              </span>{" "}
              Linux
            </li>
            <li>
              <span>
                <FaDocker />
              </span>{" "}
              Docker
            </li>
            <li>
              <span>
                <FaNodeJs />
              </span>{" "}
              NodeJS
            </li>
            <li>
              <span>
                <FaGit />
              </span>{" "}
              Git
            </li>
            <li>
              <span>
                <DiHeroku />
              </span>{" "}
              Heroku
            </li>
          </ul>
          <h2>Cloud Tech</h2>
          <ul>
            <li>
              <span>
                <FaGoogle />
              </span>{" "}
              Google Cloud Platform
            </li>
            <li>
              <span>
                <FaAws />
              </span>{" "}
              Amazon Web Services
            </li>
            <li>
              <span>
                <SiFirebase />
              </span>{" "}
              Firebase
            </li>
          </ul>
        </section>
        <section className="section-weaknesses">
          <h1>My Weaknesses</h1>
          <ul>
            <li>Making decisions quickly or too hastily</li>
            <li>Sometimes difficulty seeing things from outside my own perspective</li>
            <li>Lack of motivation if I’m not being challanged</li>
          </ul>
        </section>
        <section className="section-hobby">
          <h1>and finally, things I love</h1>
          <ul>
            <li>Learning new things </li>
            <li>Spending time in the nature with family and my dogs 🐕</li>
            <li>Animals, Sport and my DIY projects.</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
