import React from 'react';
import './App.css';

function Profile() {
  return (
    <div className="main">
      <img className="main-img" src={`${process.env.PUBLIC_URL}/images/main.png`} alt="main-img" /> 
        <div className="text1">MJE</div>
          <span className="text2" id="formElement">
            A front-end developer who lives for everyone
          <br />
            School: GBSW
          <sub>
          <a href="https://school.gyo6.net/gbsw/main.do?sysId=gbsw" target="_blank">
            <img className="gbsw" src={`${process.env.PUBLIC_URL}/images/GBSW.svg`} alt="gbsw" />
          </a>
        </sub>
        <br />
        I'm learning to be a front-end developer
      </span>
      <ul class="stack">
              <li>
                <img className="coding" src={`${process.env.PUBLIC_URL}/images/coding.svg`} alt="coding" />
              </li>
              <li>
                <img className="react" src={`${process.env.PUBLIC_URL}/images/react.svg`} alt="react" />
              </li>
            </ul>
            <div className="text3">l will also study the backend as needed...</div>
            <div className='contact'>
            <a href="https://www.instagram.com/m._je2/" target="_blank">
              <img className="instagram" src={`${process.env.PUBLIC_URL}/images/instagram.svg`} alt="instagram" />
            </a>
            <a href="https://github.com/MJEvision" target="_blank">
              <img className="github" src={`${process.env.PUBLIC_URL}/images/github.svg`} alt="github" />
            </a>
            <a href="https://discord.com/users/1019955401497788497" target="_blank">
              <img className="discord" src={`${process.env.PUBLIC_URL}/images/discord.svg`} alt="discord" /> 
            </a>
          </div>
    </div>
  );
}

export default Profile;
