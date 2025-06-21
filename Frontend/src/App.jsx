import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDatailPage from "./pages/NoteDetailPage";
import  toast  from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDatailPage />} />
      </Routes>
    </div>
  );
};

export default App;
