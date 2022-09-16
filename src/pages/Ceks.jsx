import React from "react";
import cl from "./Ceks.module.css"

const Ceks = (props) => {
    return(
        <div className={cl.windceks}> 
            <div className={cl.textcont}>  
                <div className={cl.windtitle}>
                <strong className={cl.title}>{props.ceks.id}. {props.ceks.titel}</strong>
                </div>
                <div className={cl.windbody}>
                    <p className={cl.body}>{props.ceks.body}</p>
                </div>
            </div>
            <div className={cl.windimg}>
                <a href="">
                    <img className={cl.windlogo} src={props.ceks.img} alt={"hhhh"} />
                </a>
            </div>
        </div>
    );
};

export default Ceks;