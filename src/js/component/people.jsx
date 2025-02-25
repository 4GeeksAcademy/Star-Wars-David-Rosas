import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Card from "./card.jsx";

const People = ()=> {
    const { store, action } = useContext(Context);
    return( <div>
        {
            store.people.map((item,index)=>{
                return (<Card key={index} item={item}/>)
            })
        }
    </div>
)};


export default People;