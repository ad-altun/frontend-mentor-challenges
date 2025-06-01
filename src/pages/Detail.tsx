import { Link } from 'react-router'
import { useParams } from 'react-router'
import { detailsPage } from "../service/api.ts"
// import { DetailPageProps } from "../types/countries.ts";

export default function Detail() {
    // const [country, setCountry] = useState<DetailPageProps>();
    const { name } = useParams();
    const country = detailsPage.find(c => c.name.common === name);

    if (!country) return <p>Country not found!</p>

    // const borderCountryArrays = 

    const borderCountriesObject = country.borders?.filter(c => c === country.cioc);
    // const borderCountries: string[] = borderCountriesObject.map((border) => {
    //     return (
    //         border.name.common
    //     )
    // })

    console.log(borderCountriesObject)

    // Extract first native name
    const nativeNameObject = country.name.nativeName;
    const firstNativeEntry = nativeNameObject
        ? Object.values(nativeNameObject)[0]
        : null;

    const currencyObject = country.currencies;
    const currencyEntries = currencyObject ? Object.values(currencyObject)[0] : null;

    const languagesObject = country.languages;
    const languagesEntries = languagesObject ? Object.values(languagesObject) : null;

    // const borderCountriesArray = country.borders?.map((borderCountry) => {
    //     return borderCountry;
    // })

    return (
        <div>
            <div className="back-button">
                <i className="fa-solid fa-arrow-left-long"></i>
                <Link to={'/'}>Go Back</Link>
            </div>
            {
                <div>
                    <div className="flag-area">
                        <img src={`${country.flags.png}`} alt={`${country.name.common} flag`} />
                    </div>
                    <div className="detail-area">
                        <h2 className="country-name">{`${country.name.common}`}</h2>
                        <div className="detail-first">
                            <p className="item">
                                Native Name: <span>{`${firstNativeEntry?.common || 'N/A'}`}</span>
                            </p>
                            <p className="item">Population: <span>{`${country.population}`}</span></p>
                            <p className="item">Region: <span>{`${country.region}`}</span></p>
                            <p className="item">Sub Region: <span>{`${country.subregion}`}</span></p>
                            <p className="item">Capital: <span>{`${country.capital}`}</span></p>
                        </div>
                        <div className="detail second">
                            {/* <p className="item">Top Level Domain: <span>{`${detail.topLevelDomain}`}</span></p> */}
                            {/* <p className="item">Currencies: <span>{`${country.currencies}`}</span></p> */}
                            <p className="item">Currencies: <span>{`${currencyEntries?.name || 'N/A'}`}</span></p>
                            <p className="item">Languages: <span>{`${languagesEntries || 'N/A'}`}</span></p>
                        </div>
                        <div className="detail-third">
                            <p className='item'>Border Countries:
                                <span className='border-countries'>{borderCountries}</span>
                            </p>
                            {/* <p className="item">Border Countries:
                                {country.borders?.map((borderCountry, index) => {
                                    return (<span className='border-countries' key={index}>
                                        <Link to={`/${country.cioc === borderCountry}`} >
                                            {borderCountry}</Link>
                                    </span>);
                                })}</p> */}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

// image,
//     countryName,
//     nativeName,
//     population,
//     region,
//     subRegion,
//     capital,
//     topLevelDomain,
//     currencies,
//     languages,
//     borderCountries