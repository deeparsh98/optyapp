import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardsPage from "./pages/Cards/CardsPage";
import ChatsPage from "./pages/Chat/ChatsPage";
import ChatScreenPage from "./pages/Chat/ChatScreenPage";

function App() {
  return (
    <div className="App">
     
      <Router>
          
        <Routes>
           <Route path="/chat/:person" element={<ChatScreenPage/>}/>
            <Route path="/chat" element={<ChatsPage/>}/>
            <Route path="/" element={<CardsPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;