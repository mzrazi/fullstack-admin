import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Outlet, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Families from "scenes/families";


import Prayer from "scenes/prayer";
import Notifications from "scenes/notifications";
import Members from "scenes/members";
import Message from "scenes/message";
import Gallery from "scenes/gallery";
import Addimage from "scenes/addimage";
import EditEvent from "scenes/editevent";
import Events from "scenes/events";
import AddEvents from "scenes/addevents";
import Login from "scenes/login/login";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  const PrivateRoutes = () => {
    const token = localStorage.getItem('token');
  return (
    token ? <Outlet/> : <Navigate to='/login'/>
  )
  }


  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
              <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/families" element={<Families />} />
                <Route path="/addevents" element={<AddEvents />} />
                <Route path="/events" element={<Events />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/addimage" element={<Addimage />} />
                <Route path="/prayertime" element={<Prayer />} />
                <Route path="/messages" element={<Message />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/editevents/:id" element={<EditEvent />} />
                <Route path="/members/:id" element={<Members />} />
                
              </Route>
            
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
