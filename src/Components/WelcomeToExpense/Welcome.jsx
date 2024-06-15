
import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <Link to="/Welcome">
        <h1
          style={{
            fontStyle: "italic",
            fontSize: "30px",
            color: "#of572d",
            marginLeft: "500px",
          }}
        >
          Welcome to Expense Tracker
        </h1>
      </Link>
    </div>
  );
}
