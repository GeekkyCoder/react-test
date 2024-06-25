import { Grid, Box, Paper } from "@mui/material";
import BarChartBox from "../../components/charts/barchart/BarChart";
import BigChartBox from "../../components/charts/bigchartbox/BigChartBox";
import ChartBox from "../../components/charts/chartbox/ChartBox";
import PieChartBox from "../../components/charts/piechartbox/PieChartBox";
import LeftSideBar from "../../components/leftsidebar/LeftSideBar";
import RightSideBar from "../../components/rightsidebar/RightSideBar";

import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";

function Main() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Paper style={{ height: "100%", padding: "1em", paddingTop: "4em" }}>
          <LeftSideBar />
        </Paper>
      </Grid>
      <Grid item xs={8} sx={{ my: "2em" }}>
        <Paper style={{ height: "100%" }}>
          <Box sx={{ p: ".5em" }}>
            <Grid container spacing={2}>
              <Grid item xs={4} sx={{ my: "1em" }}>
                <Paper elevation={3} sx={{ height: "200px", p: "1em" }}>
                  <ChartBox {...chartBoxUser} />
                </Paper>
              </Grid>
              <Grid item xs={4} sx={{ my: "1em" }}>
                <Paper elevation={3} sx={{ height: "200px", p: "1em" }}>
                  <ChartBox {...chartBoxProduct} />
                </Paper>
              </Grid>
              <Grid item xs={4} sx={{ my: "1em" }}>
                <Paper elevation={3} sx={{ height: "200px", p: "1em" }}>
                  <ChartBox {...chartBoxConversion} />
                </Paper>
              </Grid>
              <Grid item xs={12} sx={{ my: "1em" }}>
                <Paper elevation={3} sx={{ height: "200px", p: "1em" }}>
                  <ChartBox {...chartBoxRevenue} />
                </Paper>
              </Grid>
              <Grid item xs={6} sx={{ my: "1em" }}>
                <Paper elevation={3} sx={{ my: "1em", p: "1em" }}>
                  <BarChartBox {...barChartBoxVisit} />
                </Paper>
              </Grid>
              <Grid item xs={6} sx={{ my: "1em" }}>
                <Paper elevation={3} sx={{ my: "1em", p: "1em" }}>
                  <BarChartBox {...barChartBoxRevenue} />
                </Paper>
              </Grid>
              <Grid item xs={12} sx={{ my: "1em" }}>
                <Paper elevation={3} sx={{ my: "1em", p: "1em" }}>
                  <PieChartBox />
                </Paper>
              </Grid>
              <Grid item xs={12} sx={{ my: "1em" }}>
                <Paper elevation={3} sx={{ my: "1em", p: "1em" }}>
                  <BigChartBox />
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper style={{ height: "100%", padding: ".5em", p: "1em" }}>
          <RightSideBar />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Main;
