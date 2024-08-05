import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ImageGallery = ({ images, projectId }) => {
  if (projectId) {

    const projectIndex = parseInt(projectId, 10);
    const projectImage = images[projectIndex];

    return (
      <div className='p-8 m-28'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl'>title<span className='text-red-600'>.</span> project 0{projectId}</h1>
          <p className='font-light'>date<span className='text-red-600'>.</span> 2035</p>
          <p className='font-light'>city<span className='text-red-600'>.</span> New York</p>
        <p className='font-light mb-2'>size<span className='text-red-600'>.</span> mural painting 1000m x 200m</p>
        </div>
        {projectImage ? (
          <img
            src={projectImage.src}
            alt={projectImage.alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <p>Project image not found.</p>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mb-[20rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden shadow-md group">
            <NavLink to={`/project/${index}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Project {index + 1}
                </span>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  projectId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ImageGallery;
