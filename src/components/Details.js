import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from "react-router-dom";
import {ButtonContainer} from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          const {id,company,img,info,price,title,inCart} = value.detailProduct;
          return (
            <div className="containe py-5">
              <div className="row">
                <div className="col-10 mx-auto">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md6 my-3">
                  <img src={img} className="img-fluid" alt="product"/>
                </div>

                <div className="col-10 mx-auto col-md6 my-3">
                  <h3>Modle: {title}</h3>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className=" text-uppercase text-blue mt-3 mb-2">
                    Price: <span>$</span> {price}
                  </h4>
                  <p className="text-capitalized font-weight-bold mt3 mb-0">Product Info</p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>
                        Back to Products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                    cart
                    disabled={inCart?true:false}
                    onClick={()=>{
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    >
                      {inCart?"inCart":"Add to Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
