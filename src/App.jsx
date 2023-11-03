import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Githubrepos from "./components/Githubrepos";
import SearchBar from "./components/SearchBar";

function App() {
  const [owner, setOwner] = useState("");
  async function getData(data){
    const owner = data.trim().toLowerCase()
    console.log(owner)
    setOwner(owner)
    
  }
  return (
    <>
      <SearchBar giveData={getData} />
      <Githubrepos owner={owner}  />
    </>
  );
}

export default App;
