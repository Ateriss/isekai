


function Title(props: {title:string, styled:string}){
    return(
        <h1 className={`tracking-widest uppercase text-3xl font-extrabold stroke text-center ${props.styled}`} >{props.title}</h1>
    )
}

export { Title }