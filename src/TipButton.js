import React, { Component } from "react";
import './button.css'

class TipButton extends Component {
  state = {
    amount: "50"
  }

  // Open and close the modal
  toggleModal = () => this.setState(state => ({
    modalOpen: !state.modalOpen
  }))

  // Update the amount of Near to send
  updateAmount = amount => this.setState({ amount: amount.toString() });

  initialAmount = "9";

  render() {
    const {
      receiver,
      sendNear
    } = this.props;
    const {
      amount,
      
    } = this.state;

    return (
      <>
     <div>
       <div className="pilihbutton">
      
            {/* <button onClick={() => this.updateAmount(this.initialAmount)} className="btn1" style={{ width: "60px", height: "60px" }}>
              1
            </button>

            <button onClick={() => this.updateAmount(this.initialAmount*2)} className="btn3" style={{ width: "60px", height: "60px" }}>
              2
            </button>

            <button onClick={() => this.updateAmount(this.initialAmount*4)} className="btn5" style={{ width: "60px", height: "60px" }}>
              4
            </button> */}

        </div>
            {/* Call the sendNear method */}
            <button
              onClick={() => sendNear(amount, receiver)}
              enabled={amount === "0"}
              className="truncate inline-block text-center relative whitespace-nowrap rounded-md font-medium text-body transition duration-150 ease-in-out bg-primary text-gray-100 hover:bg-opacity-70 py-3 px-4 text-sm w-full block"
            >
              Buy for {amount} Ⓝ
            </button>
          
        </div>
      </>
    );
  }
}

export default TipButton;
