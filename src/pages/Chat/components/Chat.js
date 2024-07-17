import React from "react";
import "./Chat.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { getPlatformIcon } from "../../../utils/platformIcons";

const Chat = ({ account, name, message, type, timestamp }) => {
  const Icon = getPlatformIcon(type);
  return (
    <Link to={`/app/cards?account=${account}`}>
      <div className="chat">
        <Avatar className="chat__image" sx={{ width: 48, height: 48 }}>
          {<Icon />}
        </Avatar>
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        {/* <p className="chat__timestamp">{timestamp}</p> */}
      </div>
    </Link>
  );
};

export default Chat;
