import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/main/Content";
import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBar } from "./components/materialUI/Mui";
import Preloader from "./components/preloader/Preloader";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="App"
      style={{
        position: "fixed",
        backgroundImage:
          'url("https://img.freepik.com/free-photo/morskie-oko-in-tatry_1204-510.jpg?w=996&t=st=1695565093~exp=1695565693~hmac=3cbf0b4881c5cd2c041cca7f562a87798663905b82130e43215dbd2a6636c43e")',
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
      }}
    >
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
        <Preloader />
        {/*  <Content open={open} /> */}
      </Box>
    </div>
  );
}

export default App;
