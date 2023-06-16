
import { Title } from "../../Components/Title"
import { NoList } from "../../Components/noList"


function ShoppingCard(){
    return(
        <section  className="text-slate-200 p-2 pt-10 h-screen flex flex-col justify-center items-center" >
        <div className=" bg-pared-ladrillo before:mix-blend-screen bg-cover inset-0  w-screen h-screen fixed -z-50"></div>
        
        <div className="hidden">
            <Title title="Tu lista de compras" />
        </div>

        

        </section>
    )
}


export { ShoppingCard }