import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
export const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="container mrt">
        <div className="Messagecontent">
          <div className="cartMessage"> Message </div>{" "}
        </div>
        <div className="Cartcontent">
          <div className="container">
            <div className="row">
              <div className="col-3"> product image </div>
              <div className="col-6">  </div>
              <div className="col-3"> Remove </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
