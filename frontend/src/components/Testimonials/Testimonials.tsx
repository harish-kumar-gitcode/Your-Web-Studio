import "./Testimonials.css";
type TestimonialProps = {
  rating: number;
  comment: string;
  owner: string;
  profile: string;
};

//Defining the testimonials function.
function Testimonials({ rating, comment, owner, profile }: TestimonialProps) {
  const totalStars = 5;
  //Returing the Section for testimonials.
  return (
    <>
      <div className="container">
        <div className="profile-container">
          <img src={profile} alt="" />
          <div className="stars-container">
            {[...Array(totalStars)].map((_, index) => (
              <div
                key={index}
                className={`star ${index < rating ? "gold" : ""}`}
              ></div>
            ))}
          </div>
        </div>
        <div className="review-container">
          <p>{comment}</p>
          <h4>- {owner}</h4>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
