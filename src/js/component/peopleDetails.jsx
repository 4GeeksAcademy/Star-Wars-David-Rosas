import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import CardDetail from "./cardDetail.jsx";
import { useParams } from "react-router";


const PeopleDetails = () =>{
    const {id} = useParams
    const { store, action } = useContext(Context);
    useEffect (()=>{
        action.PeopleDetail(id)
    }, [])
    return (<div>
        {
            store.detallePeople.map((item,index)=>{
                return (<CardDetail key={index} item={item}/>)
            })
        }
    </div>

)}

export default PeopleDetails;