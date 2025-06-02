import { useMemo, useState, useEffect } from "react";
import Card from "../components/Card.tsx"
import Search from '../components/Search.tsx'
import Filter from '../components/Filter.tsx'
import { homePage } from '../service/api.ts'
import { HomePageProps } from "../types/countries.ts";

/*  Component includes:
    - Search, Filter, and Card components
    - also implements serch by country name and 
    - filter by region features 
*/
function Home() {
    // const countries = homePage;
    const [countries, setCountries] = useState<HomePageProps[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedRegion, setSelectedRegion] = useState<string>("All")
    // const [listed, setListed] = useState<HomePageProps[]>(homePage);

    useEffect(() => {
        setCountries(homePage);
    }, []);


    const Result = useMemo(() => {
        let currentCountries = countries;

        const handleSelectedRegion = (region: string) => {
            setSelectedRegion(region);
        }

        const handleOnChange = (query: string) => {
            setSearchTerm(query);
        }

        if (selectedRegion !== 'All') {
            currentCountries = currentCountries.filter(
                country => country.region === selectedRegion
            );
        }

        if (searchTerm) {
            currentCountries = currentCountries.filter(country =>
                country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // console.log(currentCountries)
        currentCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));

        return { currentCountries, handleSelectedRegion, handleOnChange };
    }, [countries, searchTerm, selectedRegion])


    return (
        <div>
            {Result.currentCountries ?
                <div>
                    <Search onChangeProb={Result.handleOnChange} />
                    <Filter onSelect={Result.handleSelectedRegion} />
                    {
                        Result.currentCountries.map((country, i) => {
                            return (
                                <div key={i}>
                                    <Card name={country.name} population={country.population}
                                        region={country.region} capital={country.capital}
                                        flags={country.flags} />
                                </div>
                            )
                        })
                    }</div>
                :
                <div className="search-failed">
                    <p className="search-failed-text">No country matched your search!</p>
                </div>
            }
        </div>
    )
}

export default Home;