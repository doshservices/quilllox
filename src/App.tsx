import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNav from "./Components/AppNav";
import HomePage from "./Pages/Index";
import { AppFooter } from "./Components/AppFooter";

const App = () => {

  return (
    <BrowserRouter>
      <AppNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <AppFooter />
    </BrowserRouter>
  )
}

export default App;
