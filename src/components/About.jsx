import { useNavigate } from "react-router-dom";
import { images } from "../assets/images/images";

const About = () => {
  const navigate = useNavigate();

  return (
    <div
      className="md:px-14 p-4 max-w-s mx-auto space-y-10 container grid gap-6 my-12"
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img className="w-full" src={images.fitness2} alt="" />
        </div>

        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Continuously evolving to maximize your fitness journey.
          </h2>
          <p className="text-tertiary text-lg mb-7">
            We're dedicated to constant enhancement and innovation, refining our
            features and services to provide you with the best fitness
            experience possible.
          </p>
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className="btnPrimary2"
          >
            Get started
          </button>
        </div>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/2 md-p-4">
          <img className="w-full" src={images.fitness1} alt="" />
        </div>

        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Continuously evolving for{" "}
            <span className="text-secondary">peak performance</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            Join our community of like-minded individuals, track your progress,
            and experience the difference of having a dedicated fitness partner
            by your side every step of the way.
          </p>
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className="btnPrimary2"
          >
            Lets Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
