import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
    return (
        <div className="loading skeleton skeleton-card skeleton-loading">
            <div>
                <AiOutlineLoading3Quarters />
                <p>Loading ...</p>
            </div>
        </div>
    )
}