import logo from "../../assets/logo.svg";
import locat from "../../assets/icon-location.svg";
import call from "../../assets/icon-phone.svg";
import mail from "../../assets/icon-email.svg";
import facebook from "../../assets/facebook-f.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
const Contact = () => {
  return (
    <div>
      <div className="h-[441px] bg-[#0b1524] text-[#FFF] p-[10rem] space-y-16">
        <div>
          <img className="w-[108px] h-[31px]  " src={logo} alt="" />
        </div>
        <div className="">
          <div className="flex gap-5 ">
            <div>
              <img className=" w-[12.38px] h-[18px] mt-2" src={locat} alt="" />
            </div>
            <div className=" w-[339px] h-[72px] font-opensans text-[16px] font-[300] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <div>
                <img className="w-[20px] h-[20px]" src={call} alt="" />
              </div>
              <div className="text-[14px] font-[300] font-opensans leading-[21px] text-center">
                +1-543-123-4567
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <img className="w-[20px] h-[16px]" src={mail} alt="" />
              </div>
              <div className="text-[14px] font-[300] leading-[21px] font-opensans">
                example@fylo.com
              </div>
            </div>
          </div>
          <div className="text-[16px] font-[300] font-opensans">
            <div>About Us</div>
            <div>Jobs</div>
            <div>Press</div>
            <div>Blog</div>
          </div>
          <div>
            <div>Contact Us</div>
            <div>Terms</div>
            <div>Privacy</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="w-[31.22px] h-[31px] border-2 rounded-full">
              <img
                className="w-[7.03px] h-[14.73px] m-auto justify-center my-1.5 "
                src={facebook}
                alt=""
              />
            </div>
            <div className="w-[31.22px] h-[31px] border-2 rounded-full">
              <img
                className="w-[7.03px] h-[14.73px] m-auto justify-center my-1.5 "
                src={twitter}
                alt=""
              />
            </div>

            <div className="w-[31.22px] h-[31px] border-2 rounded-full">
              <img
                className="w-[7.03px] h-[14.73px] m-auto justify-center my-1.5 "
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
