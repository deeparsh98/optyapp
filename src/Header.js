import React from "react";
import "./Header.css";
import { IconButton, Tooltip } from "@mui/material";
import {
  ArrowBackIos,
  Person,
  Forum,
  CompareArrows,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as OptyIcon } from "./assets/img/optmyzr-icon.svg";
import AccountMenu from "./components/UserMenu";

function Header({ backButton }) {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate(backButton)}>
          <ArrowBackIos className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <AccountMenu />
      )}
      <Link to="/app">
        <OptyIcon />
      </Link>
      <Link to="/app/chat">
        <IconButton>
          <Tooltip title="Switch Account" placement="top">
            <CompareArrows className="header__icon" fontSize="large" />
          </Tooltip>
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
