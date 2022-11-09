import React, { useState } from "react";
import Charts from "./components/Charts";
import Sidebar from "./components/Sidebar";
import styles from './css/App.module.css';

function App(){
  const [isClicked,setIsClicked] = useState(false);

  return (
    <main className={styles.main}>
        <Sidebar setIsClicked={setIsClicked} isClicked={isClicked} />
        {isClicked && <Charts/>}
    </main>
  )
}

export default App;
