import React from "react";
import logo from "../png/logo.png"
import menu1 from "../png/menu1.png"
import menu2 from "../png/menu2.png"
import menu3 from "../png/menu3.png"
import cl from "./Header.module.css"
const Heder = function () {
    return (
        <div className={cl.fix}>
             <div className={cl.conteiner} >
                    <div className={cl.hed}>
                        <div className={cl.bloktexst}>
                            <div><img src={logo} alt={"njhn"} class={cl.logo}/></div>
                            <div><h1 className={cl.logotxt}>Торти для вас.</h1></div>
                        </div>
                        <div className={cl.contakt}>
                        <button  >
                            <span > Зателефунуй нам.</span>
                        </button>
                        </div>
                    </div>
                
                    <div className={cl.hedmenu}>
                        <img src={menu1} alt={"njhn"} className={cl.logomenu}/>
                        <a href="#"><p>Кекси</p></a>
                    </div>
                    <div className={cl.hedmenu}>
                        <img src={menu2} alt={"njhn"} className={cl.logomenu}/>
                        <a href="#"><p>Торти на день народження</p></a> 
                    </div>
                    <div className={cl.hedmenu}>
                        <img src={menu3} alt={"njhn"} className={cl.logomenu}/>
                        <a href="#"><p>Торти на весілля</p></a>
                    </div>

                  
                </div>
        </div>
    );
};
export default Heder;