import React, { useState } from 'react';
import Background from './components/Background';
import Header     from './components/Header';
import Sidebar    from './components/Sidebar';
import Home       from './components/Home';
import Research   from './components/tools/Research';
import Assignment from './components/tools/Assignment';
import Slides     from './components/tools/Slides';
import Video      from './components/tools/Video';
import Notes      from './components/tools/Notes';
import Quiz       from './components/tools/Quiz';

// Map view ID → component
const VIEWS = {
  home:     <Home />,       // Home gets onNav injected below
  research: <Research />,
  assign:   <Assignment />,
  slides:   <Slides />,
  video:    <Video />,
  notes:    <Notes />,
  quiz:     <Quiz />,
};

export default function App() {
  const [active, setActive] = useState('home');

  // Inject onNav into Home so its cards can navigate
  const currentView = active === 'home'
    ? React.cloneElement(VIEWS.home, { onNav: setActive })
    : VIEWS[active];

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      background: '#07070f',
    }}>
      {/* Animated background — behind everything */}
      <Background />

      {/* Header */}
      <Header />

      {/* Body = sidebar + main */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative', zIndex: 1 }}>
        <Sidebar active={active} onNav={setActive} />

        {/* Main panel */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {currentView}
        </div>
      </div>
    </div>
  );
}
