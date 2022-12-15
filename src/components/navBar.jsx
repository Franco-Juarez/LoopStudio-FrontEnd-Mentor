import React, { useState} from "react";
import LogoSvg from "../../images/logo.svg";
import cancelLogo from "../../images/icon-close.svg";
import burgerMenu from "../../images/icon-hamburger.svg"

const Navbar = () => {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className="p-4 md:p-12 font-mainFont text-xl flex md:flex-row md:justify-between md:items-center flex-col">
      <div className="flex justify-between md:justify-start items-center w-full md:w-1/2 pt-4 md:pt-0">
        <a href="index.html" className="normal-case text-xl text-white md:z-0 z-50 md:block"><img className="w-3/4 md:w-full" src={`${LogoSvg}`} alt="Logo oficial de LoopStudio"/></a>
        <button onClick={handleToggle} className= "md:hidden md:z-0 z-50">
          <img src= {isActive ? `${cancelLogo}` : `${burgerMenu}`} 
          alt= {isActive ? "Ícono para cancelar el despliegue del menú" : "Ícono del menú hamburguesa"} />
        </button>
      </div>
      <div>
        <ul className={isActive ? "md:hidden text-white z-40 bg-black h-screen w-screen absolute inset-0 flex flex-col justify-center items-start font-secondaryFont" : "hidden"}>
          <li className="pb-2 pl-4">
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">ABOUT</a>
          </li>
          <li className="pb-2 pl-4">
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">CARRERS</a>
          </li>
          <li className="pb-2 pl-4">
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">EVENTS</a>
          </li>
          <li className="pb-2 pl-4">
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">PRODUCTS</a>
          </li>
          <li className="pb-2 pl-4">
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">SUPPORT</a>
          </li>
        </ul>
        <ul className="hidden md:flex  md:items-center md:justify-end text-white justify-center lg:text-lg md:text-sm  items-start md:font-mainFont font-secondaryFont">
          <li className="pb-2 md:pb-0 pl-4">
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">About</a>
          </li>
          <li className="pb-2 md:pb-0 pl-4">
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">Carrers</a>
          </li>
          <li className="pb-2 md:pb-0 pl-4">
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">Events</a>
          </li>
          <li className="pb-2 md:pb-0 pl-4">
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">Products</a>
          </li>
          <li className="pb-2 md:pb-0 pl-4">
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">Support</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;