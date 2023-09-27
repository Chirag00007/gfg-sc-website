import React from "react";
import logo from "../images/logo.png";
import Typewriter from "typewriter-effect";
import code from '../images/code.png'
import code2 from '../images/code2.png'
import About from "./About";
import Career from "./Career";
import Team from "./Team";
import Events from "./Events";
import Contact from "./Contact";
import Particles from "./Particles";
import UpComingEvents from "./UpComingEvents";
// import CCPDCollab from "./CCPDCollab";

const Home = () => {
  return (
    <>
      <div className="home_page">
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <Particles />
        </div>
        <div className="left_content">
          <h1 className="text-4xl font-bold space-y-2 ">
            Welcome to <br />
            <p className="text-[#2f8d46] ">GeeksforGeeks Student</p>{" "}
            <Typewriter
              options={{
                strings: ["Chapter of CGC Jhanjeri", "Chapter of Innovations"],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </h1>
          <p className="text-sm text-gray-600 mt-5 w-[80%]">
            {" "}
            Within the GFG Student Chapter at CGC-J, our core ethos revolves
            around the spirit of communal collaboration. Here, developers,
            designers, machine learning aficionados, and skilled technical
            content creators converge in a shared space, harmoniously
            cultivating knowledge and development through their engagement with
            the broader community.
          </p>
          <div className="buttons mt-8 gap-5 flex justify-start">
            <a
              className="w-[150px] text-center bg-white border-[#2f8d46] border-solid  text-m text-[#2f8d46] border rounded-3xl py-2 px-7 hover:bg-[#2f8d37] hover:text-white "
              href="#team"
            >
              Meet Our team
            </a>
            <a
              className="w-[150px] text-center bg-[#2f8d46] border-solid border border-transparent text-m text-white border-solid rounded-3xl py-2 px-7 hover:bg-transparent hover:text-[#2f8d46]  hover:border-[#2f8d37]"
              href="#event"
            >
              Events & Activities
            </a>
          </div>
        </div>
        <div className="home_logo">
          <img src={logo} alt="image" />
          <div className="floating_box shadow-xl">
            <img src={code} alt="code" />{" "}
            <h4> Bring innovation in your code.</h4>
          </div>
          <div className="floating_box2 shadow-xl">
            <img src={code2} alt="code" />{" "}
            <h4> Grow your technical mindset.</h4>
          </div>
        </div>
      </div>
      <About />
      <Career />
      <UpComingEvents />
      <Team />
      <Events />
      <Contact />
    </>
  );
};

export default Home;
