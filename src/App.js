import "./App.css";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";

import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (data) => {
    setSearch(data)
  }
  // console.log(items)
  return (
    <>
      <Header setSearch={handleSearch} />
      <MainContainer search={search} />
    </>
  );
}

export default App;
