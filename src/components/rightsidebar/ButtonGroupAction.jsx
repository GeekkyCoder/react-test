import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function ButtonGroupAction() {
  return (
    <Box sx={{ p: "1em" }}>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
      >
        <Button variant="outlined"  sx={{ width: "70px" }}>
          Comps
        </Button>
        <Button variant="contained" sx={{ width: "70px" }}>
          Charts
        </Button>
      </ButtonGroup>
    </Box>
  );
}
