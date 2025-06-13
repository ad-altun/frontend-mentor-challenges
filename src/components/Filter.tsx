// import { homePage } from "../service/api";

interface FilterProps {
    onSelect: (term: string) => void
}

export default function Filter({ onSelect }: FilterProps) {

    // use 'Set' store unique values of Regions
    // const regions: string[] = [...new Set(homePage.map((item) => item.region!))];

    const filterChangeHandler = (region: string) => {
        onSelect(region)
        // const selectedRegion = homePage.filter((country) => country.region === region)
        // return selectedRegion
    }

    return (
        <main className="filter-area">
            <div   >
                <select name="" id="select-filter" className="select-filter"
                    onChange={e => { filterChangeHandler(e.target.value) }}>
                    <option value="All">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    {/* {regions.map((region: string, i) => {
                        return (
                            <option key={i} value={`${region}`}>{region}</option>
                        )
                    })} */}
                </select>
            </div>
        </main>
    )
}