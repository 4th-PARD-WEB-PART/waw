import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { Quiz } from "./pages/Quiz";
import MainInput from "./pages/MainInput";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/input" element={<MainInput />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;
