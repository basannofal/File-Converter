import React from "react";
import Home from "./Screen/Home";
import { Route, Routes} from "react-router-dom";
import WordToPdf from "./Screen/WordToPdf";


function App() {
  return (
  <>
      <Routes>
        <Route exact path="/" element={
        <>
          <Home />
        </>
        } ></Route>
      </Routes>

      <Routes>
        <Route path="/wordtopdf" element={ <WordToPdf />} ></Route> 
      </Routes>
  </>
  );
}

export default App;
