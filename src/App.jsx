import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import LearnMore from "./components/LearnMore";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
