import { useState } from "react";
import Cake from "../components/Cake";

const CakeContainer =() =>{
    const victoriaSponge = {
        cakeName: "Victoria Sponge",
        ingredients: [
            "eggs",
            "butter",
            "sugar",
            "self-raising flour",
            "baking powder",
            "milk"
        ],
        price: 5,
        rating: 5
    }

    const teaLoaf ={
        cakeName: "Tea Loaf",
        ingredients: [
            "eggs",
            "oil",
            "dried fruit",
            "sugar",
            "self-raising flour",
            "strong tea",
        ],
        price: 2,
        rating: 3
   }

   const carrotCake ={
        cakeName: "Carrot Cake",
        ingredients: [
        "carrots",
            "walnuts",
            "oil",
            "cream cheese",
            "flour",
            "sugar",
        ],
        price: 8,
        rating: 5
    } 

    return(
        <div className="cakeContainer">
            <Cake cake={victoriaSponge}></Cake>
            <Cake cake={teaLoaf}></Cake>
            <Cake cake={carrotCake}></Cake>
        </div>
    )
}
export default CakeContainer;