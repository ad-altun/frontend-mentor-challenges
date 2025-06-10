import { Link } from 'react-router'
import { useParams } from 'react-router'
// import { detailsPage } from "../service/api.ts"
import Header from '../components/Header.tsx';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from 'react';
import getCountries from '../service/api.ts';
import { DetailPageProps } from '../types/countries.ts';
import Loading from '../components/Loading.tsx';
import FetchFailed from './FetchFailed.tsx';

export default function Detail() {
    const [country, setCountry] = useState<DetailPageProps>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const fields: string[] = ["name", "languages", "capital", "region", "flags", "population", "currencies", "subregion", "borders"];
    const { name } = useParams();

    const getResp = async () => {
        setIsLoading(true);
        const response = await getCountries(`https://restcountries.com/v3.1/name/${name}?status=true&fields=${fields}`);
        const detailsPage = response.map((item) => {
            return {
                name: item.name,
                population: item.population,
                flags: item.flags,
                capital: item.capital,
                region: item.region,
                currencies: item.currencies,
                languages: item.languages,
                borders: item.borders,
                subregion: item.subregion,
                cca3: item.cca3,
                topLevelDomain: item.tld,
            } as DetailPageProps;
        });
        setCountry(detailsPage[0])
        setIsLoading(false);
    }

    useEffect(() => {
        let mounted: boolean = true;

        if (mounted) {
            getResp();
        };

        return () => {
            mounted = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!country) {
        return <FetchFailed />
    }

    const borderCountries = country.borders;

    // Extract first native name
    const nativeNameObject = country.name.nativeName;
    const firstNativeEntry = nativeNameObject
        ? Object.values(nativeNameObject)[0]
        : null;

    const currencyObject = country.currencies;
    const currencyEntries = currencyObject ? Object.values(currencyObject)[0].symbol : null;

    const languagesObject = country.languages;
    const languagesEntries = languagesObject ? Object.values(languagesObject) : null;

    return (
        <div className='details'>
            <Header />
            {
                isLoading
                    ?
                    <Loading />
                    :
                    <section className='details-section'>
                        <div className="back-button">
                            <IoMdArrowRoundBack />
                            <Link to={'/'}>Back</Link>
                        </div>
                        <div >
                            <div>
                                <img src={`${country.flags.png}`} alt={`${country.name.common} flag`} />
                            </div>
                            <div className="detail-area">
                                <h2 className="country-name">{`${country.name.common}`}</h2>
                                <div>
                                    <p className="details-item">
                                        Native Name: <span>{`${firstNativeEntry?.common || 'N/A'}`}</span>
                                    </p>
                                    <p className="details-item">Population: <span>{`${country.population.toLocaleString() || 'N/A'}`}</span></p>
                                    <p className="details-item">Region: <span>{`${country.region || 'N/A'}`}</span></p>
                                    <p className="details-item">Sub Region: <span>{`${country.subregion || 'N/A'}`}</span></p>
                                    <p className="details-item">Capital: <span>{`${country.capital || 'N/A'}`}</span></p>
                                </div>
                                <div className="detail-mid">
                                    <p className="details-item">Top Level Domain: <span>{`${country.topLevelDomain}`}</span></p>
                                    <p className="details-item">Currencies: <span>{`${currencyEntries || 'N/A'}`}</span></p>
                                    <p className="details-item">Languages: <span>{`${languagesEntries || 'N/A'}`}</span></p>
                                </div>
                                <div className="detail-border">
                                    <p className='details-item'>Border Countries: </p>
                                    <div className='border-countries'>
                                        {borderCountries && borderCountries.length > 0 ?
                                            borderCountries?.map((c, index) => {
                                                return (
                                                    <Link to={`/details/${c}`} key={index} className='border-links'>
                                                        <p>{c}</p>
                                                    </Link>
                                                )
                                            })
                                            :
                                            <p>N/A</p>}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
            }
        </div>
    )
}
