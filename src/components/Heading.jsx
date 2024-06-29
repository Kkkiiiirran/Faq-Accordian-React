import React from "react";
import svg from '../images/icon-star.svg'
const Heading = (props) => {
    const style ={
        display: "flex",
        fontWeight: "800",
        fontSize: "2.5rem",
        gap: "1rem"
    }
    return (
        <div style={style}>
            <img  src={svg} alt="" />
            <h1>{props.text}</h1>
        </div>
    
    )
}

export default Heading;