// import React, {useState} from "react";


// const AccordionBox = ({title, content}) => {
//     const [isOpen, setOpen] = useState(false);
//     const style = {  
//         display: "flex", 
//         fontSize: "16px", 
//         justifyContent: "space-between", 
//         alignItems:"center", 
//         gap: "2rem",
//         fontWeight: "700",
//         fontFamily: "Work Sans"
//     };

//     const parastyle = {
         
//         // textAlign: "justify",
//         fontFamily: "Work Sans",
//         color: "hsl(292, 16%, 49%)",
//         fontWeight: "400",
//         fontSize: "14px"

//     }
//     return (
//         <>
//             <div style={style}>
//                 <div>
//                     <h2>{title}</h2>
//                 </div>
//                 <div><button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+" }</button></div>
//             </div>
//             {isOpen && <p style={parastyle}>{content}</p>}
            
//         </>
        
//     )
// }

// export default AccordionBox;


import React from "react";
import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';

const AccordionBox = ({ title, content, isOpen, onToggle }) => {
    const style = {
        display: "flex", 
        fontSize: "16px", 
        justifyContent: "space-between", 
        alignItems: "center", 
        gap: "1rem",
        fontWeight: "700",
        fontFamily: "Work Sans"
    };

    const parastyle = {
        fontFamily: "Work Sans",
        color: "hsl(292, 16%, 49%)",
        fontWeight: "400",
        fontSize: "14px"
    };

    return (
        <>
            <div style={style}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    {isOpen ? <img onClick={onToggle} src={minus} alt="" /> : <img onClick={onToggle} src={plus} alt="" />}
                </div>
            </div>
            {isOpen && <p style={parastyle}>{content}</p>}
        </>
    );
};

export default AccordionBox;
