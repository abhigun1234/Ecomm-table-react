import React , {useState} from 'react';

function Hooks(props) {
    const [name,setName]=useState("ram")
    return (
        <div>
           <button onClick={()=>setName("raj")}>{name}</button> 
        </div>
    );
}

export default Hooks;