import { Link } from "react-router";


export default function FetchFailed() {
    return (
        <div className="fetch-failed">
            <h1 className="fetch-failed-text">Sorry, a roblem occured during the loading the data.</h1>
            <Link to={'/'} className="fetch-failed-link">Go Home</Link>
        </div>
    )
}