import { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ image, title, description, link, variant, animate }) {
  //Creating a card for the services and passing a variant for styles and title and description as props.
  return (
    <>
      <div className={`card-container ${variant} ${animate ? "animate" : ""}`}>
        <img src={image} alt="Service Image" />
        <div className="details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Link to={link}>
          <button>
            {variant === "web" ||
            variant === "crm" ||
            variant === "whatsapp" ||
            variant === "seo"
              ? "Know More"
              : "Visit Site"}
          </button>
        </Link>
      </div>
    </>
  );
}

export default Card;
