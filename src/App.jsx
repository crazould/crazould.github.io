import profilePic from './assets/profile-pic.png'
import profilePicShine from './assets/profile-pic-shine.png'
import './index.css'
import { useState } from 'react'

const profileJobTxt = 'FRONTEND DEVELOPER '
const totalProfileJobTxt = 10
let arr = []
for (let index = 0; index < totalProfileJobTxt; index++) {
  arr = [...arr, profileJobTxt]
}

function App() {

  const [isHoverPic, setHoverPic] = useState(false);

  return (
    <div className="body">
      <div className="wrapper ">
        <div className="profile-intro">
          <div className="profile-intro-desc">
            <div className="profile-job-out">
                {arr}
            </div>
            <div className="profile-pic-container">
              <div className="profile-job-in">
                {arr}
              </div>
              <img src={isHoverPic ? profilePicShine:profilePic} alt="profile picture" className="profile-pic" onMouseEnter={()=> setHoverPic(true)} onMouseOut={()=> setHoverPic(false)} />
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
        <ul className="profile-desc">
          <li className='desc-item'>EDUCATION</li>
          <li className='desc-item'>JOB EXPERIENCE</li>
          <li className='desc-item'>SKILLS</li>
          <li className='desc-item'>ACHIEVEMENT</li>
          <li className='desc-item'>CERTIFICATE</li>
          <li className='desc-item'>PROJECTS</li>
        </ul>
      </div>
    </div>
  )
}

export default App
