import Header from "../../components/Header/Header";
import heroImg from "../../assets/Hero.png";
import Card from "../../components/Card/Card";
import { useState } from "react";
import "./Home.css";
//Imports for the services.
import webdev from "../../assets/services/web_development.png";
import SEO from "../../assets/services/SEO.png";
import Whatsapp from "../../assets/services/whatsapp.png";
import CRM from "../../assets/services/CRM.png";
import ClientSection from "../../components/Client/ClientSection";
//Import for Gallery section.
import Gallery from "../../components/Gallery/Gallery";
// Import for the testimonials.
import Testimonials from "../../components/Testimonials/Testimonials";
import profile1 from "../../assets/clients/reviews/profile-1.jpg";
import profile2 from "../../assets/clients/reviews/profile-2.jpg";
import profile3 from "../../assets/clients/reviews/profile-3.jpg";
import profile4 from "../../assets/clients/reviews/profile-4.jpg";
import profile5 from "../../assets/clients/reviews/profile-5.jpg";
// Import for Footer.
import Footer from "../../components/Footer/Footer";

function Home() {
  //Setting the animations
  const [animateAll, setAnimateAll] = useState(false);

  return (
    <>
      {/* Reusing the header component */}
      <Header />
      {/* This is the Hero Section of the Homepage. */}
      <div className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-description">
            <h1>Your Vision, Our Code.</h1>
            <p>
              We design sleek, high-performing websites tailored to your goals.
              Turn your online presence into your most powerful growth tool.
            </p>
          </div>
          <div className="book-btn">
            <button>Book a Demo</button>
            <button className="service-btn">View Services</button>
          </div>
        </div>
        <img src={heroImg} alt="Picture of a responsive web design." />
      </div>
      {/* This is the Services section of the page. */}
      <div className="services" onMouseEnter={() => setAnimateAll(true)}>
        <h2>Our Services</h2>

        <div className="services-cont">
          <Card
            image={webdev}
            title="Web Development"
            description="We build fast, secure, and scalable websites tailored to your business needs, ensuring smooth user experiences across all devices."
            variant="web"
            animate={animateAll}
          ></Card>
          <Card
            image={SEO}
            title="SEO Optimization"
            description="Improve your visibility with our proven SEO strategies that boost rankings, drive organic traffic, and help your business get found online."
            variant="seo"
            animate={animateAll}
          ></Card>
          <Card
            image={Whatsapp}
            title="Whatsapp Automation"
            description="Engage customers instantly with smart WhatsApp automation — streamline support, send updates, and improve conversions effortlessly."
            variant="whatsapp"
            animate={animateAll}
          ></Card>
          <Card
            image={CRM}
            title="CRM & Inventory Management"
            description="Simplify your business operations with powerful CRM and inventory tools designed to manage customers, sales, and stock in one place."
            variant="crm"
            animate={animateAll}
          ></Card>
        </div>
      </div>
      {/* This is Section-3 (Clients) */}
      <ClientSection />
      {/* This is the Gallery Section. */}
      <Gallery />
      {/* Testimonials Container */}
      <div className="testimonials-container">
        <h2>Our Testimonials</h2>
        <div className="testimonials-wrapper">
          <Testimonials
            rating={5}
            comment="They built a modern, responsive website for my startup. The speed and performance are excellent!"
            owner="Rohit Kulkarne"
            profile={profile1}
          ></Testimonials>
          <Testimonials
            rating={5}
            comment="Very professional team. They understood my business needs and delivered a website that attracts more clients."
            owner="Priya Nair"
            profile={profile4}
          ></Testimonials>{" "}
          <Testimonials
            rating={5}
            comment="I loved their design sense. My e-commerce website looks premium and is easy to manage."
            owner="Arjun Mehta"
            profile={profile2}
          ></Testimonials>{" "}
          <Testimonials
            rating={5}
            comment="Great experience! They also helped me with SEO, and now my website ranks on Google."
            owner="Sneha Reddy"
            profile={profile5}
          ></Testimonials>{" "}
          <Testimonials
            rating={5}
            comment="Timely delivery and great support after launch. Highly recommended for any web development project."
            owner="Amit Verma"
            profile={profile3}
          ></Testimonials>
        </div>
      </div>
      {/* Call to Action button */}
      <div className="cta-btn-cont">
        <h2>Why Choose Us?</h2>
        <div className="why-cont">
          <div className="why">
            <h4>
              <span>🚀</span> <br />
              Custom-Built Solutions
            </h4>
            <p>
              We don’t use one-size-fits-all templates—every website is designed
              and developed to match your brand, goals, and audience.
            </p>
          </div>
          <div className="why">
            <h4>
              <span>⚡</span> <br />
              Performance & SEO Focused
            </h4>
            <p>
              Our websites are optimized for speed, mobile responsive, and
              search engines, ensuring better visibility and user experience.
            </p>
          </div>
          <div className="why">
            <h4>
              <span>🤝</span> <br />
              End-to-End Support
            </h4>
            <p>
              From concept to launch and beyond, we provide ongoing maintenance,
              updates, and technical support so your business keeps growing.
            </p>
          </div>
        </div>
        <div className="cta-btn">
          <button>Free Consultation</button>
        </div>
      </div>
      {/* Footer Section of the page. */}
      <Footer></Footer>
    </>
  );
}

export default Home;
