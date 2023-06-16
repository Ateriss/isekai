import { ArrowRight2 } from "iconsax-react"
import { AccountBtn } from "./AccountBtn"


function Account(props: {styled:string}){
    const { styled }= props;



    return(
        <section className={`${styled}`} >

                <AccountBtn title="Direcciones" >
                    <div>aún no tienes ninguna dirección registrada, cuando hagas una compra te pediremos que registres alguna para coordinar el envío.</div>
                </AccountBtn >

                <AccountBtn title="E-mail" >
                    <div>mail@mail.com</div>
                    <div className="text-xs underline">¿quieres cambiar tu cuenta de e-mail?</div>
                </AccountBtn >

                <AccountBtn title="Teléfono" >
                    <div>999 999 999</div>
                    <div className="text-xs underline">¿quieres cambiar tu número de teléfono?</div>
                </AccountBtn >

                <AccountBtn title="Cambiar Contraseña" >
                    <div>**********</div>
                    <div className="text-xs underline">¿quieres cambiar tu contraseña?</div>
                </AccountBtn >


        </section>
    )
}

export { Account }