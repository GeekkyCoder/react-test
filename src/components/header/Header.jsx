import React from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { Button, Paper } from "@mui/material";

import AutorenewIcon from "@mui/icons-material/Autorenew";
import LoopIcon from "@mui/icons-material/Loop";
import {
  FlexContainer,
  HeaderContainer,
  RightBoxContainer,
} from "./header.styles";

function RightBox() {
  return (
    <RightBoxContainer>
      <FlexContainer>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          startIcon={<AutorenewIcon />}
        ></Button>
        <Button
          sx={{ ml: "1em" }}
          size="small"
          variant="contained"
          color="primary"
          startIcon={<LoopIcon />}
        ></Button>
      </FlexContainer>

      <FlexContainer>
        <Button size="small" variant="outlined" color="primary">
          Discord Changes
        </Button>
        <Button
          sx={{ ml: "1em" }}
          size="small"
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </FlexContainer>

      <Button
        sx={{ ml: "1em" }}
        size="small"
        variant="outlined"
        color="primary"
      >
        ...
      </Button>
    </RightBoxContainer>
  );
}

function Header() {
  return (
    <>
        <HeaderContainer>
          <Breadcrumb />
          <RightBox />
        </HeaderContainer>
    </>
  );
}

export default Header;
