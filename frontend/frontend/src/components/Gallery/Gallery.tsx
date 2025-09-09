//This is the Gallery/Work done Page.
import { useState, useEffect } from "react";
import "./Gallery.css";

//Importing all images for the gallery.
import mobile from "../../assets/clients/mobile.png";
import SEO from "../../assets/clients/SEO.png";
import traffic from "../../assets/clients/traffic.png";
import watch from "../../assets/clients/watch.png";
import team from "../../assets/clients/team-2.png";
import shoe from "../../assets/clients/shoe.png";
import food from "../../assets/clients/food.png";
import flight from "../../assets/clients/flight.png";
import project from "../../assets/clients/project-manage.png";
import analytics from "../../assets/clients/analytics.png";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    mobile,
    watch,
    shoe,
    food,
    flight,
    SEO,
    project,
    traffic,
    analytics,
    team,
  ];

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedImage]);

  return (
    <>
      <div className="gallery-thumbnail">
        <h2>Gallery</h2>
        {/* Thumbnails */}
        <div className="thumbnail-wrapper">
          {images.map((src, index) => (
            <img
              src={src}
              alt={`Project ${index}`}
              key={index}
              className="thumbnail"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </div>
      {/* Modal View */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img src={selectedImage} alt="enlarged" className="modal-image" />
        </div>
      )}
    </>
  );
}

export default Gallery;
