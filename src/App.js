import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './views/Header';
import HeroArea from './views/HeroArea';
import WhoSection from './views/WhoSection';
import ProjectsSection from './views/ProjectsSection';
import Footer from './views/Footer';

function App() {
  return (
    <ParallaxProvider>
      <Header />
      <HeroArea />
      <WhoSection />
      <ProjectsSection />
      <Footer />
    </ParallaxProvider>
  );
}

export default App;
