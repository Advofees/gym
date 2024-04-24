import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 mx-auto mt-24 container" id="home">
      <Banner
        banner={`https://media.istockphoto.com/id/1607183930/photo/sporty-woman-exercising-on-multistation-at-gym-for-arm-and-shoulders-muscles-fitness.webp?b=1&s=612x612&w=0&k=20&c=4k0hdvF_fNBG5WOJmbnefzmxVrpmPmGhf9YMjmOwWc8=`}
        heading={`Achieve Your Fitness Goals with FitFlex`}
        subheading={` Whether you're a seasoned gym enthusiast or just starting your fitness journey, FitFlex is here to support you every step of the way. With personalized workout plans, comprehensive tracking features, and a supportive community, reaching your fitness goals has never been easier.`}
        btn1={`Get started`}
        btn2={`login`}
      />
    </div>
  );
};

export default Home;
