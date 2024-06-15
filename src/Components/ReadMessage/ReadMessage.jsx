import React, { useEffect, useState } from "react";
import { GoStar } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../ReadMessage/ReadMessage.css";
export default function ReadMessage() {
  const [seeEmail, setSeeEmail] = useState([]);
  const { readId } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://mail--box-client-default-rtdb.firebaseio.com/Cart/${readId}.json`
      )
      .then((response) => {
        if (response.data) {
          setSeeEmail({
            ...response.data,
          });
        
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [readId]);

  if (!seeEmail) {
    return <div>Loading...</div>;
  }
  return (
    <div className="All-read">
      <div className="heading">
        <h3>Text message</h3>
        <span>
          Gmail/inbox <GoStar />
        </span>
      </div>
      <div className="email-something">
        <li className="All-li-items">
          <CgProfile />
          {seeEmail.to}  
        </li >
        <li  className="All-name-items">{seeEmail.email}</li>
        <li className="All-name"> subject :-{seeEmail.subject}</li>
        <li className="time-stamp">{seeEmail.productDate}</li>
      </div>
      <div className="all-compose">
        <li>{seeEmail.compose}</li>
      </div>
    </div>
  );
}
