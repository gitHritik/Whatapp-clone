import "./App.css";
import Chat from "./component/Chat";
import Sidebar from "./component/Sidebar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./component/Login";
import { useStateValue } from "./component/StateProvider";

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route path="/" element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

// Hosting link
// https://whatsapp-clone-cb14a.web.app/
