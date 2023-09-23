import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import MainComponent from "./components/main/MainComponent";
import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBar } from "./materialUI/Mui";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
        >
          <Header
            setOpen={setOpen}
            open={open}
          />
        </AppBar>
        <Sidebar
          setOpen={setOpen}
          open={open}
        />
        <MainComponent open={open} />
      </Box>
    </div>
  );
}

export default App;
