import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Homepage,
  Contact,
  Signup,
  Login,
  Places,
  Items,
  PlaceDetailPg,
  ProfilePg,
  BecomGuidePg,
} from "./pages/index";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./utils/ScrollToTop";
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";
import axiosInstance from "./auth/authHandler";
import { baseUrl } from "./utils/urls";
function App() {
  useEffect(() => {
    if (window.localStorage.getItem("access_token")) {
      axiosInstance.get(`${baseUrl}/current-user/`).then((response) => {
        window.localStorage.setItem("userId", response.data.id);
      });
    }
  }, []);
  console.log("%cMade with 💙 by Tech Minds", "color:#3F7CBF; font-size:30px");
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Toaster
            toastOptions={{
              className: "",
              style: {
                background: "#263743",
                color: "#ffff",
                padding: "10px",
                borderRadius: "8px",
                fontFamily: "Rhizome",
                fontSize: "1rem",
              },
            }}
            position="top-right"
          />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/places" element={<Places />} />
            <Route path="/places/:place_id" element={<PlaceDetailPg />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/items" element={<Items />} />
            <Route path="/profile" element={<ProfilePg />} />
            <Route path="/guide-reg" element={<BecomGuidePg />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
