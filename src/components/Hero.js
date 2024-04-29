import HeroImg from "../assets/hero.png";
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle : 'Im a Frontend developer and designer'
  }
  return <section id="hero" className="flex flex-col md:flex-row px-5 py-36 bg-primary justify-center">
      <div  className="md:w-1/2 flex flex-col ">
        <h1 className="text-white text-6xl font-text-font">
          Hi ,<br /> Im <span className="text-black">B </span>Mano
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-10" >
            <a href="#" className="pr-5 hover:text-white"> <AiOutlineGithub size={40}/> </a>

            <a href="#" className="pr-5 hover:text-white"> <AiOutlineLinkedin size={40}/></a>

            <a href="#" className="hover:text-white"> 
            <AiOutlineInstagram size={40}/> </a>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} alt="" />
    </section>

}

