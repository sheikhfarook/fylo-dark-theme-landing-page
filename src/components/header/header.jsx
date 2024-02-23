import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <div>Features</div>
        <div>Team</div>
        <div>Sign In</div>
      </div>
    </div>
  );
};

export default Header;
