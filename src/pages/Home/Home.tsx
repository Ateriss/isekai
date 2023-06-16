import { Spot } from "../../Components/Spot";
import recorte from "../../assets/Recorter feo.png";
import katana from "../../assets/katanasf.png";
import katana2 from "../../assets/katanasf2.png";
import fondoKatana from "../../assets/fondo-katana.png";
import { Banner } from "./components/Banner";import prueba from "../../assets/fondo-feo.png";

import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { useRef } from "react";

function Home() {
  const parallax = useRef<IParallax>(null!);

  return (
    <section>
      <Parallax ref={parallax} pages={3} style={{ backgroundColor: "black" }}>
        <ParallaxLayer speed={0.5} offset={0} factor={2.5}></ParallaxLayer>
        <ParallaxLayer speed={1} offset={0} factor={1} >
          <img src="" alt="" />
          <h1 className="w-screen text-center  absolute inset-0 text-white uppercase font-semibold text-2xl mt-12">
            Próximamente
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.5}
          offset={0}
          factor={1}
          sticky={{ start: 0, end: 1 }}
        >
            <img src={recorte} alt="" className="w-full h-full object-cover" />
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={1} factor={1}></ParallaxLayer>
            <img src={fondoKatana} alt="" className="w-full h-full object-cover" />
        <ParallaxLayer speed={0.5} offset={2} factor={1}>
            <img src={katana2} alt="" className="w-full h-full object-cover" />
        </ParallaxLayer>
      </Parallax>
    </section>
  );
}

export { Home };

/*            
                <Spot styled='w-3/4 aspect-square bg-blue-400 top-1/4 right-6 absolute ' animated='animate-spot' ></Spot>
                <Spot styled='w-1/2 aspect-square bg-blue-400 inset-y-48 absolute' animated='animate-spot2' ></Spot>
                <Spot styled='w-2/5 aspect-square bg-blue-400  end-0.5 absolute' animated='animate-spot3' ></Spot>
<div className="relative w-1/2 h-1/2">
                <Spot styled='w-32 h-32 bg-blue-400 m-6 absolute' animated='animate-spot' ></Spot>
                <Banner scrollTime={0.2}
                 image={recorte} styled=' absolute w-full h-full object-cover  object-center inset-0'></Banner>
            </div>
            <div className="relative w-1/2 h-1/2">
                <Spot styled='w-32 h-32 bg-blue-400 m-6 absolute' animated='animate-spot' ></Spot>
                <Banner scrollTime={0.5}
                 image={recorte} styled=' absolute w-full h-full object-cover  object-center inset-0'></Banner>
            </div>
            <div className="relative w-1/2 h-1/2">
                <Spot styled='w-32 h-32 bg-blue-400 m-6 absolute' animated='animate-spot' ></Spot>
                <Banner scrollTime={0.8}
                 image={recorte} styled=' absolute w-full h-full object-cover  object-center inset-0'></Banner>
            </div>*/
