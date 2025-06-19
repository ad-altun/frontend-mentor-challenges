function SearchBar() {
    return (
        <main className="header-main">
            <div className="header">
                <h1>IP Address Tracker</h1>
                <div className="form">
                    <form action="" id="header-form" name="header-form"
                        className="header-form">
                        <input id="inputt" className="header-input" type="text"
                            placeholder="Search for any IP address or domain" />
                        <button className="header-button" type="submit"></button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default SearchBar