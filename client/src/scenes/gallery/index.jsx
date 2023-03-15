import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("http://localhost:3000/gallery");
        const data = await res.json();
        console.log(data);
        setImages(data.images);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/admin/imagedelete/${id}`, {
        method: "DELETE",
      });

      setImages((prevImages) => prevImages.filter((image) => image._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center" style={{ fontSize: "xx-large", textDecoration: "underline" }}>Gallery</h1>
      {images.length === 0 ? (
        <p>No images to display</p>
      ) : (
        <div className="card-columns">
          {images.map((image) => (
            <div key={image._id} className="card">
              <img className="card-img-top" src={image.imagePath} alt="img" style={{ width: "200px", height: "200px" }} />
              <div className="card-body">
                <Button onClick={() => handleDelete(image._id)} variant="contained" color="primary">delete</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default Gallery;
