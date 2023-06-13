import { Menu } from "iconsax-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../services/api";

function Header() {
  const [visible, setVisible] = useState(false);
  const [catVisible, setCatVisible] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    getData('categories', setCategories)
  },[])

  return (
    <header 
    onMouseLeave={() => setVisible(false)} 
    className={` bg-black text-white leading-10 capitalize p-2 fixed z-40 transition-all 
    ${visible? 'w-2/3': 'rounded-br-xl' } }`}>
      <nav className={`transition-all 
      ${visible? 'h-screen inset-0': '-left-full'}`}>
        <Menu
          size="24"
          color="#ffffff"
          onClick={() => setVisible(!visible)}
          className="text-white z-50"
        />
        <div>
          <h1 className="hidden">Isekai</h1>
          <img src="" alt="" />
        </div>
        
          <div className={` transition-all absolute z-40 flex-col h-full justify-between p-2 mt-12 pb-20 flex 
          ${visible? 'inset-0 ' : 'text-transparent -left-full'}`}>
            <ul>
              <li>
                <Link 
                onMouseEnter={()=>setCatVisible(!catVisible)} 
                onMouseLeave={() => setCatVisible(false)} 
                to="Catalogo">
                  Catálogo</Link>
                <ul className={`p-2 transition-all ${catVisible? 'block':'hidden'}`}>
                  {categories.map((category)=>{
                  return <li className=" transition-all hover:tracking-widest" key={category.id} >{category.name}</li>})}
                </ul>
              </li>
              <li>
                <Link to="/"  className=" transition-all hover:tracking-widest">nosotros</Link>
              </li>
              <li>
                <Link to="/"  className=" transition-all hover:tracking-widest">info</Link>
              </li>
            </ul>
            <div   >
              <Link to='login' className=" transition-all hover:tracking-widest">Iniciar Sesión</Link>
            </div>
          </div>
        
      </nav>
    </header>
  );
}

export { Header };
