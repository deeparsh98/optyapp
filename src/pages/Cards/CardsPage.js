import React from "react";
import TinderCards from "./components/TinderCards";
import Header from "../../Header";
import SwipeButtons from "../../SwipeButtons";
import { useLocation, useParams } from "react-router-dom";
import { array_remove, getRowMapped } from "../../utils/helpers";
import { mockData } from "../Chat/components/mockData";
import { toolTypeToOperation } from "../../mappings/toolTypeToOperation";
import {
  applyOptSuggestion,
  fetchAccounts,
  fetchOptSuggestions,
} from "../../utils/optmyzrapi";
import { mockDataOpts } from "./components/mockData";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function manipulateSuggestions(data) {
  return { ...data, fetched: true };
}

export default function CardsPage() {
  let accFromPath = useQuery().get("account");
  const [account, setAccount] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState({});

  React.useEffect(() => {
    if (!accFromPath) {
      async function fetchData() {
        let data = await fetchAccounts();
        if (data) {
          setAccount(getRowMapped(data.rows[0], data.columns).accountId);
        }
      }
      fetchData();
    } else {
      setAccount(accFromPath);
    }
  }, [accFromPath]);

  React.useEffect(() => {
    async function fetchData() {
      let data = await fetchOptSuggestions(account);
      if (data) setSuggestions(manipulateSuggestions(data));
      else {
        setSuggestions(manipulateSuggestions({ rows: [], columns: [] }));
      }
    }
    account && fetchData();

    // setSuggestions(manipulateSuggestions(mockDataOpts));
    // setSuggestions(manipulateSuggestions({ rows: [], columns: [] }));
  }, [account]);

  const onCardLeftScreen = (myIdentifier, idx) => {
    let newRows = [...suggestions.rows];
    let toRemove = array_remove(newRows, idx)?.[0] ?? {};
    setSuggestions({ ...suggestions, rows: newRows });
    myIdentifier == "right" &&
      applyOptSuggestion(
        account,
        toolTypeToOperation[
          getRowMapped(toRemove, suggestions.columns).toolName
        ] ?? "unknown"
      );
  };

  return (
    <div style={{ height: "100%" }}>
      <Header />
      <TinderCards
        account={account}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        onSwipe={onCardLeftScreen}
      />
      <SwipeButtons
        onLike={() => onCardLeftScreen("right", suggestions.rows.length - 1)}
        onCancel={() => onCardLeftScreen("left", suggestions.rows.length - 1)}
      />
    </div>
  );
}
