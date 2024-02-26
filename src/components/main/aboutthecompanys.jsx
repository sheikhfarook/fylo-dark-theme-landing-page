import { about } from "./aboutdata";
import GetStarted from "../footer/getstarted";
const AboutTheCompanys = () => {
  return (
    <div
      className="
    semicolon">
      <div className="flex gap-10 justify-center mt-32 max-sm:flex-col max-sm:gap-8 max-sm:items-center">
        {about?.map((details) => (
          <div key={details?.id}>
            <div
              className="text-[#FFF] w-[360px] h-[200px] rounded-[3.93px]
             bg-[#202a3c] shadow-md p-10 space-y-7 max-sm:space-y-5
             max-sm:w-[280px] max-sm:h-[160px] max-sm:p-5 ">
              <div
                className="w-[309.3px] h-[84px] text-[14px] font-opensans font-[300] 
              leading-[21px] tracking-[0.5px] 
              max-sm:w-[240px] max-sm:h-[72px] max-sm:text-[10px] max-sm:font-[400]
              max-sm:leading-[18px]">
                {details?.info}
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <img
                    className="rounded-full w-[24px] h-[24px] "
                    src={details?.pic}
                    alt=""
                  />
                </div>
                <div>
                  <div
                    className=" h-[12px] font-opensans text-[10px] font-[700] 
                  leading-[12px] tracking-[0.5px] ">
                    {details?.name}
                  </div>
                  <div className="w-[86px] h-[10px] font-opensans text-[7px] font-[300] leading-[10px] tracking-[0.5px]">
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
