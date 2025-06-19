
function ShowIpBar() {
    return (
        <main>
            <div className="info-box">
                <div className="box">
                    <p className="box-text">IP ADDRESS</p>
                    <h2 className="box-data"></h2>
                </div>
                <div className="box">
                    <p className="box-text">LOCATION</p>
                    <h2 className="box-data"></h2>
                </div>
                <div className="box">
                    <p className="box-text">TIMEZONE</p>
                    <h2 className="box-data"></h2>
                </div>
                <div className="box">
                    <p className="box-text">ISP</p>
                    <h2 className="box-data"></h2>
                </div>
            </div>
        </main>
    )
}

export default ShowIpBar