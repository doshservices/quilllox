import { BrowserRouter, Routes } from "react-router-dom";
import AppNav from "./Components/AppNav";

const App = () => {

  return (
    <BrowserRouter>
      <AppNav />
      <Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
