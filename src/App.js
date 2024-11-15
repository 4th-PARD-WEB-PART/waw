import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { Quiz } from "./pages/Quiz";
import MainInput from "./pages/MainInput";
import CircleButtonPage from "./pages/CircleButtonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/input" element={<MainInput />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<CircleButtonPage />} />
    </Routes>
  );
}

export default App;
