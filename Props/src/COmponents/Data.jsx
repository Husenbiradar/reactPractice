import React from "react";

function Data({profile}){
    const [data, setData]=React.useState('Change Data')
    const [color, setColor]= React.useState('')

    const clickme=()=>{
        setData('My name is Khan')
    }
const changColor=()=>{
    
    setColor(data)
}
    return(
        <>
            <h1>{profile}</h1>
            <h2 onChange={{setData, setColor }} style={{backgroundColor: `${color}`}} >{data}</h2>
            <input type="text" placeholder="Enter the color Name" value={data} /> <br />
            <button onClick={changColor} >Click me</button>
            <button onClick={clickme} >Click me</button>
        </>
    )
}

export default Data