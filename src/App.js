import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { Quiz } from "./pages/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;
