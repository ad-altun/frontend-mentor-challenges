// import { useEffect, useState } from "react";
import Home from './pages/Home.tsx'
import Header from "./components/Header.tsx";

function App() {

  return (
    <div >
      <div className={`app nunito-font-300`} >
        <Header />
        <div className="card">
        </div>
        <Home />
      </div>
    </div>
  );
};

export default App;
