import profilePic from "./assets/profile-pic.png";
import profilePicShine from "./assets/profile-pic-shine.png";
import "./index.css";
import { useState } from "react";

const DescItem = ({ title, currIdx, viewIdx, setViewIdx }) => {
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
        console.log({ currIdx, viewIdx });
        setViewIdx(currIdx);
      }}
    >
      {title}
      <ul className="content">
        <li>asdfasdf</li>
        <li>asdfasdf</li>
        <li>asdfasdf</li>
      </ul>
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
    "EDUCATION",
    "WORK EXPERIENCE",
    "SKILLS",
    "ACHIEVEMENT",
    "CERTIFICATE",
    "PROJECTS",
  ];

  const DescItems = profileDescTxt.map((title, index) => {
    return (
      <DescItem
        title={title}
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
