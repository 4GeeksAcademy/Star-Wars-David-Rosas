import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const Card = (props) => {
    const { store, action } = useContext(Context);
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={"/peopledetail/"+props.item.uid}>
                <button type="button" class="btn btn-outline-primary">Learn more</button>
                </Link>
            </div>
        </div>
}

export default Card;