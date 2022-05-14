import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="App flex w-full max-w-[47.938rem] flex-col items-center md:max-w-[79.938rem] xl:max-w-[120rem]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
