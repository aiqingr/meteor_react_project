// Create out image list component
//Import React
import React from 'react';''
import ImageDetail from './image_detail';

const IMAGES = [
  {title: 'Pen', link: 'https://dummyimage.com/600x400'},
  {title: 'Pine Tree', link: 'https://dummyimage.com/600x400'},
  {title: 'Mug', link: 'https://dummyimage.com/600x400'}
]
//Create our component
const ImageList = () => {
  const RenderedImages = IMAGES.map((image) => {
    return <ImageDetail />
  })
  return (
    <ul>
      {RenderedImages}
    </ul>
  );
};

//Export our component
export default ImageList;
