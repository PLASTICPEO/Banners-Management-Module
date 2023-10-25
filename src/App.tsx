import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
