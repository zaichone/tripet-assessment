import { useState, useEffect } from 'react';
import './App.scss';

import { content } from './content.js';

import Content from './components/Content';
import ContentMobile from './components/ContentMobile';

function App() {
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [width]);
  return (
    <div className="App">
      {width >= 768 ? <Content data={content} /> : <ContentMobile data={content} />}

    </div>
  );
}

export default App;
