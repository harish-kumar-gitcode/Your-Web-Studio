import CountUp from "react-countup";
import "./ClientSection.css";
import { useInView } from "react-intersection-observer";

function ClientSection() {
  //This is used to trigger the count only when the user views the section.
  const { ref, inView } = useInView({ triggerOnce: true });
  //Creating a Client Section for achievements
  return (
    <>
      <div className="stats-wrapper">
        <h2>Our Achievements</h2>
        <div className="stats-container" ref={ref}>
          <div className="stat">
            <h3>{inView && <CountUp end={40} duration={3} />}+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>{inView && <CountUp end={20} duration={3} />}+</h3>
            <p>Clients</p>
          </div>
          <div className="stat">
            <h3>{inView && <CountUp end={10} duration={3} />}+</h3>
            <p>Team Members</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientSection;
