import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import WidgetsContainer from "./components/WidgetsContainer";
import styles from './css/App.module.css';


function App(){
  const [isClicked,setIsClicked] = useState(false);

  return (
    <main className={styles.main}>
        <Sidebar setIsClicked={setIsClicked} isClicked={isClicked} />
        {isClicked && <WidgetsContainer/>}
    </main>
  )
}

export default App;
