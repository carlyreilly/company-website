import Header from './views/Header';
import HeroArea from './views/HeroArea';
import WhoSection from './views/WhoSection';
import ProjectsSection from './views/ProjectsSection';
import Footer from './views/Footer';
import { useState } from 'react';

function App() {
  const [activeProject, setActiveProject] = useState('meebitsdao');

  return (
    <div>
      <Header />
      <HeroArea activeProject={activeProject} />
      <WhoSection />
      <ProjectsSection 
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <Footer />
    </div>
  );
}

export default App;
