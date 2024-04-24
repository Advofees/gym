import { useNavigate } from "react-router-dom";

const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className=" rounded-xl bg-gradient-to-tr from-[#3E3310] to-[#FAE26B] rounded-br-[80px] p-9">
        <div className="flex flex-col lg:flex-row-reverse  gap-10">
          <div className="">
            <img
              src={banner}
              alt="banner"
              className="h-full w-full object-cover rounded-br-[80px] rounded-xl"
            />
          </div>
          <div className="lg:w-3/5">
            <h2 className="md:text-3xl text-4xl font-bold text-white mb-6 leading-relaxed">
              {heading}
            </h2>
            <p className="text-[#EBEBE8] text-2xl mb-8">{subheading}</p>
            <div className="space-x-5 space-y-4">
              <button
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="btnPrimary"
              >
                {btn1}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
