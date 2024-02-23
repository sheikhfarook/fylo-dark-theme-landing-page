import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-10 text-[#FFF] items-center text-[16px] ">
        <div className="hover:underline hover:font-[700] font-[100]">
          {" "}
          Features
        </div>
        <div className="font-[100] hover:underline hover:font-[700]">Team</div>
        <div className="font-[100] hover:underline hover:font-[700]">
          Sign In
        </div>
      </div>
    </div>
  );
};

export default Header;
