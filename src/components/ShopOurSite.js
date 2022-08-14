import React from "react";
import Product from "./Product"; /*import ProductList component */

export default class ShopOurSite extends React.Component {
    
    render() {
        let product = [ /*this is the array of products and all product data;
        also includes empty arrays for user reviews of each product. */
            {
                name: "Lion Brand 24/7 Cotton Yarn"  ,
                image: "./images/lion-brand-yarn.jpg",
                price: "$5.99",              
                
            }, 
            {
                name: "Red Heart Yarn",
                image: "./images/red-heart-yarn.jpg",
                price: "$7.99",             
                
            }, 
            {
                name: "Lily Sugar'n Cream Yarn" ,
                image: "./images/lily-sugar-n-cream.jpg",
                price: "$8.99",               
              
            }, 
            {
                name: "Vodiye 37 Pcs Crochet Hooks Set",
                image: "./images/crochet-hooks-aluminum.jpg",
                price: "$6.50",               
               
            }, 
            {
                name: "SINGER Self-Threading Hand Sewing Needles",
                image: "./images/self-threading needles.jpg",
                price: "$4.99",               
               
            },                    
        ];

        

        let arr;
        arr = product.map( (product, index ) => 
            <Product name={product.name} 
            price={product.price} 
            image={product.image} 
            key={index} />
            
        ) /*the array includes subarrays for each element of the 
        product and the index; uses map method to populate the 
        array*/

        return (
            <div>
                <div>
                    <h4>Products</h4>
                </div>
                {arr}
            </div>
            
        );    
          
    }
}