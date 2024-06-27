//import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="organizacion d-flex align-items-center">
        <h5 className="card-title mb-4">Mi organización</h5>
        <div className="card">
          <img src="./img/add.png"  alt="add"  className="img-fluid" onClick={props.cambiarMostrar} />
        </div>
      </div>
    </div>
  );
};

export default MiOrg;
