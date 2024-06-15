import { useDispatch, useSelector } from "react-redux";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./CreateEmail.css";
import {setTo,setCompose,setFrom,setSubject, setProductDate,} from "../EmailConfig/EmailConfig";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateEmail() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const navigate = useNavigate();

  const handleFromChange = (e) => {
    dispatch(setFrom(e.target.value));
  };

  const handleToChange = (e) => {
    dispatch(setTo(e.target.value));
  };

  const handleSubjectChange = (e) => {
    dispatch(setSubject(e.target.value));
  };

  const handleComposeChange = (editorState) => {
    setEditorState(editorState);
    dispatch(setCompose(editorState.getCurrentContent().getPlainText()));
  };

  const handleDate = () => {
    dispatch(setProductDate(new Date().toLocaleTimeString()));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://mail--box-client-default-rtdb.firebaseio.com/Cart.json",
        {
          email: email.from,
          to: email.to,
          subject: email.subject,
          compose: email.composing,
          productDate: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        }
      );
      alert(response.data.message || "Email sent sucessfully");
      navigate("/");
      setFrom("");
      setTo("");
      setCompose("");
      setSubject("");
      setEditorState(editorState.createEmpty());
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="All-form-elements">
        <div>
          <input
            className="email-sending"
            type="text"
            placeholder="Name"
            value={email.from}
            onChange={handleFromChange}
          ></input>
        </div>
        <div>
          <input
            type="email"
            placeholder="To"
            value={email.to}
            onChange={handleToChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            value={email.subject}
            onChange={handleSubjectChange}
          ></input>
        </div>
        <div>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleComposeChange}
            placeholder="Compose email"
          ></Editor>
        </div>
        <button type="submit" className="sending" onClick={handleDate}>
          Send
        </button>
      </form>
    </>
  );
}
