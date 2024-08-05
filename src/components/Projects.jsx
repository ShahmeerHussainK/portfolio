import React from 'react'
import ImageGallery from './ImageGallery' // Make sure to import the ImageGallery component
import Img1 from "./../assets/images/gallery-img-1.png"
import Img2 from "./../assets/images/gallery-img-2.png"
import Img3 from "./../assets/images/gallery-img-3.png"
import Img4 from "./../assets/images/gallery-img-4.png"
import Img5 from "./../assets/images/gallery-img-5.png"
import Img6 from "./../assets/images/gallery-img-6.png"
import Img7 from "./../assets/images/gallery-img-7.png"
import Img8 from "./../assets/images/gallery-img-8.png"
import Img9 from "./../assets/images/gallery-img-9.png"


const images = [
    { src: Img1, alt: 'gallery images 1'},
    {src:Img2, alt: 'gallery images 2'},
    {src:Img3, alt: 'gallery images 3'},
    {src: Img4, alt: 'gallery images 4'},
    {src: Img5, alt: 'gallery images 5'},
    {src:Img6, alt: 'gallery images 6'},
    {src: Img7, alt: 'gallery images 7'},
    {src:Img8, alt: 'gallery images 8'},
    {src: Img9, alt: 'gallery images 9'}
];

function Projects() {
  return (
    <div>
      <h1 className="text-4xl  font-bold text-center my-8">Projects</h1>
      <ImageGallery images={images} />
    </div>
  )
}

export default Projects
