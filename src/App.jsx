import profilePic from "./assets/profile-pic.png";
import profilePicShine from "./assets/profile-pic-shine.png";
import "./index.css";
import { useState } from "react";

const DescItem = ({ title, content, currIdx, viewIdx, setViewIdx }) => {
  const DescContent = content.map(({ name, date, link, desc }) => {
    return (
      <li className="content-item">
        <div className="content-title">{name}</div>
        <div className="content-date">{date}</div>
        <div className="content-info">{desc}</div>
        {link ? (
          <a className="content-link" href={link} target="_blank">
            view
          </a>
        ) : (
          ""
        )}
      </li>
    );
  });

  return (
    <li
      className={
        viewIdx === currIdx
          ? `active desc-item item-${currIdx}`
          : viewIdx !== -1
          ? "disable desc-item"
          : "desc-item"
      }
      onClick={() => {
        setViewIdx(currIdx);
      }}
    >
      {title}
      <ul className="content">{DescContent}</ul>
    </li>
  );
};

function App() {
  const [isHoverPic, setHoverPic] = useState(false);
  const profileJobTxt = "FRONTEND DEVELOPER ";

  const totalProfileJobTxt = 10;
  let ProfileJob = [];
  for (let index = 0; index < totalProfileJobTxt; index++) {
    ProfileJob = [...ProfileJob, profileJobTxt];
  }

  const [viewIdx, setViewIdx] = useState(-1);

  const profileDescTxt = [
    {
      title: "EDUCATION",
      content: [
        {
          name: "Bina Nusantara University",
          date: "2018-2022",
          desc: "Computer Science",
        },
      ],
    },
    {
      title: "WORK EXPERIENCE",
      content: [
        {
          name: "Teaching Assistant",
          desc: "Software Laboratory Center",
          date: "Feb 2019 - Mar 2022",
        },
        {
          name: "Frontend Engineer Intern",
          desc: "LINE Corp",
          date: "Des 2021 - Mar 2022",
        },
        {
          name: "Frontend Engineer",
          desc: "LINE Corp",
          date: "Mar 2022 - Jun 2022",
        },
      ],
    },
    {
      title: "SKILLS",
      content: [
        { name: "Basic Web", date: "", desc: "HTML5, CSS3, Javascript" },
        {
          name: "Framework/Library",
          date: "",
          desc: "React, Gatsby, NextJs, Vue, Nuxt, Vuetify, Bootstrap, Tailwind, Jquery",
        },
        { name: "Others", date: "", desc: "Firebase, MySQL, Laravel" },
      ],
    },
    {
      title: "ACHIEVEMENT",
      content: [
        {
          name: "Candidate of Best Performing Assistant",
          date: "2019",
          link: "https://drive.google.com/file/d/1O75jbGpawVD_JaBq4Tm27pU0TJrdiyfp/view?usp=sharing",
        },
        {
          name: "Candidate of Best Performing Assistant",
          date: "2021",
          link: "https://drive.google.com/file/d/1T4Er4o0EU_8z0xZPB9xmPTQikbCAxu3C/view?usp=sharing",
        },
        {
          name: "Diploma of Best Performing Assistant",
          date: "2022",
          link: "https://drive.google.com/file/d/1QdT1mN9fYtLkVetvH-tOP165h9B2_xs2/view?usp=sharing",
        },
      ],
    },
    {
      title: "CERTIFICATE",
      content: [
        {
          name: "Javascript",
          date: "",
          link: "https://www.sololearn.com/certificates/CT-0WDNV5FM",
          esc: "",
        },
        {
          name: "Web Development Fundamentals",
          date: "",
          link: "https://www.sololearn.com/certificates/CT-XVSKPEEP",
          desc: "",
        },
        {
          name: "Responsive Web Design",
          date: "",
          link: "https://www.sololearn.com/certificates/CT-QCJMWYHA",
          desc: "",
        },
        {
          name: "JQuery",
          date: "",
          link: "https://www.sololearn.com/certificates/CT-WTECHJCE",
          desc: "",
        },
        {
          name: "React + Redux",
          date: "",
          link: "https://www.sololearn.com/certificates/CT-XFA5AZ0G",
          desc: "",
        },
      ],
    },
    {
      title: "PROJECTS",
      content: [
        {
          name: "Anemone7",
          link: "http://anemone7.herokuapp.com/",
          desc: "Todos app with vanilla js",
        },
        {
          name: "Xtream Chaser",
          link: "https://xtreme-chaser.herokuapp.com/",
          desc: "Game app landing page",
        },
        {
          name: "Covidia",
          link: "https://covidia.herokuapp.com/",
          desc: "Covid19 web information",
        },
      ],
    },
  ];

  const DescItems = profileDescTxt.map(({ title, content }, index) => {
    return (
      <DescItem
        title={title}
        content={content}
        key={index}
        currIdx={index}
        viewIdx={viewIdx}
        setViewIdx={setViewIdx}
      />
    );
  });

  return (
    <div className="body">
      <div className="wrapper ">
        <div className="profile-intro">
          <div className="profile-intro-desc">
            <div className="profile-job-out">{ProfileJob}</div>
            <div className="profile-pic-container">
              <div className="profile-job-in">{ProfileJob}</div>
              <img
                src={isHoverPic ? profilePicShine : profilePic}
                alt="profile picture"
                className="profile-pic"
                onMouseEnter={() => setHoverPic(true)}
                onMouseOut={() => setHoverPic(false)}
              />
            </div>
            <div className="profile-name">Muhammad At Thariq Filardi</div>
          </div>
          <div className="profile-social">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/muhammad-filardi/"
            >
              <i className="uil uil-linkedin"></i>
            </a>
            <a target="_blank" href="https://github.com/crazould">
              <i className="uil uil-github"></i>
            </a>
            <a href="mailto:crazould@gmail.com">
              <i className="uil uil-envelope"></i>
            </a>
          </div>
        </div>
        <div className="profile-desc-wrapper">
          <div
            className="profile-desc-header"
            onClick={() => {
              setViewIdx(-1);
            }}
          >
            {viewIdx === -1 ? "About Me" : "Back"}
          </div>
          <ul className="profile-desc">{DescItems}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
