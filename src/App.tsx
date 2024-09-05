import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNav from "./Components/AppNav";
import HomePage from "./Pages/Index";
import { AppFooter } from "./Components/AppFooter";
import AllEvents from "./Pages/AllEvents";

const App = () => {

  return (
    <BrowserRouter>
      <AppNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-events" element={<AllEvents />} />
      </Routes>
      <AppFooter />
    </BrowserRouter>
  )
}

export default App;
