import AboutSection from './AboutSection';
import Card from './Card';
import Card1 from './Card1';
import HeroSection from './HeroSection';
import OurServices from './OurServices';
import SoftwareCompany from './SoftwareCompany';
import SoftwareCompany1 from './SoftwareCompany1';
import Stats from './Stats';

const Homepage = () => {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <OurServices />
      <Card />
      <Card1 />
      <Stats /> 
      <SoftwareCompany />
      <SoftwareCompany1 />
     
      
    </div>
  );
};

export default Homepage;
