import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      {" "}
      {/* //mt-3 margin between lines */}
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h2>{" "}
        {/* use {parenthesis} for props component */}
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.Quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index); // "props." should be used instead of "this."
            }}
          >
            {/* "this.incrementQuantity" is for passed from function */}+
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.Quantity * props.product.price}
      </div>
      <div className="col-2">
        <button
          className="btn btn-danger"
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
