import React from "react";
import LogoSvg from "../../images/logo.svg";
import FacebookIcon from "../../images/icon-facebook.svg";
import InstaIcon from "../../images/icon-instagram.svg";
import TweetIcon from "../../images/icon-twitter.svg";
import PinterestIcon from "../../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-black pt-8 lg:p-12 lg:flex-row lg:justify-between font-mainFont">
      <div>
        <a href="index.html"><img className="p-8 w-full lg:px-0 lg:w-1/2" src={`${LogoSvg}`} alt="Logo de LoopStudios. Consiste en el nombre de la marca con una fuente elegante." /></a>
        <ul className="flex flex-col items-center text-white lg:flex-row text-sm">
          <li  className="text-center mb-4 lg:mr-4" >
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">About</a>
          </li>
          <li className="text-center mb-4 lg:mr-4" >
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">Careers</a>
          </li>
          <li className="text-center mb-4 lg:mr-4" >
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">Events</a>
          </li> 
          <li  className="text-center mb-4 lg:mr-4" >
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="#">Products</a>
          </li>
          <li  className="text-center mb-4 lg:mr-4" >
            <a className="hover:underline-offset-4 hover:decoration-2 hover:underline" href="">Support</a>
          </li>
        </ul>
      </div>
      <div className="lg:flex lg:flex-col lg:items-end">
        <ul className="flex justify-center w-full items-center my-8 lg:justify-end">
          <li className="mr-4 hover:underline-offset-4 hover:decoration-2 hover:underline">
            <a href="https://facebook.com" target="_blank"><img className="hover:opacity-50" src={`${FacebookIcon}`} alt="El reconocido ícono de Facebook." /></a>
          </li>
          <li className="mr-4">
            <a href="https://twitter.com" target="_blank"><img className="hover:opacity-50" src={`${TweetIcon}`} alt="El logo de Twitter, un simpático pajarito celeste." /></a>
          </li>
          <li className=" mr-4">
            <a href="https://pinterest.com" target="_blank"><img className="hover:opacity-50" src={`${PinterestIcon}`} alt="El logo de Pinterest, una letra P encerrada en un círculo." /></a>
          </li>
          <li className=" mr-4">
            <a href="https://instagram.com" target="_blank"><img className="hover:opacity-50" src={`${InstaIcon}`} alt="El logo de Intagram, el dibujo de una simpática cámara polaroid." /></a>
          </li>
        </ul>
        <p className="text-sm px-4 pb-4">© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  )  
}

export default Footer;