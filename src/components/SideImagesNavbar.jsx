import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideImagesNavbar = ({ images }) => {
  return (
    <div className="side-images-navbar p-2 flex flex-col gap-3">
      {images.map((image, index) => (
        <NavLink key={index} to={`/project/${index}`}>
          <img src={image.src} alt={image.alt} className="thumbnail w-[6rem] h-[4rem] grayscale" />
        </NavLink>
      ))}
    </div>
  );
};

SideImagesNavbar.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SideImagesNavbar;
