import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import teamData from '../data/teamData';


const Team = () => {
  return (
    <>
      <div id="team" className="team_page">
        <h1>Our Team</h1>
        <div className="mt-10 team_caro_container w-[90%] mx-[auto] overflow-hidden ">
          <Carousel
            autoPlay={true}
            centerMode={true}
            centerSlidePercentage={100}
            infiniteLoop={true}
            swipeable={true}
            showArrows={false}
            showStatus={true}
            showIndicators={false}
            useKeyboardArrows={true}
          >
 
              {teamData.map((member, index) => (
                <div className="teamCard shadow-xl" key={index}>
                  <div className="img">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div className="txt">
                    <h3>{member.name}</h3>
                    <p className="text-gray-600">{`${member.role}`}</p>
                    <div>
                      <a href={member.linkedin}>
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a href={member.instagram}>
                        <i className="fa-brands fa-square-instagram"></i>
                      </a>
                      <a href={member.facebook}>
                        <i className="fa-brands fa-square-facebook"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Team