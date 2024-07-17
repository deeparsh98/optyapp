import { Box, Typography } from "@mui/material";
import React from "react";

export default function KeywordLasso({ suggestion }) {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography variant="caption" gutterBottom>
        Add a new Keyword
      </Typography>

      <Typography variant="caption" element="p" gutterBottom>
        in Ad Group
      </Typography>

      <Typography variant="body" element="p" gutterBottom>
        {suggestion.adGroupName}
      </Typography>

      <Typography variant="caption" element="p" gutterBottom>
        Campaign
      </Typography>

      <Typography variant="body" element="p" gutterBottom>
        {suggestion.campaignName}
      </Typography>

      <Typography variant="h6" gutterBottom>
        <em>"{suggestion.query}"</em>
      </Typography>
      <br />
      <Typography variant="caption" element="p" gutterBottom>
        for bid amount of {suggestion.maxCpc}$
      </Typography>
      <br />
      <Typography variant="h6" gutterBottom textAlign={"left"}>
        Impressions : {suggestion.impressions}
      </Typography>
      <Typography variant="h6" gutterBottom textAlign={"left"}>
        Cost : {suggestion.cost}$
      </Typography>
      <Typography variant="h6" gutterBottom textAlign={"left"}>
        Clicks : {suggestion.clicks}
      </Typography>

      {/* <h4>Add a new Keyword</h4>
      <br />
      <h3>
        <em>"{suggestion.query}"</em>
      </h3>
      <br />
      <h4>to Ad Group</h4>
      <br />
      <h3>{suggestion.adGroupName}</h3>
      <br />
      <h4>Campaign</h4>
      <br />
      <h3>{suggestion.campaignName}</h3> */}
    </Box>
  );
}
