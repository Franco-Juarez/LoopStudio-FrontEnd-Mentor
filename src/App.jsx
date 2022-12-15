import './App.css'
import Navbar from './components/navBar';
import Hero from "./components/hero";
import imgHero from "../images/mobile/image-hero.jpg"
import imgHeroDkt from "../images/desktop/image-hero.jpg"
import AboutSection from './components/about';
import CreationSection from './components/creations';
import Footer from './components/footer';

function App() {

  const bgImgSize = () => {
    if (window.innerWidth >= 768) {
      return `url(${imgHeroDkt})`
    }
    else {
      return `url(${imgHero})`
    }
  }

  return (
    <div className="App">
      <div style={ {backgroundImage: bgImgSize() }} 
      className="bg-cover flex flex-col h-screen">
        <Navbar />
        <Hero />
      </div>
      <AboutSection/>
      <CreationSection/>
      <Footer/>
    </div>
  )
}

export default App
