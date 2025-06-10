import {
  type Countries,
  HomePageProps,
  DetailPageProps,
} from "../types/countries";

// import dataJson from "../../data.json";

// export interface CompleteData {
//   success: boolean;
//   data: Countries[];
//   homePage: HomePageProps[];
//   detailsPage: DetailPageProps[];
// }

export interface FetchDataProps {
  success: boolean;
  data: Countries[];
  homePage: HomePageProps[];
  detailsPage: DetailPageProps[];
}

export default async function getCountries(url: string) {
  const res = await fetch(url);

  const success: boolean = res.ok;
  console.log(success);

  // const data: Countries[] = await (success ? await res.json() : dataJson);
  const data: Countries[] = await res.json();

  // console.log(data);
  return data;

  // const homePage = data.map((item) => {
  //   return {
  //     name: item.name,
  //     population: item.population,
  //     flags: item.flags,
  //     capital: item.capital,
  //     region: item.region,
  //   } as HomePageProps;
  // });
  // see video 480. Mapping the Response
  // const detailsPage = data.map((item) => {
  //   return {
  //     name: item.name,
  //     population: item.population,
  //     flags: item.flags,
  //     capital: item.capital,
  //     region: item.region,
  //     currencies: item.currencies,
  //     languages: item.languages,
  //     borders: item.borders,
  //     subregion: item.subregion,
  //     cca3: item.cca3,
  //     topLevelDomain: item.tld,
  //   } as DetailPageProps;
  // });

  // return {
  //   success,
  //   data,
  //   homePage,
  //   detailsPage,
  // };
}
// see video 480. Mapping the Response
// export const { success, data, homePage, detailsPage } = await getCountries(
//   "https://restcountries.com/v3.1/all"
// );

// export default await getCountries("https://restcountries.com/v3.1/all");
