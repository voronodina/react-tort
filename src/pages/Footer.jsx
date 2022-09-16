import React from 'react'
import cl from "./Footer.module.css"
import logo from "../png/logo.png";
import img1 from "../png/cont/img1.png"
import img2 from "../png/cont/img2.png"
import img3 from "../png/cont/img3.png"
const Footer = () => {
    return (
        <div>
            <div>
                <div className={cl.Footer}>
                    <div className={cl.posishon}>
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
                    <div className={cl.posishon}>
                        <div><a href="#"><h1>Торти та кекси</h1></a></div>
                        <div><a href="#">Для хлопчиків</a></div>
                        <div><a href="#">Для дівчат</a></div>
                        <div><a href="#">Корпоративи</a></div>
                        <div><a href="#">Дні народження</a></div>
                        <div><a href="#">Весілля</a></div>
                    </div>
                    <div className={cl.posishon}>
                        <div className={cl.textcont}>
                            <div><p>Наші контакти</p></div> 
                            <div><p>+380</p></div>
                            <div><p>+380</p></div>
                            <div><p>Телефонуйте з 8 до 20:00 і <br/>ми вам допоможем</p></div>
                        </div>
                        <div className={cl.logocontblok}>
                            <div><a href="#"><img className={cl.logocont} src={img1} alt={"gdfgfd"} /></a></div>
                            <div><a href=""><img className={cl.logocont} src={img2} alt={"fdgfdg"} /></a></div>
                            <div><a href=""><img className={cl.logocont} src={img3} alt={"dfgfdg"} /></a></div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Footer;