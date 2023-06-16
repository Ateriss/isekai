
import { HeartSlash } from 'iconsax-react';
import { Link } from "react-router-dom";

function NoList(){
    return(
        <div className="p-2 backdrop-brightness-75 bg-transparent backdrop-blur-md rounded-lg shadow-sm flex flex-col justify-center items-center text-center h-3/4"  >
      
        <HeartSlash size='100' className='scale-95 animate-beat' />
        <p className="py-4">Parece que aún no hay nada en tu lista de deseos</p>
        <p>¿Por qué no miras nuestro 
             <Link to='Catalogo' className="font-bold underline cursor-pointer" > Catálogo </Link>  
            para que te enamores de nuestra colección?</p>
    </div>
    )
}

export{ NoList }