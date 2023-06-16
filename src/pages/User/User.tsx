import { useEffect, useState } from "react"
import { Account } from "../../Components/Account"
import { Help } from "../../Components/Help"
import { Shoppined } from "../../Components/Shoppined"


function User(){
    const [shopVisible, setShopVisible] = useState(true);
    const [accountVisible, setAccountVisible]=useState(false);
    const [helpVisible, setHelpVisible] = useState(false);

    const handleVisible = (
        setVisible: React.Dispatch<React.SetStateAction<boolean>>
      ): void => {
        setShopVisible(false);
        setAccountVisible(false);
        setHelpVisible(false);
        setVisible(true);
        console.log(`compras ${shopVisible}, cuenta ${accountVisible}, ayuda ${helpVisible}`);
      };


    return(
        <section className="bg-black text-slate-200 p-2  min-h-screen ">
            <h1 className="uppercase  font-semibold text-2xl pb-4 pt-10 ">Hola Usuario</h1>
            <div className="flex pb-2 justify-between">
                <p className="p-2" onClick={()=> handleVisible(setShopVisible)} >Compras</p>
                <p className="p-2" onClick={()=> handleVisible(setAccountVisible)}>Cuenta</p>
                <p className="p-2" onClick={()=> handleVisible(setHelpVisible)}>Ayuda</p>

            </div >
            <hr className="mb-2"/>
            <div className="h-4/5">
                <Account  styled={`${accountVisible? 'block' : 'hidden'}`}/>
                <Shoppined  styled={`${shopVisible? 'block' : 'hidden'}`} />
                <Help  styled={`${helpVisible? 'block' : 'hidden'}`} />
            </div>
            
            <hr className="mb-2"/>
            <p>cerrar sesión</p>

        </section>
    )
}

export { User }