import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./common/Header";
import { MainPage } from "./features/mainPage/MainPage";
import { MapPage } from "./features/mapPage/mapPage";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/" element={<Navigate to="/main" />} />
      </Routes>
    </HashRouter>
  )
};

export default App;
