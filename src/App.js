import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardsPage from "./pages/Cards/CardsPage";
import ChatsPage from "./pages/Chat/ChatsPage";
import ChatScreenPage from "./pages/Chat/ChatScreenPage";
import Login from "./pages/login/Login";
import { fetchUserDetails } from "./utils/optmyzrapi";
import { Box, CircularProgress } from "@mui/material";

function AppRoutes() {
  return (
    <Box height={"100%"}>
      {window.user ? (
        <Routes path={"/app"}>
          <Route path="/" element={<CardsPage />}></Route>
          <Route path="/chat/:person" element={<ChatScreenPage />} />
          <Route path="/chat" element={<ChatsPage />} />
          <Route path="/cards" element={<CardsPage />}></Route>
        </Routes>
      ) : (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}

function LoggedIn() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // async function fetchData() {
    //   let data = await fetchUserDetails();
    //   window.user = data;
    //   setUser(data);
    // }
    // fetchData();

    window.user = {
      fullname: "Arshdeep",
      email: "arshdeep@optmyzr.com",
      parentId: "1",
      userId: "1",
    };
    setUser(window.user);
    return () => {
      delete window.user;
      setUser(null);
    };
  }, []);
  return (
    <Box height={"100%"}>
      <AppRoutes />
    </Box>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/app*" element={<LoggedIn />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
