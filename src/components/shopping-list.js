/*This component holds the array for the products on the "Shop Our Site" page*/
import React from "react";
import Item from "./item"; /*import Product component */
import AddToCartButton from "./add-to-cart-button";


export default class ShoppingList extends React.Component {
    render() {
        let item = [ /*this is the array of products and all product data;
        also includes empty arrays for user reviews of each product. */
            {
                name: "Lion Brand 24/7 Cotton Yarn"  ,
                image: "./images/lion-brand-yarn.jpg",
                price: "$5.99",
                button: <AddToCartButton/>,
                
            }, 
            {
                name: "Red Heart Yarn",
                image: "./images/red-heart-yarn.jpg",
                price: "$7.99",
                button: <AddToCartButton/>,
                
            }, 
            {
                name: "Lily Sugar'n Cream Yarn" ,
                image: "./images/lily-sugar-n-cream.jpg",
                price: "$8.99",
                button: <AddToCartButton/>,
              
            }, 
            {
                name: "Vodiye 37 Pcs Crochet Hooks Set",
                image: "./images/crochet-hooks-aluminum.jpg",
                price: "$6.50",
                button: <AddToCartButton/>,
               
            }, 
            {
                name: "SINGER Self-Threading Hand Sewing Needles",
                image: "./images/self-threading needles.jpg",
                price: "$4.99",
                button: <AddToCartButton/>,
               
            },                    
        ];

        let arr;
        arr = item.map( (item, index ) => 
            <Item name={item.name} 
            price={item.price} 
            button={item.button} 
            image={item.image} 
            key={index} />
        ) /*the array includes subarrays for each element of the 
        product and the index; uses map method to populate the 
        array*/

        return (
            <div>
                {arr}
            </div>
            
        )
    }
}