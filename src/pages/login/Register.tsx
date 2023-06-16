import { Link } from "react-router-dom"
import { InputForm } from "../../Components/Form/InputForm"
import { Title } from "../../Components/Title"



function Register(){
    return(
        <section className="w-screen  flex flex-col justify-center items-center text-slate-200 ">
            
            <div className="bg-pared-ladrillo  bg-cover  w-screen h-screen fixed inset-0 -z-50"></div>
            <div className="pt-10 ">
                <Title title='Regístrate' />
            </div>
            <form action="submit" className="mt-4 backdrop-brightness-75 w-4/5 flex flex-col justify-center items-center m-2 p-2 backdrop-blur-md rounded-lg shadow-2xl">
                <InputForm title="nombres" type="text" error='error' placeholder="" />
                <InputForm title="apellidos" type="text" error='error' placeholder="" />
                <InputForm title="email" type="email" error='error' placeholder="" />
                <InputForm title="teléfono" type="text" error='error' placeholder="" />
                <InputForm title="contraseña" type="password" error='error' placeholder=""  />
                <InputForm title="Repite la contraseña" type="password" error='error' placeholder=""  />
                

                <div className="flex items-start my-2">
                    <input className="m-1" type="checkbox" name="publicidad" id="" />
                    <label className="text-xs text-justify" htmlFor="publicidad">Quiero recibir comunicaciones comerciales personalizadas de <strong> Isekai Store </strong>a través de email</label>
                </div>
                <div className="flex items-start my-2">
                    <input className="m-1" type="checkbox" name="politica" id="" /> 
                    <label className="text-xs text-justify" htmlFor="politica">He leído y entiendo la <Link to='/' className="underline" >Política de privacidad y cookies</Link> </label>
                </div>
                <button type="submit" 
                className="bg-slate-800 p-2 rounded-lg m-4 focus:scale-105 active:scale-95">
                    Crear cuenta</button>
                <div className=" flex flex-col text-center mt-4 mb-2">
                    <p>¿Ya tienes una cuenta?</p>
                    <Link to='../Login' className="font-bold">&#8594; Inicia sesión aquí &#8592; </Link>
                </div>

            </form>

        </section>
    )
}

export { Register }