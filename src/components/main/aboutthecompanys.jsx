import { about } from "./aboutdata";
import GetStarted from "./getstarted";

const AboutTheCompanys = () => {
  return (
    <div>
      <div className="flex gap-10 justify-center mt-32">
        {about?.map((details) => (
          <div key={details?.id}>
            <div className="text-[#FFF] w-[360px] h-[200px] rounded-[3.93px] bg-[#202a3c] shadow-md p-10 space-y-7 ">
              <div className="w-[309.3px] h-[84px] text-[14px] font-opensans font-[300] leading-[21px] tracking-[0.5px] ">
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
                  <div className=" h-[12px] font-opensans text-[10px] font-[700] leading-[12px] tracking-[0.5px]">
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
      <GetStarted />
    </div>
  );
};

export default AboutTheCompanys;