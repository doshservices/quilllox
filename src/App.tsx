import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNav from "./Components/AppNav";
import HomePage from "./Pages/Index";
import { AppFooter } from "./Components/AppFooter";
import AllEvents from "./Pages/AllEvents";
import Contact from "./Pages/Contact";
import EventDetails from "./Pages/EventDetails";
import Checkout from "./Pages/Checkout";
import ScrollToTop from "./Components/ScrollPageToTop";
import { Toaster } from "react-hot-toast";

const App = () => {

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
      />
      <AppNav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/:name/:id" element={<EventDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <AppFooter />
    </BrowserRouter>
  )
}

export default App;
