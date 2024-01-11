import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",   // "0" to be used for display of user at starting.
    };
  }
  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          //  call the form, onsubmit with function & passed event "e".
          e.preventDefault(); //now form won't reset
          this.props.addItem(this.state.productName, Number(this.state.productPrice) ); //it runs all events in add items.
        }}
      >
        <div className="mb-3 col-6">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Mobile Name
          </label>

          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              // **Be careful, while white typing 'e' charater in user price input box(all values are erased, it is a bug)
              this.setState({ productName: e.currentTarget.value }); //wrapped the "e.cur....value" in Number() funt'n
            }}
            value={this.state.productName}
          />

          <div id="name" className="form-text">
            Please write mobile name with model.
          </div>
        </div>

        <div className="mb-3 col-6">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>

          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: Number(e.currentTarget.value) }); //like reference/pointing "e.curr....Targ..v.ue" to target and value init.
            }}
            value={this.state.productPrice}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary col-2"
          //**{Be careful, don't use below, onclick event in button/submit button because this doesn't display in browser of add event,
          // as it reloads the page, so additems will be blink and vanished.}
          //
          // onClick={() => {
          //   this.props.addItem();
          // }}
        >
          Add Item
        </button>
      </form>
    );
  }
}

export default AddItem;
