import React from "react";
import axios from "axios";
import { useState } from "react";

function FetchGyms() {
  const [gyms, setGyms] = useState([]);

  const fetchGyms = () => {
    axios.get(" https://devapi.wtfup.me/").then((response) => {
      // console.log(response);
      setGyms(response.data);
    });
  };

  return (
    <>
      <div>
        <button
          className="btn btn-primary"
          onClick={fetchGyms}
          style={{
            width: "100px",
            height: "40px",
            margin: "10px",
            borderRadius: "5px",
            backgroundColor: "#007185",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Showing the gyms here
        </button>
      </div>

      <div className="container">
        <div className="row">
          {gyms.map((value, index) => {
            return (
              <div key={index} className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                    <p className="card-text">{value.address1}</p>
                    <p className="card-text">{value.address2}</p>
                    <div classname="container">{value.city}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FetchGyms;
