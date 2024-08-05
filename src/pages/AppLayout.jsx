import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Projects from '../components/Projects';
import About from '../components/About';
import Layer3Img from './../assets/images/layer-3-bg.png';
import Layer4Img from './../assets/images/layer-5-bg.png';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const AppLayout = () => {
  const parallaxRef = useRef(null);

  const scrollToPage = (page) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(page);
    }
  };

  return (
    <Parallax ref={parallaxRef} pages={4} horizontal={false}>
      {/* Hero Section - Layer 1 */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div>
          <Navbar scrollToPage={scrollToPage} />
          <HeroSection scrollToPage={scrollToPage} />
        </div>
      </ParallaxLayer>

      {/* Projects Section - Layer 2 */}
      <ParallaxLayer offset={1} speed={0.4} className='z-10'>
        <Projects />
      </ParallaxLayer>

      {/* Background Image for Layer 3 */}
      <ParallaxLayer offset={1.8} speed={0.3} className='-z-10'>
        <img src={Layer3Img} className="w-screen h-screen object-cover" alt="Bg img for layer 3" />
      </ParallaxLayer>

      {/* About Section - Layer 3 */}
      <ParallaxLayer offset={2.1} speed={0.3} className='z-50'>
        <About />
      </ParallaxLayer>

      {/* Background Image for Layer 4 */}
      <ParallaxLayer offset={2.2} speed={0.2} className='-z-10'>
        <img src={Layer4Img} className="w-screen h-screen object-cover" alt="Bg img for layer 4" />
      </ParallaxLayer>

      {/* Contact Form and Footer - Layer 4 */}
      <ParallaxLayer offset={3} speed={0.2} className='flex flex-col'>
        <ContactForm />
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
};

export default AppLayout;
