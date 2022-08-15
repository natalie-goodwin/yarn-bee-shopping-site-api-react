import React from "react";
import Product from "./Product"; /*import Product component */
import Container from "react-bootstrap/Container";


export default class ProductsInStore extends React.Component {
    
    render() {
        let product = [ /*this is the array of products and all product data;
        also includes empty arrays for user reviews of each product. */
            {
                name: "Lion Brand 24/7 Cotton Yarn"  ,
                image: "./images/lion-brand-yarn.jpg",
                price: "$5.99",   
                reviews: [],                 
            }, 
            {
                name: "Red Heart Yarn",
                image: "./images/red-heart-yarn.jpg",
                price: "$7.99",   
                reviews: []                   
            }, 
            {
                name: "Vodiye 37 Pcs Crochet Hooks Set",
                image: "./images/crochet-hooks-aluminum.jpg",
                price: "$6.50",  
                reviews: []                  
            }, 
            {
                name: "SINGER Self-Threading Hand Sewing Needles",
                image: "./images/self-threading needles.jpg",
                price: "$4.99",
                reviews: []             
            },                    
        ];

        let arr;
        arr = product.map( (product, index ) => 
                <Product name={product.name} 
                price={product.price} 
                image={product.image} 
                reviews={product.reviews}
                key={index} />
            
        ) /*the array includes subarrays for each element of the 
        product and the index; uses map method to populate the 
        array*/

        return (
            <Container>
            <div>
                <div>
                    <h4>Products</h4>
                    <h5>Below you will find a list of some of the items we sell. Please
                        feel free to leave reviews of the products to help us better 
                        serve our customers.
                    </h5>
                </div>
                {arr} {/*returns the array */}
            </div>  
            </Container>
                      
        );              
    }
}