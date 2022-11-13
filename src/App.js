import Topbar from "./Components/topbar";
import MainPage from "./Components/imgGridMainPage";
import Replace from "./Components/replace";
import Obscurity from "./Components/obscurity";
import Asthma from "./Components/asthma";
import Island from "./Components/island";
import Human from "./Components/human";
import Here from "./Components/here";
import OldNormal from "./Components/old-normal";
import Moments from "./Components/moments";
import About from "./Components/about";
import Contact from "./Components/contact";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {
  const works = ['replace', 'obscurity', 'asthma', 'island', 'human', 'here', 'old-normal', 'moments']
return (
    <>

      <Topbar works={works} />
      <Routes>
      <Route exact path="/" element={<MainPage  works={works}/>} />
        <Route exact path="/work" element={<MainPage  works={works}/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/work/replace" element={<Replace />} />
        <Route exact path="/work/obscurity" element={<Obscurity />} />
        <Route exact path="/work/asthma" element={<Asthma />} />
        <Route exact path="/work/island" element={<Island />} />
        <Route exact path="/work/human" element={<Human />} />
        <Route exact path="/work/here" element={<Here />} />
        <Route exact path="/work/old-normal" element={<OldNormal />} />
        <Route exact path="/work/moments" element={<Moments />} />
      </Routes>

    </>
  );
}

export default App;
