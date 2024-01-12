import React from "react";


const Section = ({title,Description})=>{



    return(
        <div className="section">
            <hr />
            <h1>{title}</h1>
            <p>{Description}</p>
        </div>
    )
}

export default Section