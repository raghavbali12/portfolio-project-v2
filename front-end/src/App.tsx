import { useEffect, useRef, useState } from 'react';
import './style.css';
import Greeting from './Components/Greeting';
import Navbar from './Components/Navbar';
import Smoke from './Content/Videos/smoke-loop.mp4'
import ContentBox from './Components/ContentBox';
import ResourceBox from './Components/ResourceBox';
import { useIsInViewport } from './HelperFunctions/useIsInViewport';

function App() {

  return (
    <div className='fullscreen-bg'>
			<video loop muted autoPlay className="fullscreen-bg_video">
            <source src={Smoke} type="video/mp4" />
      </video>
      <div>
        <Greeting />
        <ResourceBox />
        <ContentBox />
      </div>
    </div>
  );
}

export default App;
