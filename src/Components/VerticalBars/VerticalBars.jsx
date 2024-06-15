import React from "react";
import { BsPencil } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineSnooze } from "react-icons/md";
import { IoSendOutline } from "react-icons/io5";
import { MdOutlineDrafts } from "react-icons/md";
import { MdForwardToInbox } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../VerticalBars/Vertical.css";
export default function VerticalBars({ emailsLength }) {
  const navigate = useNavigate();

  const mailBox = () => {
    navigate("/Mailbox");
  };

  const homeNav = () => {
    navigate("/");
  };

  const sentNav = () => {
    navigate("/");
  };
  return (
    <div className="vertical-bars-container">
      <div>
        <div>
          <button className="compose-button" onClick={mailBox}>
            <BsPencil /> Compose
          </button>
        </div>
        <div className="menu-items">
          <ul>
            <li className="All-li-tages" onClick={homeNav}>
              <MdForwardToInbox />
              Inbox
              {emailsLength > 0 && (
                <div className="unread">
                  {emailsLength}
                  <span className="unmsg">Unread</span>
                </div>
              )}
            </li>
            <li className="All-li-tages">
              <FaRegStar /> Star
            </li>
            <li className="All-li-tages">
              <MdOutlineSnooze /> Snoozed
            </li>
            <li className="All-li-tages" onClick={sentNav}>
              <IoSendOutline /> Sent
            </li>
            <li className="All-li-tages">
              <MdOutlineDrafts /> Drafts
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
