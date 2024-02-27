import logo from "../../assets/logo.svg";
import locat from "../../assets/icon-location.svg";
import call from "../../assets/icon-phone.svg";
import mail from "../../assets/icon-email.svg";
import facebook from "../../assets/facebook-f.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
const Contact = () => {
  return (
    <div
      className=" bg-[#0b1524] text-[#FFF] px-[8rem] pt-[10rem] 
    max-sm:h-[974px] max-sm:px-[1.6rem] max-sm:pt-[13rem]  md:w-[115%] md:h-[850px] lg:w-[100%]  xl:h-[441px]">
      <div className="m-auto space-y-16 max-sm:space-y-9 xl:w-[1238.65px]  ">
        <div>
          <img className="w-[108px] h-[31px] max-sm:ml-3 " src={logo} alt="" />
        </div>
        <div
          className="flex gap-[7rem] max-sm:flex-col max-sm:gap-[4rem]
        md:flex-col md:gap-[4rem] lg:flex-col xl:flex-row">
          {/*  */}
          {/* <div className="max-sm:space-y-5 md:space-y-5 "> */}
          <div className="flex gap-5 max-sm:w-[319px]">
            <div>
              <img
                className=" w-[12.38px] h-[18px] mt-2
                  
                   "
                src={locat}
                alt=""
              />
            </div>
            <div
              className=" w-[339px] h-[72px] font-opensans text-[16px] font-[300] leading-[24px]
              max-sm:w-[279px] max-sm:h-[96px] max-sm:font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>
          {/*  */}
          <div className="w-[168px] space-y-3 max-sm:space-y-5">
            <div className="flex w-[157.5px] items-center gap-5">
              <div>
                <img
                  className="w-[20px] h-[20px] max-sm:h-[13px] max-sm:w-[13px]"
                  src={call}
                  alt=""
                />
              </div>
              <div className="w-[110px] text-[14px] font-[300] font-opensans leading-[21px] text-center max-sm:font-[400]">
                +1-543-123-4567
              </div>
            </div>
            <div className="flex w-[168px] items-center gap-5">
              <div>
                <img className="w-[20px] h-[16px]" src={mail} alt="" />
              </div>
              <div className="text-[14px] w-[119px] font-[300] leading-[21px] font-opensans max-sm:font-[400]">
                example@fylo.com
              </div>
            </div>
          </div>
          {/* </div> */}

          {/*  */}
          {/* <div className="flex "> */}
          <div className="flex gap-20 max-sm:flex-col max-sm:gap-10  lg:flex-row">
            <div className="text-[16px] space-y-3 font-[300] font-opensans">
              <div className="w-[77px]  cursor-pointer hover:font-[700]">
                About Us
              </div>
              <div className="w-[31px]  cursor-pointer hover:font-[700]">
                {" "}
                Jobs
              </div>
              <div className="w-[40px]  cursor-pointer hover:font-[700]">
                Press
              </div>
              <div className="w-[32px]  cursor-pointer hover:font-[700]">
                {" "}
                Blog
              </div>
            </div>
            <div className="text-[16px]  space-y-3 font-[300] font-opensans">
              <div className="w-[87px] cursor-pointer hover:font-[700] ">
                Contact Us
              </div>
              <div className="w-[45px] cursor-pointer hover:font-[700]">
                Terms
              </div>
              <div className="w-[50px] cursor-pointer hover:font-[700]">
                Privacy
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-5 max-sm:justify-center  md:justify-center  xl:flex-row">
            <div
              className="w-[31.22px] h-[31px] border-2 rounded-full 
              max-sm:w-[27.06px] max-sm:h-[27px] cursor-pointer ">
              <img
                className="w-[7.03px] h-[14.73px] m-auto justify-center my-1.5  hover:bg-white 
                  max-sm:w-[7.04px] maax-sm:h-[12.82px] max-sm:my-1"
                src={facebook}
                alt=""
              />
            </div>
            <div
              className="w-[31.22px] h-[31px] border-2 rounded-full
              max-sm:w-[27.06px] max-sm:h-[27px] cursor-pointer ">
              <img
                className="w-[7.03px] h-[14.73px] m-auto justify-center my-1.5 hover:bg-white
                  max-sm:w-[7.04px] maax-sm:h-[12.82px] max-sm:my-1"
                src={twitter}
                alt=""
              />
            </div>

            <div
              className="w-[31.22px] h-[31px] border-2 rounded-full
              max-sm:w-[27.06px] max-sm:h-[27px] cursor-pointer ">
              <img
                className="w-[7.03px] h-[8px] m-auto justify-center my-2.5  hover:bg-white
                  max-sm:w-[7.04px] maax-sm:h-[12.82px] max-sm:my-2"
                src={instagram}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Contact;
