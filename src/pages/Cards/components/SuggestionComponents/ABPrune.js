import { Box, Typography } from "@mui/material";
import React from "react";

function lowercaseFirstLetter(str) {
  str = str.toLowerCase().split("_").join(" ");
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}
// l_h1: "Optmyzr",
//           l_h2: "Workflows for PPC Pros",
//           l_h3: "Free Trial Available",
//           l_d: "Optmyzr AdWords Tools. Optimization Solutions, Quality Score Tracker",
//           l_etad2: "Landing Page Checker, and more. Free Trial Available.",
function renderAd(adData, pref = "l_") {
  if (adData?.[pref + "adType"] === "EXPANDED_TEXT_AD") {
    return (
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        backgroundColor={"#f5f5f5"}
        padding={"10px"}
        marginTop={"10px"}
        borderRadius={"10px"}
      >
        <Typography
          variant="caption"
          element="p"
          color={"primary"}
          textAlign={"left"}
        >
          {adData?.[pref + "h1"]} | {adData?.[pref + "h2"]} |{" "}
          {adData?.[pref + "h3"]}
        </Typography>
        <Typography variant="caption" element="p" gutterBottom color={"green"}>
          {adData?.[pref + "tu"]}
        </Typography>
        <Typography
          variant="caption"
          element="p"
          gutterBottom
          textAlign={"left"}
          color={"#333"}
        >
          {adData?.[pref + "d"]} | {adData?.[pref + "etad2"]}
        </Typography>
      </Box>
    );
  }
  return <></>;
}

export default function ABPrune({ suggestion }) {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography variant="caption" gutterBottom>
        Pause Low Quality{" "}
        {lowercaseFirstLetter(suggestion.adData?.l_adType ?? "")}
      </Typography>
      <Typography variant="caption" element="p" gutterBottom>
        in Ad Group
      </Typography>
      <Typography variant="body" element="p" gutterBottom>
        {suggestion.adData?.l_an}
      </Typography>
      <Typography variant="caption" element="p" gutterBottom>
        Campaign
      </Typography>
      <Typography variant="body" element="p" gutterBottom>
        {suggestion.adData?.l_cmpn}
      </Typography>
      {renderAd(suggestion.adData)}

      <Typography
        variant="caption"
        element="p"
        gutterBottom
        paddingTop={"30px"}
      >
        Winning Ad is
      </Typography>
      {renderAd(suggestion.adData, "w_")}
    </Box>
  );
}
