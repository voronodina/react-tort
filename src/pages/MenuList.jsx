import React, { useState } from "react";
import Menu1 from "../png/menuimg/menu1.jpeg"
import Menu2 from "../png/menuimg/menu2.jpg"
import Menu3 from "../png/menuimg/menu3.jpg"
import Menu4 from "../png/menuimg/menu4.jpg"
import Menu5 from "../png/menuimg/menu5.jpg"
import Menu6 from "../png/menuimg/menu6.jpg"
import cl from "./menu.module.css"
import Menu from "./Menu";
const MenuList = () => {
    const [menuu]= useState([
        { id: 1 , titel: "Для хлопчиків" , img: Menu1},
        { id: 2 , titel: "Для дівчаток" ,  img: Menu2},
        { id: 3 ,titel: "День народження" ,  img: Menu3},
        { id: 4 ,titel: "Корпоратив" ,  img: Menu4},
        { id: 5 ,titel: "Весільні" ,  img: Menu5},
        { id: 6 ,titel: "Кекси" ,  img: Menu6},
      ])
    return (
        <div>
            <div className={cl.menutext}>
                <h1>
                    ВИБИРАЙТЕ ТОРТИ, ТА ЗАМОВЛЯЙТЕ.
                </h1>
            </div>
            <div className={cl.menu}>
            {menuu.map((menu) => 
            <Menu menu={menu} key={menu.id}/>)}
            </div>
        </div>
    );
};

export default MenuList;