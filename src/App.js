import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./components/Game";
import HomePage from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:level" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
