import axios from "axios";
import React, { useEffect, useState } from "react";
import "../HomeItems/Home.css";
import { useNavigate } from "react-router-dom";
export default function Home({ setEmailLength }) {
  const [emails, setEmails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://mail--box-client-default-rtdb.firebaseio.com/Cart.json")
      .then((response) => {
        if (response && response.data) {
        const fetchEmails = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
          isNew: true,
          isold: false,
        }));
        setEmails(fetchEmails)
        setEmailLength(fetchEmails.length);
        setEmailLength(fetchEmails.filter(email => !email.isOld).length);
      }})
    
      .catch((err) => {
        console.error(err);
      });
  }, [setEmailLength]);

  const readMessageNav = (readId) => {
    axios
      .patch(
        `https://mail--box-client-default-rtdb.firebaseio.com/Cart/${readId}.json`,
        {
          isOld: true,
          isNew: false,
        }
      )
      .then(() => {
        setEmails((prevEmails) =>
          prevEmails.map((email) =>
            email.id === readId
              ? { ...email, isOld: true, isNew: false }
              : email
          )
        );
        setEmailLength((prevlength) => prevlength - 1);
        navigate(`/Read/${readId}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = (event, readId) => {
    event.stopPropagation();
    axios
      .delete(
        `https://mail--box-client-default-rtdb.firebaseio.com/Cart/${readId}.json`
      )
      .then(() => {
        setEmails((prevEmails) =>
          prevEmails.filter((email) => email.id !== readId)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  
  return (
    <div className="All-items">
      <ul>
        {emails.map(
          (email) =>
            !email.isdeleted && (
              <div
                key={email.id}
                className={"emailItem"}
                onClick={() => readMessageNav(email.id)}
              >
                <input type="Checkbox" />
                {!email.isOld && <div className="blueDot"></div>}
                <li>{email.subject}</li>
                <li className="compose">{email.compose}</li>
                <li>{email.productDate}</li>
                <li  className="del">
                  <button
                   
                    onClick={(event) => handleDelete(event, email.id)}
                  >
                    Delete
                  </button>
                </li>
              </div>
            )
        )}
      </ul>
    </div>
  );
}
