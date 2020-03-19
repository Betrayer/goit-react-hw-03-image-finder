import React from "react";
import ImageGalleryItem from "./../imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ galleryItems, openModal }) => (
  <ul className="ImageGallery">
    {galleryItems.map(item => (
      <ImageGalleryItem liItem={item} key={item.id} openModal={openModal}/>
    ))}
  </ul>
);

export default ImageGallery;
