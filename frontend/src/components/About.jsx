import team from '../images/team.JPG'


const About = () => {
  return (
    <>
      <div id="about" className="about_page ">
        <div className="about_card">
          <div className="img_about">
            <img src={team} alt="about" />
          </div>
          <div className="abt_card_content">
            <h1>About Us</h1>
            <p className=" text-gray-600">
              {" "}
              GeeksforGeeks student Chapters will provide students with various
              events and webinars on coding or placements. Students may get
              internship opportunities at GeeksforGeeks. Along with all this
              students can get exclusive discounts on GFG courses. We are a
              group of enthusiasts trying to spread the idea of One for All and
              All for One. We inspire students to practice coding, get
              acquainted with algorithms and enjoy the concepts in a full
              fledged way. We are putting immense efforts in increasing the
              standards of our society by proposing new ideas for the benefit of
              our fellow mates and for our growth as well
            </p>
            <a
              className="w-[100%] text-center bg-[#2f8d46] border-solid border border-transparent text-m text-white border-solid rounded-xl py-2 px-7 hover:bg-transparent hover:text-[#2f8d46]  hover:border-[#2f8d37]"
              href="#team"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About