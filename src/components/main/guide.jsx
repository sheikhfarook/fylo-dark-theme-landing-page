import explain from "../../assets/illustration-stay-productive.png";
import arrow from "../../assets/icon-arrow.svg";
import { guide } from "./quidedate";
import AboutTheCompanys from "./aboutthecompanys";

const Guide = () => {
  return (
    <div className="">
      <div
        className="grid grid-cols-2 text-center w-[888px] h-[507px] m-auto 
       max-sm:grid-cols-1 max-sm:w-[320px] max-sm:h-[1036px] max-sm:mt-32">
        {guide?.map((rules) => (
          <div key={rules?.id} className="">
            <div
              className="w-[349px] h-[214px] m-auto text-white 
            max-sm:w-[320px] max-ms:h-[199px] ">
              <div className="">
                <img className="m-auto " src={rules?.img} alt="" />
              </div>
              <div className="mt-5 space-y-1 ">
                <div
                  className="text-[20px] font-[700] 
                max-sm:text-[18px] max-sm:leading-[24px]">
                  {rules?.headline}
                </div>
                <div className="text-[14px] font-[300] leading-[21px]">
                  {rules?.info}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex items-center m-auto justify-center max-sm:flex-col
      md:flex-col  lg:flex-row ">
        <div>
          <img
            className="w-[614.76px] h-[463.63ppx] max-sm:w-[304px] max-sm:h-[229.27px] "
            src={explain}
            alt=""
          />
        </div>
        <div className="text-[#FFF] max-sm:space-y-4">
          <div
            className="w-[506px] h-[100px] text-[40px] font-raleway font-[700] leading-[50px]
          max-sm:w-[293px] max-sm:h-[24px] max-sm:text-[18px] max-sm:leading-[24px]  ">
            Stay productive,wherever you are
          </div>
          <div
            className="w-[563px] h-[48px] text-[16px] font-opensans font-[300] leading-[24px]
          max-sm:w-[320px] max-sm:h-[63px] max-sm:text-[14px] max-sm:leading-[21px] ">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </div>
          <div
            className="w-[563px] h-[48px] text-[16px] font-opensans font-[300] leading-[24px]
          max-sm:w-[320px] max-sm:h-[63px] max-sm:text-[14px] max-sm:leading-[21px] ">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </div>
          <div className="">
            <div className="w-[166px]  h-[27px]  flex items-center gap-2 ">
              <div
                className="w-[140px] h-[22px] font-opensans text-[16px] text-[#62e0d9] font-[300]
              hover:text-[#FFF]
              max-sm:w-[110px] max-sm:h-[17px] max-sm:text-[12px] max-sm:font-[400] ">
                See how Fylo works
              </div>
              <div className="">
                <img className="max-sm:w-[12px] mt-1" src={arrow} alt="" />
              </div>
            </div>
            <div className="w-[166px] h-[1px] max-sm:w-[130px] bg-[#62e0d9]"></div>
          </div>
        </div>
      </div>
      <AboutTheCompanys />
    </div>
  );
};

export default Guide;
