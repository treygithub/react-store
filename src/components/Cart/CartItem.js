import React from 'react'

export default function CartItem({item,value}) {
  const {img,total,price,title,count,id} = item;
  const {increment,decrement,deleteItem} = value;

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img style={{width:"5rem", height:"5rem"}} src={img} alt="product" className="img-fluid"/>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black-decrement mx-1" onClick={()=>decrement(id)}> - </span>
          </div>
          <span className="btn btn-black-no-hover mx-1"> {count} </span>
          <div>
            <span className="btn btn-black-increment mx-1" onClick={()=>increment(id)}> + </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
          <div >
            <i className="fas fa-trash cart-icon" onClick={()=>deleteItem(id)}/>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong>Item Total: ${total}</strong>
        </div>
    </div>
  )
}
