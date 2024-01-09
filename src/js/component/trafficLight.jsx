import React, { useState } from "react";


export default function TrafficLigth() {
const [selectColor,setSelectColor]=useState("red")

    return (
        <div>
            <div className="bg-dark  m-auto "  style={{ width: "1rem", height: "5rem"}}>

            </div>
            <div className=" container-fluid bg-dark p-2 d-flex-column justify-content-center align-items-center m-auto" style={{ width: "6rem", }}>
            <div 
                onClick={()=>setSelectColor("red")}
                className = { "ligth red " + (selectColor === "red" ?"glow":"" )} style={{ width: "5rem", height: "5rem", backgroundColor: "red", borderRadius: "5rem", margin:"0.3r" }}> </div>
                <div 
                onClick={()=>setSelectColor("yellow")}
                className = { "ligth yellow " + (selectColor === "yellow" ?"glow":"" )} style={{ width: "5rem", height: "5rem", backgroundColor: "yellow", borderRadius: "5rem",  }}> </div>
                <div 
                onClick={()=>setSelectColor("green")}
                className = { "ligth green " + (selectColor === "green" ?"glow":"" )} style={{ width: "5rem", height: "5rem", backgroundColor: "green", borderRadius: "5rem",  }}> </div>
            </div>

        </div>
    );
};
