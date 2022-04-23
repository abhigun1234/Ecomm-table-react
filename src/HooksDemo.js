import React, { useState } from 'react';

function HooksDemo(props) {
    //this.state={name:ravi}
    //setStat
    const[name,setName]=useState('ravi')
    return (
        <div>
            {name}
            <button onClick={()=>setName("raj")}>setName</button> 
        </div>
    );
}

export default HooksDemo;