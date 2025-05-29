// import { type DetailPageProps } from "../types/countries.ts"
import { useState } from "react";
import { detailsPage } from "../service/api.ts"
import { DetailPageProps } from "../types/countries.ts";

export default function Detail({ onClick }) {
    const [country, setCountry] = useState<DetailPageProps>();

    const handleClick = () => {

    }

    return (
        <div>
            <div className="back-button">
                <i className="fa-solid fa-arrow-left-long"></i>
                <button>Back</button>
            </div>
            {
                detailsPage.map((detail, i) => {
                    // Extract first native name
                    const nativeNameObject = detail.name.nativeName;
                    const firstNativeEntry = nativeNameObject
                        ? Object.values(nativeNameObject)[0]
                        : null;
                    return (
                        <div key={i}>
                            <div className="flag-area">
                                <img src={`${detail.flags.png}`} alt={`${detail.name.common} flag`} />
                            </div>
                            <div className="detail-area">
                                <h2 className="country-name">{`${detail.name}`}</h2>
                                <div className="detail-first">
                                    <p className="item">
                                        Native Name: <span>{`${firstNativeEntry?.common || 'N/A'}`}</span>
                                    </p>
                                    <p className="item">Population: <span>{`${detail.population}`}</span></p>
                                    <p className="item">Region: <span>{`${detail.region}`}</span></p>
                                    <p className="item">Sub Region: <span>{`${detail.subregion}`}</span></p>
                                    <p className="item">Capital: <span>{`${detail.capital}`}</span></p>
                                </div>
                                <div className="detail second">
                                    {/* <p className="item">Top Level Domain: <span>{`${detail.topLevelDomain}`}</span></p> */}
                                    <p className="item">Currencies: <span>{`${detail.currencies}`}</span></p>
                                    <p className="item">Languages: <span>{`${detail.languages}`}</span></p>
                                </div>
                                <div className="detail-third">
                                    <p className="item">Border Countries<span>{`${detail.borders}`}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                })
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