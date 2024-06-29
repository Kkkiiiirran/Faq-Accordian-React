// import React from "react";
// import AccordionBox from "./AccordianBox";
// import { accordionData } from "../accordionData";


// const Accordion = () => {
//     const style ={
//         boxSizing: "border-box",
//         maxWidth: "500px",
//         maxHeight: "50%",
//         // height: "200px",
//         backgroundColor: "white",
//         padding : "2rem"


//     }
//     return (
//         <div style={style}>
//             {accordionData.map(({title, content}) => (
//                 <AccordionBox title={title} content={content}/>
//             ))}
//             {/* <AccordionBox/> */}

//         </div>
//     );
// };

// export default Accordion;

import React, { useState } from "react";
import AccordionBox from "./AccordianBox";
import { accordionData } from "../accordionData";
import Heading from "./Heading";

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const style = {
        boxSizing: "border-box",
        maxWidth: "500px",
        backgroundColor: "white",
        padding: ".5rem 2rem",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    };

    return (
        <div style={style}>
            <Heading text="FAQs"/>
            {accordionData.map(({ title, content }, index) => (
                <AccordionBox 
                    key={index} 
                    title={title} 
                    content={content} 
                    isOpen={openIndex === index} 
                    onToggle={() => handleToggle(index)} 
                />
            ))}
        </div>
    );
};

export default Accordion;


