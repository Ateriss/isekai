

function Spot(props: {styled: string, animated: string}){
    const { styled, animated } = props;
    return(
        <>
        <div className={`${styled} ${animated}`} >
        </div>
        </>
    )
}

export { Spot }