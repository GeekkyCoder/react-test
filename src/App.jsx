import Header from "./components/header/Header";
import MiniLeftSideBar from "./components/minileftsidebar/MiniLeftSideBar";
import Main from "./pages/main/Main";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "70px 200px 200px 1fr",
        gridTemplateRows: "auto 1fr",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ gridColumn: "2/-1", gridRow: 1 }}>
        <Header />
      </Box>

      <Box
        sx={{
          gridColumn: "1",
          gridRow: "1/-1",
          bgcolor: "darkblue",
        }}
      >
        <MiniLeftSideBar />
      </Box>

      {/* <Main/> */}
      <Box sx={{ gridColumn: "2/-1", gridRow: "2/-1",columnGap:"10px",rowGap:"10px"}}>
         <Main/>
      </Box>
    </Box>
  );
}

export default App;
