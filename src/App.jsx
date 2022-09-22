import profilePic from './assets/profile-pic.png'
import './index.css'

function App() {

  return (
    <div className="min-h-screen bg-zinc-900 body">
      <div className="wrapper p-5 flex justify-center flex-wrap">
        <div className="profile-intro p-2 mb-5">
          <div className="profile-intro-desc flex flex-col items-center mb-3 md:mb-5 relative w-[280px] md:w-[400px]">
            <div className="text-5xl -skew-y-6 md:text-[2rem] text-center absolute text-blue-600">
              FRONTEND DEVELOPER
              FRONTEND DEVELOPER
              FRONTEND DEVELOPER
              FRONTEND DEVELOPER
              FRONTEND DEVELOPER
              FRONTEND DEVELOPER
              FRONTEND DEVELOPER
            </div>
            <div className="profile-pic-container bg-blue-600 w-[280px] md:w-[400px] rounded-full relative overflow-hidden">
              <div className="text-bg text-5xl -skew-y-6 md:text-[2rem] w-[280px] md:w-[400px] text-center absolute z-10">
                FRONTEND DEVELOPER
                FRONTEND DEVELOPER
                FRONTEND DEVELOPER
                FRONTEND DEVELOPER
                FRONTEND DEVELOPER
                FRONTEND DEVELOPER
                FRONTEND DEVELOPER
              </div>
              <img src={profilePic} alt="profile picture" className="profile-pic z-50 relative w-full" />
            </div>
            <div className="profile-name text-2xl -skew-y-6 md:text-4xl border-b-2 hover:border-blue-600 text-center z-20 relative duration-200">
                Muhammad At Thariq Filardi
            </div>
          </div>
          <div className="profile-social -skew-y-6 text-blue-600 flex justify-evenly text-4xl md:text-5xl">
            <a target="_blank" href="https://www.linkedin.com/in/muhammad-filardi/">
              <i className="uil uil-linkedin hover:text-zinc-100 duration-200"></i>
            </a>
            <a target="_blank" href="https://github.com/crazould">
              <i className="uil uil-github hover:text-zinc-100 duration-200"></i>
            </a>
            <a href="mailto:crazould@gmail.com">
              <i className="uil uil-envelope hover:text-zinc-100 duration-200"></i>
            </a>
          </div>
        </div>
        <div className="profile-desc flex flex-col items-center">
          <div className="text-zinc-100">
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
