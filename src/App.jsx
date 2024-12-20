import EmptyArea from "./components/EmptyArea.jsx";
import ProjectPopUp from "./components/ProjectPopUp.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ProjectArea from "./components/ProjectArea.jsx";
import { useState } from "react";

function App() {
  const [btnAddOn, setBtnAddOn] = useState(false);
  const [myArray, setMyArray] = useState([]);
  const [id, setId] = useState('');




  return (
    <main className="h-screen my-8 flex">
      
      <Sidebar setBtnAddOn={setBtnAddOn} btnAddOn={btnAddOn} myArray={myArray} id={id} setId={setId} />

      {(btnAddOn) ? (<ProjectPopUp myArray={myArray} setMyArray={setMyArray} setBtnAddOn={setBtnAddOn} />) :  

      ( id ) ? (<ProjectArea myArray={myArray} id={id} setMyArray={setMyArray} setId={setId} />) : 
      
      (<EmptyArea setBtnAddOn={setBtnAddOn} />) }

    </main>
  );
}

export default App;