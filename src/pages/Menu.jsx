import React from "react";
import cl from "./menu.module.css"
const Menu = (props) => {
    return (
        <div >
           <div className={cl.blog}>
                    <div className={cl.imeg}>
                        <a href="#">
                        <img className={cl.imeg} src={props.menu.img} alt={"dddd"} />
                    </a>
                    </div>
                    
                    <div className={cl.text}>
                        <a href="" className={cl.href}> {props.menu.id}. {props.menu.titel}</a>
                </div>
            </div>
        </div>
    );
};

export default Menu;