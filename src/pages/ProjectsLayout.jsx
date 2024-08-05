import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import SideImagesNavbar from '../components/SideImagesNavbar';
import Footer from '../components/Footer';

import Img1 from './../assets/images/gallery-img-1.png';
import Img2 from './../assets/images/gallery-img-2.png';
import Img3 from './../assets/images/gallery-img-3.png';
import Img4 from './../assets/images/gallery-img-4.png';
import Img5 from './../assets/images/gallery-img-5.png';
import Img6 from './../assets/images/gallery-img-6.png';
import Img7 from './../assets/images/gallery-img-7.png';
import Img8 from './../assets/images/gallery-img-8.png';
import Img9 from './../assets/images/gallery-img-9.png';

const images = [
  { src: Img1, alt: 'gallery images 1' },
  { src: Img2, alt: 'gallery images 2' },
  { src: Img3, alt: 'gallery images 3' },
  { src: Img4, alt: 'gallery images 4' },
  { src: Img5, alt: 'gallery images 5' },
  { src: Img6, alt: 'gallery images 6' },
  { src: Img7, alt: 'gallery images 7' },
  { src: Img8, alt: 'gallery images 8' },
  { src: Img9, alt: 'gallery images 9' }
];

const ProjectsLayout = () => {
  const parallaxRef = useRef(null);
  const { id: projectId } = useParams();

  const scrollToPage = (page) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(page);
    }
  };

  return (
    <Parallax ref={parallaxRef} pages={2} horizontal={false}>
      <ParallaxLayer offset={0} speed={0.5}>
        <Navbar scrollToPage={scrollToPage} />
      </ParallaxLayer>

      <ParallaxLayer offset={0.2} speed={0.4}>
        <div className="flex items-center justify-start gap-32 py-24">
          <SideImagesNavbar images={images} />
          <ImageGallery className='' images={images} projectId={projectId} />
        </div>

        <Footer/>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ProjectsLayout;
