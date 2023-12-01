import React, { useState } from "react";
import "./App.css";
import Header from "./components/layouts/header";

function App() {
  const [getNavbar, setGetNavbar] = useState("");

  const handlerChange = () => {
    setGetNavbar("My Contact");
  };
  return (
    <div>
      <Header value={getNavbar} />
      <section>
        <h1>Hello Welcome To Jungler</h1>
        <button onClick={() => handlerChange()}>Ubah Navigasi</button>
      </section>
    </div>
  );
}

export default App;
