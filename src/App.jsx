import profilePic from './assets/profile-pic.png'
import './index.css'

function App() {

  return (
    <div className="body">
      <div className="wrapper ">
        <div className="profile-intro">
          <div className="profile-intro-desc">
            <div className="profile-job-out">
              FRONTEND DEVELOPER
              FRONTEND DEVELOPER
              FRONTEND DEVELOPER
              FRONTEND DEVELOPER
              FRONTEND DEVELOPER
              FRONTEND DEVELOPER
              FRONTEND DEVELOPER
            </div>
            <div className="profile-pic-container">
              <div className="profile-job-in">
                FRONTEND DEVELOPER
                FRONTEND DEVELOPER
                FRONTEND DEVELOPER
                FRONTEND DEVELOPER
                FRONTEND DEVELOPER
                FRONTEND DEVELOPER
                FRONTEND DEVELOPER
              </div>
              <img src={profilePic} alt="profile picture" className="profile-pic" />
            </div>
            <div className="profile-name">
                Muhammad At Thariq Filardi
            </div>
          </div>
          <div className="profile-social">
            <a target="_blank" href="https://www.linkedin.com/in/muhammad-filardi/">
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
        <div className="profile-desc">
          <div className="">
            <ul>
              <li>
                EDUCATION
                <ul>
                  <li>Bina Nusantara University</li>
                </ul>
              </li>
              <li>JOB EXPERIENCE
                <ul>
                  <li>Teaching Assistant</li>
                  <li>Frontend Engineer Intern</li>
                  <li>Frontend Engineer</li>
                </ul>
              </li>
              <li>
                SKILLS
                <ul>
                  <li>React</li>
                  <li>Gatsby</li>
                  <li>NextJs</li>
                  <li>Vue</li>
                  <li>NuxtJs</li>
                  <li>Vuetify</li>
                  <li>Git</li>
                  <li>Github</li>
                </ul>
              </li>
              <li>ACHIEVEMENT</li>
              <li>CERTIFICATE</li>
              <li>PROJECTS</li>
            </ul>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default App
