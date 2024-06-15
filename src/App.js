import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Components/Context/AuthContext";
import Signin from "./Components/SignIn/Signin";
import CreateEmail from "./Components/Compose/Compose";
import Nav from "./Components/NavBar/Nav";
import VerticalBars from "./Components/VerticalBars/VerticalBars";
import Home from "./Components/HomeItems/Home";
import ReadMessage from "./Components/ReadMessage/ReadMessage";
import { useState } from "react";
function App() {
  const [emailsLength, setEmailsLength] = useState(0);
  const setEmailLength = (emailCount)=>{
    setEmailsLength(emailCount);
  }
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Nav />
          <VerticalBars  emailsLength={emailsLength}/>
          <Routes>
            <Route path="/" element={<Home  setEmailLength={setEmailLength} />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/Mailbox" element={<CreateEmail />}></Route>
            <Route path="/Read/:readId" element={<ReadMessage />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
