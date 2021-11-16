import React from 'react'
import "./productlist.css";
import Product from "../product/Product";
import {products} from "../../data";

function ProductList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Olyad</h1>
                <p className="pl-desc">
                    Olyad's a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>

            </div>
            <div className="pl-list">
               {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link}/>
               ))}
                
            </div>
        </div>
    )
}

export default ProductList
