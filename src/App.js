import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { Quiz } from "./pages/Quiz";
import MainInput from "./pages/MainInput";
import CircleButtonPage from "./pages/CircleButtonPage";
import SharePage from "./SharePage";
import MainId from "./pages/MainId";
import { Solve } from "./pages/Solve";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/id" element={<MainId />} />
      <Route path="/input" element={<MainInput />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/solve" element={<Solve />} />
      <Route path="/result" element={<CircleButtonPage />} />
      <Route path="/share" element={<SharePage />} />
    </Routes>
  );
}

export default App;
