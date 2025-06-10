// import { Link } from "react-router"
import ThemeToggle from "./ThemeToggle"

export default function Header() {

    return (
        <main>
            <div className="upper-header">
                {/* <Link to="/" className="nunito-font-800">Where in the world?</Link> */}
                <a href="/" className="nunito-font-800">Where in the world?</a>
                <ThemeToggle />
            </div>
        </main>
    )
}