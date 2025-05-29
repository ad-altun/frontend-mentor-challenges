import { useState } from "react";
import { Link } from "react-router"
import { FaMoon } from "react-icons/fa";
import { type ThemeModes } from "../App";

export default function Header({ theme }: { [key: string]: ThemeModes }) {


    const [mode, setMode] = useState(theme);

    const setDarkMode = () => {
        document.querySelector('body')?.setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
        // setMode(theme);
    }

    const setLightMode = () => {
        document.querySelector('body')?.setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
        // setMode(theme);
    }

    const handleClick = () => {
        if (mode === "dark") {
            setLightMode();
            setMode("light");
        }
        else {
            setDarkMode();
            setMode("dark");
        }

    };

    if (mode === "dark") {
        setDarkMode();

    }
    else {
        setLightMode();
    }

    return (
        <main>
            <div className="upper-header">
                <Link to="/" className="nunito-font-800">Where in the world?</Link>
                <div className="darkMode" onClick={handleClick} >
                    <FaMoon className=""></FaMoon>
                    <button className="nunito-font-600 dark-btn">Dark Mode</button>
                </div>
            </div>
        </main>
    )
}