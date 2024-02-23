import logo from "../../assets/logo.svg";
import StartPoint from "./startPoint";

const Header = () => {
  return (
    <div className="m-14 max-sm:m-5">
      <div className="flex justify-between ">
        <div>
          <img className="w-[80px]" src={logo} alt="" />
        </div>
        <div
          className="flex gap-10 text-[#FFF] items-center text-[16px] font-raleway
        max-sm:text-[12px] max-sm:gap-6 ">
          <div className="hover:underline hover:font-[700] font-[100]">
            Features
          </div>
          <div className="font-[100] hover:underline hover:font-[700]">
            Team
          </div>
          <div className="font-[100] hover:underline hover:font-[700]">
            Sign In
          </div>
        </div>
      </div>
      <StartPoint />
    </div>
  );
};

export default Header;
