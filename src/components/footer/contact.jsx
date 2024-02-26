import logo from "../../assets/logo.svg";
import locat from "../../assets/icon-location.svg";
import call from "../../assets/icon-phone.svg";
import mail from "../../assets/icon-email.svg";
import facebook from "../../assets/facebook-f.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
const Contact = () => {
  return (
    <div className="h-[441px] bg-[#0b1524] text-[#FFF] px-[8rem] pt-[10rem] ">
      <div className=" space-y-16 w-[1238.65px] m-auto">
        <div>
          <img className="w-[108px] h-[31px]  " src={logo} alt="" />
        </div>
        <div className="flex gap-[7em]">
          {/*  */}
          <div className="flex gap-5 ">
            <div>
              <img className=" w-[12.38px] h-[18px] mt-2" src={locat} alt="" />
            </div>
            <div className=" w-[339px] h-[72px] font-opensans text-[16px] font-[300] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>
          {/*  */}
          <div className="w-[168px] space-y-3">
            <div className="flex w-[157.5px] items-center gap-5">
              <div>
                <img className="w-[20px] h-[20px]" src={call} alt="" />
              </div>
              <div className="w-[110px] text-[14px] font-[300] font-opensans leading-[21px] text-center">
                +1-543-123-4567
              </div>
            </div>
            <div className="flex w-[168px] items-center gap-5">
              <div>
                <img className="w-[20px] h-[16px]" src={mail} alt="" />
              </div>
              <div className="text-[14px] w-[119px] font-[300] leading-[21px] font-opensans">
                example@fylo.com
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-20">
            <div className="text-[16px] space-y-3 font-[300] font-opensans">
              <div className="w-[67px]">About Us</div>
              <div className="w-[31px]"> Jobs</div>
              <div className="w-[40px]">Press</div>
              <div className="w-[32px]"> Blog</div>
            </div>
            <div className="text-[16px]  space-y-3 font-[300] font-opensans">
              <div className="w-[79px]">Contact Us</div>
              <div className="w-[45px]">Terms</div>
              <div className="w-[50px]">Privacy</div>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-5">
            <div className="w-[31.22px] h-[31px] border-2 rounded-full">
              <img
                className="w-[7.03px] h-[14.73px] m-auto justify-center my-1.5  hover:bg-white "
                src={facebook}
                alt=""
              />
            </div>
            <div className="w-[31.22px] h-[31px] border-2 rounded-full">
              <img
                className="w-[7.03px] h-[14.73px] m-auto justify-center my-1.5   hover:bg-white"
                src={twitter}
                alt=""
              />
            </div>

            <div className="w-[31.22px] h-[31px] border-2 rounded-full">
              <img
                className="w-[7.03px] h-[8px] m-auto justify-center my-2.5  hover:bg-white"
                src={instagram}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
