import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNav from "./Components/AppNav";
import HomePage from "./Pages/Index";
import { AppFooter } from "./Components/AppFooter";
import AllEvents from "./Pages/AllEvents";
import Contact from "./Pages/Contact";
import EventDetails from "./Pages/EventDetails";

const App = () => {

  return (
    <BrowserRouter>
      <AppNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/:name/:id" element={<EventDetails />} />
      </Routes>
      <AppFooter />
    </BrowserRouter>
  )
}

export default App;
