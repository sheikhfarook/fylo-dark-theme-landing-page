import explain from "../../assets/illustration-stay-productive.png";
import arrow from "../../assets/icon-arrow.svg";
import { guide } from "./quidedate";
import AboutTheCompanys from "./aboutthecompanys";

const Guide = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 text-center w-[888px] h-[507px] m-auto  ">
        {guide?.map((rules) => (
          <div key={rules?.id} className="">
            <div className="w-[349px] h-[214px] m-auto text-white ">
              <div className="">
                <img className="m-auto " src={rules?.img} alt="" />
              </div>
              <div className="mt-5 space-y-1">
                <div className="text-[20px] font-[700]">{rules?.headline}</div>
                <div className="text-[14px] font-[300] leading-[21px]">
                  {rules?.info}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center m-auto justify-center">
        <div>
          <img className="w-[614.76px] h-[463.63ppx]" src={explain} alt="" />
        </div>
        <div className="text-[#FFF]">
          <div className="w-[506px] h-[100px] text-[40px] font-raleway font-[700] leading-[50px] ">
            Stay productive , wherever you are
          </div>
          <div className="w-[563px] h-[48px] text-[16px] font-opensans font-[300] leading-[24px]">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </div>
          <div className="w-[563px] h-[48px] text-[16px] font-opensans font-[300] leading-[24px]">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </div>
          <div className="w-[166px] h-[27px]  flex items-center gap-2 underline">
            <div
              className="w-[140px] h-[22px] font-opensans text-[16px] text-[#62e0d9] font-[300]
             hover:text-[#FFF]">
              See how Fylo works
            </div>
            <div className="">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <AboutTheCompanys />
    </div>
  );
};

export default Guide;
