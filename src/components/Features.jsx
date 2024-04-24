const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto " id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            why <span className="text-[#3E3310]">FitFlex</span>
          </h3>
          <p className="text-base text-tertiary">
            Unlock your full potential with our gym app. We're not just another
            fitness platform — we're your ultimate companion on the journey to a
            healthier, stronger you.
          </p>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-8 items-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div className="h-96">
                <img
                  src="https://cdn.pixabay.com/photo/2020/06/12/00/11/boxing-5288635_640.jpg"
                  className="h-full w-full object-cover rounded-[35px]"
                  alt="feature-card"
                />
              </div>
              <h5 className="text-2xl font-semibold text-primary px-5 text-center">
                Get Fit
              </h5>
            </div>
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-8 items-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div className="h-96">
                <img
                  src="https://cdn.pixabay.com/photo/2024/04/17/21/49/ai-generated-8703072_640.jpg"
                  className="h-full w-full object-cover rounded-[35px]"
                  alt="feature-card"
                />
              </div>
              <h5 className="text-2xl font-semibold text-primary px-5 text-center">
                Max Gym
              </h5>
            </div>

            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-8 items-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div className="h-96">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_640.jpg"
                  className="h-full w-full object-cover rounded-[35px]"
                  alt="feature-card"
                />
              </div>
              <h5 className="text-2xl font-semibold text-primary px-5 text-center">
                Work It
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
