import { useMemo, useState, useEffect } from "react";
import Header from "../components/Header.tsx";
import Card from "../components/Card.tsx"
import Search from '../components/Search.tsx'
import Filter from '../components/Filter.tsx'
import { getCountries } from '../service/api.ts'
import { HomePageProps } from "../types/countries.ts";
import Loading from "../components/Loading.tsx";
// import { Link } from "react-router";

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
    const [isLoading, setIsLoading] = useState<boolean>(true);
    // const [listed, setListed] = useState<HomePageProps[]>(homePage);

    // const getRes = useCallback(async () => {
    //     const response = await getCountries(`https://restcountries.com/v3.1/all}`);
    //     const homePage = response.map((item) => {
    //         return {
    //             name: item.name,
    //             population: item.population,
    //             flags: item.flags,
    //             capital: item.capital,
    //             region: item.region,
    //         } as HomePageProps;

    //     });
    //     // console.log(hus)
    //     setCountries(() => homePage);
    // }, []);

    // getRes()
    const fields: string[] = ["name", "language", "capital", "region", "flags", "population"];
    // console.log(fields.toString())

    const getRes = async () => {
        setIsLoading(true);
        const response = await getCountries(`https://restcountries.com/v3.1/independent?status=true&fields=${fields}`);
        // console.log(response)
        const homePage = response.map((item) => {
            return {
                name: item.name,
                population: item.population,
                flags: item.flags,
                capital: item.capital,
                region: item.region,
            } as HomePageProps;

        });
        setCountries(homePage);
        setIsLoading(false);
    };

    useEffect(() => {
        let mounted: boolean = true;

        // const getRes = async () => {
        //     if (mounted) {
        //         const response = await getCountries(`https://restcountries.com/v3.1/all}`);
        //         const homePage = response.map((item) => {
        //             return {
        //                 name: item.name,
        //                 population: item.population,
        //                 flags: item.flags,
        //                 capital: item.capital,
        //                 region: item.region,
        //             } as HomePageProps;

        //         });
        //         // console.log(hus)
        //         setCountries(homePage);
        //     }
        // };

        if (mounted) {
            getRes()
        };

        return () => {
            mounted = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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


    // console.log("sssss:   ", countries.length)
    return (
        <div className="home-page">
            <div className={`nunito-font-300`} >
                <Header />
            </div>
            <Search onChangeProb={Result.handleOnChange} />
            <Filter onSelect={Result.handleSelectedRegion} />
            {isLoading ? <Loading /> :
                (Result.currentCountries.length !== 0 ?
                    <div>
                        {
                            Result.currentCountries && Result.currentCountries.map((country, i) => {
                                return (
                                    <div key={i}>
                                        <Card name={country.name} population={country.population}
                                            region={country.region} capital={country.capital}
                                            flags={country.flags} isLoading={isLoading} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div className="search-failed">
                        <p className="search-failed-text">No country matched your search!</p>
                        {/* <Link to={'/'} className="go-back">Go Back</Link> */}
                    </div>)
            }
        </div>
    )
}

export default Home;