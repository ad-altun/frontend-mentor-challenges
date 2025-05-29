// import {  useState } from "react"
// import { homePage } from '../service/api.ts'
// import { type HomePageProps } from "../types/countries.ts"
import { Link } from "react-router"
import { HomePageProps } from "../types/countries.ts"


export default function Card({ name, population, region, capital, flags }: HomePageProps) {
    // const [countries, setCountries] = useState<HomePageProps[]>([])

    // useEffect(() => {
    //     setCountries(homePage);
    // }, [])

    //   const searchChangeHandler = (term: string) => {
    //     const searchInput: string = data.filter((country: HomePageProps) =>
    //       country.name.common.toLowerCase().includes(term.toLowerCase()));

    //     // const conditionToSearch: boolean = searchQuery.length === 0 || searchQuery.length > 2;
    //   }

    const handleClick = (name: string) => {
        onPressed(name);
        console.log(name)
    }

    return (
        <div>
            <Link to={`/details/`}>
                {
                    <div className="cardClass" onClick={() => handleClick(name.common)}>
                        <img src={flags.png}
                            alt={flags.alt}
                            className="card-flag" />
                        <div className="card-text">
                            <h2 className="nunito-font-800">{name.common}</h2>
                            <p>{`Population: ${population}`}</p>
                            <p>{`Region: ${region}`}</p>
                            <p>{`Capital: ${capital}`}</p>
                        </div>
                    </div>
                }
            </Link>
        </div>
    )

    // return (
    //     <div>
    //         {
    //             veriler.map((country, index) => {
    //                 return (
    //                     <div key={index} className="cardClass" >
    //                         <img src={country.flags.svg}
    //                             alt={country.flags.alt}
    //                             className="card-flag" />
    //                         <div className="card-text">
    //                             <h2 className="nunito-font-800">{country.name.common}</h2>
    //                             <p>{`Population: ${country.population}`}</p>
    //                             <p>{`Region: ${country.region}`}</p>
    //                             <p>{`Capital: ${country.capital}`}</p>
    //                         </div>
    //                     </div>
    //                 )
    //             })}
    //     </div>
    // )
}
