

function Help(props: {styled:string}){
    const { styled }= props;
    return(
        <section className={`${styled}`} >
            ¿tienes alguna duda? 
        </section>
    )
}

export { Help }