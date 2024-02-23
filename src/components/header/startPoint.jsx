import intro from "../../assets/illustration-intro.png";

const StartPoint = () => {
  return (
    <div className="text-center text-[#FFF] font-raleway">
      <div>
        <img
          className="m-auto mt-20 max-sm:2-[304px] max-sm:h-[225px]"
          src={intro}
          alt=""
        />
      </div>
      <div className="space-y-10 mt-8">
        <div
          className="w-[734px] h-[120px] text-[40px] font-[700] 
        leading-[60px] m-auto
        max-sm:w-[320px] max-sm:h-[108px] max-sm:text-[24px] max-sm:leading-[36px]">
          All your files in one secure location, accessible anywhere.
        </div>
        <div
          className="w-[589px] h-[90px] font-opensans text-[20px] font-[300] leading-[30px] m-auto
        max-sm:w-[296px] max-sm:h-[84px] max-sm:text-[14px] max-sm:font-[400] max-sm:leading-[21px] ">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </div>
        <div
          className="w-[280px] h-[56px] rounded-[28px] shadow-md font-[700] py-4 m-auto 
          bg-gradient-to-l from-[#34a0cd] to-[#63e1d9]
          max-sm:w-[240px] max-sm:py-3.5 max-sm:h-[48px] max-sm:rounded-[24px] max-sm:text-[14px]
         ">
          Get Started
        </div>
      </div>
    </div>
  );
};

export default StartPoint;
