import React from "react";
import { ReactComponent as NoWidget } from "../../../assets/img/no-widget.svg";
import { Box, Typography } from "@mui/material";

export default function NoCards() {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <NoWidget />

      <Typography variant={"h5"} gutterBottom>
        No Cards Available
      </Typography>
      <Typography
        width={"60%"}
        variant={"body"}
        gutterBottom
        textAlign={"center"}
      >
        {"Try Switching the account from top right ;)"}
      </Typography>
    </Box>
  );
}
