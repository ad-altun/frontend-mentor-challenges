import { useEffect, useState } from "react";
import Home from './pages/Home.tsx'
import Header from "./components/Header.tsx";

export type ThemeModes = "light" | "dark" | null;

function App() {
  const selectedTheme = localStorage.getItem('selectedTheme') as ThemeModes;
  const [theme, setTheme] = useState(selectedTheme);

  // update dark mode
  useEffect(() => {
    const updateTheme = () => setTheme(localStorage.getItem('selectedTheme') as ThemeModes)
    updateTheme();
  }, [selectedTheme, theme]);

  return (
    <div >
      <div className={`app nunito-font-300`} >
        <Header theme={theme} />
        <div className="card">
        </div>
        <Home />
      </div>
    </div>
  );
};

export default App;
