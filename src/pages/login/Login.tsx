import { Link } from "react-router-dom"
import { InputForm } from "../../Components/Form/InputForm"
import { Title } from "../../Components/Title"


function Login(){
    return(
        <section className="w-screen h-screen flex flex-col justify-center items-center text-slate-200 p-2">
            
            <div className="bg-pared-ladrillo  bg-cover  w-screen h-screen fixed -z-50"></div>
            <Title title='Iniciar sesión' />
            <form action="submit" className="mt-4 backdrop-brightness-75 w-4/5 flex flex-col justify-center items-center m-2 p-2 backdrop-blur-md rounded-lg shadow-2xl">
                <InputForm title="email" type="text" error='error' placeholder="" />
                <InputForm title="contraseña" type="password" error='error' placeholder=""  />

                <Link to='Login' className="text-sm underline text-blue-200">¿Olvidaste la contraseña?</Link>
                <p className="hidden">aquí va el captcha</p>
                <button type="submit" 
                className="bg-slate-800 p-2 rounded-lg m-4 focus:scale-105 active:scale-95">
                    Iniciar sesión</button>
                <div className=" flex flex-col text-center mt-4 mb-2">
                    <p>¿No tienes cuenta?</p>
                    <Link to='../singIn' className="font-bold">&#8594; Regístrate aquí &#8592; </Link>
                </div>

            </form>

        </section>
    )
}

export { Login }