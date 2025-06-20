interface SearchProps {
    onChange: (term: string) => void;
}


function SearchBar({ onChange }: SearchProps) {

    const handleChange = (ip: string) => {
        onChange(ip);
    }


    return (
        <main className="header-main">
            <div className="header">
                <h1>IP Address Tracker</h1>
                <div className="form">
                    <form action="" id="header-form" name="header-form"
                        className="header-form">
                        <input id="input" className="header-input" type="text"
                            placeholder="Search for any IP address or domain"
                            onChange={e => handleChange(e.target.value)} />
                        <button className="header-button" type="submit">
                            <img className="header-icon"
                                src="../../images/icon-arrow.svg"
                                alt="forward arrow icon" />
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default SearchBar