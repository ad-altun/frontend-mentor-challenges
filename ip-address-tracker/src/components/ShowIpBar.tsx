
function ShowIpBar() {
    return (
        <main className="info-main">
            <div className="info-box">
                <div className="box">
                    <p className="box-text rubik-500">IP ADDRESS</p>
                    <h2 className="box-data rubik-700">192.212.174.101</h2>
                </div>
                <div className="box">
                    <p className="box-text rubik-500">LOCATION</p>
                    <h2 className="box-data rubik-700">Brooklyn, NY 10001</h2>
                </div>
                <div className="box">
                    <p className="box-text rubik-500">TIMEZONE</p>
                    <h2 className="box-data rubik-700">UTC -05:00</h2>
                </div>
                <div className="box">
                    <p className="box-text rubik-500">ISP</p>
                    <h2 className="box-data rubik-700">SpaceX Starlink</h2>
                </div>
            </div>
        </main>
    )
}

export default ShowIpBar