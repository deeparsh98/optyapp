import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import {
  applyOptSuggestion,
  fetchOptSuggestions,
} from "../../../utils/optmyzrapi";
import { CircularProgress } from "@mui/material";
import OptSuggestion from "./OptSuggestion";
import { mockData } from "./mockData";
import { getRowMapped } from "../../../utils/helpers";
import NoCards from "./NoCards";
import { toolTypeToOperation } from "../../../mappings/toolTypeToOperation";

function TinderCards({ account, onSwipe, suggestions }) {
  return (
    <div className="tinderCards__cardContainer">
      {!suggestions.fetched && <CircularProgress />}
      {suggestions.fetched && suggestions.rows.length === 0 && <NoCards />}
      {suggestions.fetched &&
        suggestions.rows.map((row, idx) => {
          let suggestion = getRowMapped(row, suggestions.columns);
          return (
            <TinderCard
              key={suggestion.toolname + idx}
              className="swipe"
              // onSwipe={(direction) => onSwipe(direction, idx)}
              onCardLeftScreen={(id) => onSwipe(id, idx)}
              // preventSwipe={["right", "left"]}
            >
              <OptSuggestion suggestion={suggestion} account={account} />
            </TinderCard>
          );
        })}
    </div>
  );
}

export default TinderCards;
