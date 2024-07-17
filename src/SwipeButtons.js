import React from "react";
import "./SwipeButtons.css";
import {
  Replay,
  Close,
  StarRate,
  Favorite,
  FlashOn,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const SwipeButtons = ({ onLike, onCancel }) => {
  return (
    <div className="swipeButtons">
      {/* <IconButton className="swipeButtons__repeat">
        <Replay fontSize="large" />
      </IconButton> */}
      <IconButton className="swipeButtons__left" onClick={onCancel}>
        <Close fontSize="large" />
      </IconButton>
      {/* <IconButton className="swipeButtons__star">
        <StarRate fontSize="large" />
      </IconButton> */}
      <IconButton className="swipeButtons__right" onClick={onLike}>
        <Favorite fontSize="large" />
      </IconButton>
      {/* <IconButton className="swipeButtons__lightning">
        <FlashOn fontSize="large" />
      </IconButton> */}
    </div>
  );
};

export default SwipeButtons;
