import React from "react";
import "./Chats.css";
import Chat from "./Chat";
import { mockData } from "./mockData";
import { CircularProgress } from "@mui/material";
import { getRowMapped } from "../../../utils/helpers";
import { getPlatformIcon } from "../../../utils/platformIcons";
import { fetchAccounts } from "../../../utils/optmyzrapi";

const Chats = () => {
  const [accounts, setAccounts] = React.useState({});
  React.useEffect(() => {
    async function fetchData() {
      let data = await fetchAccounts();
      if (data) setAccounts({ ...data, fetched: true });
    }
    fetchData();

    // setAccounts({ ...mockData, fetched: true });
  }, []);

  return (
    <div className="chats" style={{ maxHeight: "82vh", overflow: "scroll" }}>
      {!accounts.fetched && <CircularProgress />}
      {accounts.fetched && accounts.rows.length === 0 && <h1>No Accounts</h1>}
      {accounts.fetched &&
        accounts.rows.map((row, idx) => {
          let account = getRowMapped(row, accounts.columns);
          return (
            <Chat
              account={account.accountId}
              name={account.accountName}
              message={account.accountId}
              timestamp=""
              type={account.accountType}
            />
          );
        })}
    </div>
  );
};

export default Chats;
