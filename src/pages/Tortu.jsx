import React from "react";
import cl from "./tort.module.css"

const Tortu = (props) => {
    return(
    <div className={cl.tortwind}>
        <div className={cl.contentwind}>
            <div className={cl.imgtort}>
                <img className={cl.logotort} src={props.ceks.img} alt={"fff"} />
            </div>
            <div className={cl.textwind}>
                <div className={cl.titlewind}>{props.ceks.id}. {props.ceks.titel}</div>
                <div className={cl.bodywind}><p>{props.ceks.body}</p></div>
            </div>
        </div >
        <div className={cl.contaktwind}>
            <div>На подушечці форми любої є й ґудзик щоб пір’я геть жовте сховати</div>
        </div>
    </div>
    );
};

export default Tortu;