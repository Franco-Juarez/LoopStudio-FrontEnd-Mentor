import React from "react";

const CreationImg = (props) => {
  return (
    <figure className="px-4 md:pl-0 md:pr-4 cursor-pointer">
      <picture>
        <source srcSet={`${props.desktopImg}`} media="(min-width: 768px)" />
        <img className="relative z-0 hover:opacity-50" src={`${props.img}`} alt={`${props.alt}`} />
      </picture>
      <figcaption className="relative bottom-16 left-0 z-50 ml-4 text-xl w-2/5 leading-6 h-8 lg:w-2/3 lg:h-full lg:bottom-24 lg:left-0 pr-4 text-left text-white lg:text-2xl  lg:pr-6 lg:m-0 lg:pl-4">{props.text}</figcaption>
    </figure>
  )
}

export default CreationImg;


