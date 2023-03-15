import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Families from "scenes/families";
import Customers from "scenes/customers";
import Transactions from "scenes/prayer";

import Prayer from "scenes/prayer";
import Breakdown from "scenes/families";
import Admin from "scenes/admin";
import Members from "scenes/members";
import Message from "scenes/message";
import Gallery from "scenes/gallery";
import Addimage from "scenes/addimage";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/families" element={<Families />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/addimage" element={<Addimage/>} />
              <Route path="/prayertime" element={<Prayer />} />
              <Route path="/messages" element={<Message />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/members/:id" element={<Members />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
