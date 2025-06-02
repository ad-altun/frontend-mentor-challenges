import {
  type Countries,
  HomePageProps,
  DetailPageProps,
} from "../types/countries";

const getCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");

  const data: Countries[] = await res.json();

  const homePage = data.map((item) => {
    return {
      name: item.name,
      population: item.population,
      flags: item.flags,
      capital: item.capital,
      region: item.region,
    } as HomePageProps;
  });
  // see video 480. Mapping the Response
  const detailsPage = data.map((item) => {
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
    } as DetailPageProps;
  });

  return {
    data,
    homePage,
    detailsPage,
  };
};
// see video 480. Mapping the Response
export const { data, homePage, detailsPage } = await getCountries();

// const data = await loadCountries() {
//     fetch('https://restcountries.com/v3.1/all')
//         .then((response) => response.json())
//         .then((data) => JSON.stringify(setCountries([...countries, data])))
//         .catch((error) => console.log(error))
// }
