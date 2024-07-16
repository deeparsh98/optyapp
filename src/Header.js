import React from "react";
import "./Header.css";
import { IconButton, } from "@mui/material";
import { ArrowBackIos, Person, Forum } from '@mui/icons-material';
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as OptyIcon} from "./assets/img/optmyzr-icon.svg"

function Header({ backButton }) {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate(backButton)}>
          <ArrowBackIos className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <Person className="header__icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <OptyIcon/>
      </Link>
      <Link to="/chat">
        <IconButton>
          <Forum className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
