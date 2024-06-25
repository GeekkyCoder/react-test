import * as React from "react";
import { BreaCrumbContainer } from "./breadcrumb.styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
function handleClick(event) {
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <BreaCrumbContainer role="presentation" onClick={handleClick}>
          <Box>
            <KeyboardArrowLeftIcon />
          </Box>

          <Box>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                color="darkblue"
                href="/"
                sx={{ fontSize: "12px" }}
              >
                Projects
              </Link>
              <Link
                underline="hover"
                color="darkblue"
                href="/material-ui/getting-started/installation/"
                sx={{ fontSize: "12px" }}
              >
                Dashboard
              </Link>
              <Typography color="text.primary" sx={{ fontSize: "12px" }}>
                2022 Inventory Dashboard
              </Typography>
            </Breadcrumbs>
          </Box>
        </BreaCrumbContainer>

        <Typography
          component={"div"}
          variant="h3"
          sx={{ fontSize: "22px", fontWeight: "bold" }}
        >
          2022 Inventory Dashboard
        </Typography>
      </Box>
    </>
  );
}
