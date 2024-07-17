import React from "react";
import { ComponentForType } from "./SuggestionComponents/Map";
import "./TinderCards.css";
import { toolTypeToImage } from "../../../mappings/toolTypeToImage";
import { Box, Typography } from "@mui/material";

export default function OptSuggestion({ suggestion }) {
  const ComponentToRender = ComponentForType[suggestion.toolName];
  return (
    <>
      <div
        style={{
          backgroundImage: `url('/${toolTypeToImage[suggestion.toolName]}')`,
        }}
        className="card blur-2"
      ></div>

      <div className="overlay-div">
        <h2>{suggestion.toolName}</h2>
        <Box marginTop={"50px"}>
          {ComponentToRender && <ComponentToRender suggestion={suggestion} />}
        </Box>
      </div>
    </>
  );
}
