import React, { useState } from "react";
import ChildeCompo from "./Comop/ChildeCompo";

export default function ParetComponte() {
    const [UIcolor, setUIcolor] = useState(null)
    const getColor=(color)=>{
        setUIcolor(color)
    }
    return(
        <div>
            <div style={{backgroundColor: `${UIcolor}` , width: '30rem', height: '15rem' }}></div>
            <ChildeCompo getColor={getColor} />
        </div>
    )
}