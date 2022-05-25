import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/home"
import { SelectProfileScreen } from "./screens/select_profiles";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SelectProfileScreen />} />
      <Route path="/home" element={<HomeScreen />}  />
    </Routes>
  </BrowserRouter>
);

export default App;