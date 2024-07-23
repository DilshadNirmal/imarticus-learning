import { NavLink } from "react-router-dom";
import imarticusLogo from "/imarticusLogo.svg";
import whatsappIcon from "/whatsappicon.svg";

const Header = () => {
  const listItems = ["All Programs", "Career Services", "Discover"];

  return (
    <header className="w-full h-8 py-6 px-8 flex justify-between items-center">
      <img src={imarticusLogo} alt="imarticus logo" className="w-40" />
      <div className="flex justify-center items-center gap-2">
        <ul className="flex justify-evenly items-center gap-3">
          {listItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item} >{item}</NavLink>
              </li>
          ))}
        </ul>
        <NavLink to="/login" className="px-3 py-1 bg-fuchsia-500 text-secondary rounded mr-3">login</NavLink>
        <img src={whatsappIcon} alt="whatsapp icon" className="w-5" />
      </div>
    </header>
  );
};

export default Header;
