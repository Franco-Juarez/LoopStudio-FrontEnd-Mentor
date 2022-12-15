import React from "react";
import AboutImg from "../../images/mobile/image-interactive.jpg";
import AboutImgDkt from "../../images/desktop/image-interactive.jpg";

const AboutSection = () => {
  return (
    <section className="p-4 md:mx-12 lg:my-20 lg:p-0 lg:relative font-secondaryFont">
        <picture>
          <source srcSet={`${AboutImgDkt}`} media="(min-width: 500px)" />
          <img className="md:mx-auto md:my-0 lg:m-0" src={`${AboutImg}`} alt="Un hombre de mediana edad parece imitar a un Tiranosaurio Rex en una simulación de realidad virtual." />
        </picture>
        <article className="p-8 lg:z-50 lg:bg-white lg:w-1/2 lg:absolute lg:bottom-0 lg:right-0 lg:pt-10 lg:pl-10">
          <h2 className="text-center text-2xl mb-4 lg:text-left lg:text-4xl">THE LEADER IN INTERACTIVE VR</h2>
          <p className="text-center lg:text-left lg:text-lg">Founded in 2011, Loopstudios has been producing world-class virtual reality 
          projects for some of the best companies around the globe. Our award-winning 
          creations have transformed businesses through digital experiences that bind 
          to their brand.
          </p>
        </article>
    </section>
  )
}

export default AboutSection;