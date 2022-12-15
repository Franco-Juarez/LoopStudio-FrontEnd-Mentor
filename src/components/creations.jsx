import React from "react";
import CreationImg from "./creationImg";
import curiosity from "../../images/mobile/image-curiosity.jpg";
import curiosityDkt from "../../images/desktop/image-curiosity.jpg";
import deepEarth from "../../images/mobile/image-deep-earth.jpg";
import deepEarthDkt from "../../images/desktop/image-deep-earth.jpg";
import fisheye from "../../images/mobile/image-fisheye.jpg";
import fisheyeDkt from "../../images/desktop/image-fisheye.jpg";
import aboveImg from "../../images/mobile/image-from-above.jpg";
import aboveImgDkt from "../../images/desktop/image-from-above.jpg";
import nightArcade from "../../images/mobile/image-night-arcade.jpg";
import nightArcadeDkt from "../../images/desktop/image-night-arcade.jpg";
import soccerTeam from "../../images/mobile/image-soccer-team.jpg"
import soccerTeamDkt from "../../images/desktop/image-soccer-team.jpg"
import gridImg from "../../images/mobile/image-grid.jpg"
import gridImgDkt from "../../images/desktop/image-grid.jpg"
import borealis from "../../images/mobile/image-pocket-borealis.jpg"
import borealisDkt from "../../images/desktop/image-pocket-borealis.jpg"

const CreationSection = () => {
  return (
    <section className="flex flex-col pb-8 md:px-12 font-secondaryFont">
      <div className="lg:flex lg:justify-between lg:items-center lg:mb-12">
        <h2 className="text-2xl text-center mb-4 lg:text-4xl lg:m-0 lg:text-left">OUR CREATIONS</h2>
        <button className="btn btn-outline rounded-none hidden lg:block lg:mr-4 lg:px-10 font-mono hover:bg-black">SEE ALL</button>
      </div>
      <div className="md:flex md:flex-wrap md:justify-center xl:justify-between md:items-center">
        <CreationImg
        text="DEEP EARTH"
        img={deepEarth}
        desktopImg={deepEarthDkt}
        alt="La tierra vista desde el espacio exterior. De fondo, la oscuridad del universo con pequeños puntos destellantes."/>
        <CreationImg
        text="NIGHT ARCADE"
        img={nightArcade}
        desktopImg={nightArcadeDkt}
        alt="El primer plano de un flipper, irradia una luz de neón azulada sobre el tablero."/>
        <CreationImg
        text="SOCCER TEAM VR"
        img={soccerTeam}
        desktopImg={soccerTeamDkt} 
        alt="Un jovén juega al fútbol con una camiseta roja. Controla el balón en soledad sobre el verde césped."/>
        <CreationImg
        text="THE BEST GRID"
        img={gridImg}
        desktopImg={gridImgDkt} 
        alt="El plano corto de un automóvil de carreras. Los logos de los auspiciantes decoran su carrocería impoluta."/>
        <CreationImg
        text="FROM UP ABOVE VR"
        img={aboveImg}
        desktopImg={aboveImgDkt}
        alt="Una ruta asfaltada bordea un camino empinado. Se ven autos pequeños como hormigas."/>
        <CreationImg
        text="POCKET BOREALIS"
        img={borealis}
        desktopImg={borealisDkt}
        alt="Un cielo cubierto por una aurora boreal. Se destacan tonos verdosos y violáceos sobre una cumbre escarpada."/>
        <CreationImg
        text="THE CURIOSITY"
        img={curiosity}
        desktopImg={curiosityDkt} 
        alt="Un astromóvil sobre la superficie de Marte. Su parte delantera parece que mira al horizonte con ojos curiosos."/>
        <CreationImg
        text="MAKE IT FISHEYE"
        img={fisheye}
        desktopImg={fisheyeDkt}
        alt="Una toma realizada con un lente ojo de pez. Genera un efecto extraño, una especie de vórtice donde no se puede distinguir cuál es el objetivo de la fotografía."/>
      </div>
      <button className="btn btn-outline rounded-none mx-auto my-0 px-8 lg:hidden">SEE ALL</button>
    </section>
  )
}

export default CreationSection;