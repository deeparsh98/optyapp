import { Box, Button } from "@mui/material";
import React from "react";
import { APIBaseURL } from "../../utils/constants";
import { ReactComponent as HeroImage } from "../../assets/img/hero-img.svg";
import { ReactComponent as OptyImgBig } from "../../assets/img/optmyzr-icon-big.svg";
import { PowerSettingsNew } from "@mui/icons-material";

const loginUrl = `https://local.optmyzr.com/apiaccess/api_authorize?response_type=code&client_id=F5F189EE-3B44-4C86-8AEF-C22EB7AB598D&redirect_uri=${APIBaseURL}/login`;
function startLogin() {
  window.location.href = loginUrl;
}

export default function Login() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      height={"100%"}
      alignItems={"center"}
      position={"relative"}
    >
      <Box position={"absolute"} top={0}>
        <HeroImage />
      </Box>
      <Box position={"absolute"} top={"56%"} marginLeft={"18px"}>
        <OptyImgBig />
        <Button
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            position: "absolute",
            left: "64px",
            top: "86px",
            backgroundColor: "#ddab46",
          }}
          variant="contained"
          color="primary"
          onClick={() => startLogin()}
        >
          <PowerSettingsNew />
        </Button>
      </Box>
    </Box>
  );
}
