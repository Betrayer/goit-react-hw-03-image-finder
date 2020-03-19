import React from "react"; 

const ImageGalleryItem = ({liItem, openModal}) => (
  <li className="ImageGalleryItem">
    <img src={liItem.webformatURL} data-source={liItem.largeImageURL}  alt="img" className="ImageGalleryItem-image" onClick={openModal}/>
  </li>
);

export default ImageGalleryItem;
