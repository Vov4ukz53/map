import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/main" element={<p>nanana</p>} />
        <Route path="/" element={<Navigate to="/main" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
