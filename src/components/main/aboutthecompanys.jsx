import { about } from "./aboutdata";
import GetStarted from "../footer/getstarted";
const AboutTheCompanys = () => {
  return (
    <div
      className="
    semicolon">
      <div
        className=" gap-10 justify-center mt-32 max-sm:space-y-8  max-sm:items-center
      md:space-y-10 lg:space-y-0   lg:grid lg:grid-cols-2  lg:place-items-center   xl:flex">
        {about?.map((details) => (
          <div key={details?.id}>
            <div
              className="text-[#FFF]   rounded-[3.93px]
             bg-[#202a3c] shadow-md p-10 space-y-7 max-sm:space-y-5
             max-sm:w-[280px] max-sm:h-[160px] max-sm:p-5 max-sm:m-auto
             md:w-[500px] md:h-[250px] md:m-auto md:justify-center
             lg:w-[360px] lg:h-[200px]">
              <div
                className=" font-opensans font-[300] tracking-[0.5px] 
              max-sm:w-[240px] max-sm:h-[72px] max-sm:text-[10px] max-sm:font-[400] max-sm:leading-[18px]
              md:w-[400px] md:h-[120px] md:text-[18px] md:leading-[28px] 
              lg:w-[309.3px] lg:h-[84px] lg:text-[14px] leading-[21px]  ">
                {details?.info}
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <img
                    className="rounded-full max-sm:w-[24px] max-sm:h-[24px] md:w-[35px] md:h-[35px] lg:w-[24px] lg:h-[24px] 
                    "
                    src={details?.pic}
                    alt=""
                  />
                </div>
                <div className="">
                  <div
                    className=" h-[12px] font-opensans  font-[700] 
                  leading-[12px] tracking-[0.5px] max-sm:text-[10px] 
                  md:text-[13px] lg:text-[10px]  ">
                    {details?.name}
                  </div>
                  <div
                    className=" h-[10px] font-opensans 
                   font-[300]  tracking-[0.5px]
                   max-sm:text-[7px] max-sm:leading-[10px] max-sm::w-[86px] md:leading-[20px] 
                   md:text-[10px] md:w-[200px] lg:leading-[10px] lg:w-[86px] lg:text-[7px]">
                    {details?.roll}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTheCompanys;
