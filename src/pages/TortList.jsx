import React, { useState } from "react";
import Fonmenu from "../png/gvn.jpg"
import cl from "./tort.module.css"
import Tortu from "./Tortu";
const TortList = () => {
    const [tortu]= useState([
        {id:1 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімаdfffwrerererfefmklvnodf;kbn;mlk;cmvsfm;klxm;klmv;kzmv;kmvoi;kjgpifnscnepfiomdk;lcmosfpoiknosdnpiosnk;klvnsinkov;lnosniovnksonkльне замовлення 15 шт.", img: Fonmenu},
        {id:2 , titel: "Кекс соковитий" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:3 , titel: "Кекс полуничка" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:4 , titel: "Кекс мягкий" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:5 , titel: "Кекс смачний" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:6 , titel: "Кекс англієць" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:7 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:8 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:9 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:10 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:11 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімdffdfdfddfdfdfdfdfrerererальне замовлення 15 шт.", img: Fonmenu},
        {id:12 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
      ])
    return (
        <div className={cl.tort}>
            {tortu.map((tort) => 
            <Tortu tort={tort} key={tort.id}/>)}
        </div>
    );
};

export default TortList;