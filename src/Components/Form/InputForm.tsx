

function InputForm(props: { title: string, placeholder:string, error:string,  type:string }){
    const { title, placeholder, error, type } = props;
    return(
        <div className="w-full mb-2">
            <label htmlFor={title} className="capitalize text-sm">{title}</label>
            <input type={type} name={title} placeholder={placeholder} 
            className=" w-full rounded-lg p-2 bg-transparent border-2 border-slate-200 mb-1"/>
            <p className="hidden bg-red-500 p-1 text-sm rounded-lg w-full first-letter:uppercase" >{error}</p>
        </div>
    )
}

export { InputForm }