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
import { useState } from "react";

function App() {
  let [selectedPage, setSelectedPage] = useState('work');

  
  return (
    <>
      <Topbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      {selectedPage === 'work' && <MainPage></MainPage>}
      {selectedPage === 'about' && <About></About>}
      {selectedPage === 'contact' && <Contact></Contact>}

    </>
  );
}

export default App;
