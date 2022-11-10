import React, { useState } from "react";
import Widgets from "./components/Widgets";
import Sidebar from "./components/Sidebar";
import styles from './css/App.module.css';

function App(){
  const [isClicked,setIsClicked] = useState(false);

  return (
    <main className={styles.main}>
        <Sidebar setIsClicked={setIsClicked} isClicked={isClicked} />
        {isClicked && <Widgets/>}
    </main>
  )
}

export default App;
