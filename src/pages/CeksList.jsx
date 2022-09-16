import React, { useState } from "react";
import Fonmenu from "../png/gvn.jpg"
import Ceks from "./Ceks";
import cl from "./Ceks.module.css"
const CeksList = () => {
    const [cekss]= useState([
        {id:1 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:2 , titel: "Кекс соковитий" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:3 , titel: "Кекс полуничка" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:4 , titel: "Кекс мягкий" , body: "35 грн /.Мweererff dінімальне замwttwtr etertfgdfgоf sfdfвлення 15 шт.", img: Fonmenu},
        {id:5 , titel: "Кекс смачний" , body: "35 грн / шт.Міні мdfа rererdfgdfgwfdfd gfgdfльне замовлення 15 шт.", img: Fonmenu},
        {id:6 , titel: "Кекс англієць" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:7 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:8 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:9 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:10 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:11 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
        {id:12 , titel: "Кекс негоро" , body: "35 грн / шт.Мінімальне замовлення 15 шт.", img: Fonmenu},
      ])
    return (
        <div className={cl.ceks}>
            {cekss.map((ceks) => 
            <Ceks ceks={ceks} key={ceks.id}/>)}
        </div>
    );
};

export default CeksList;