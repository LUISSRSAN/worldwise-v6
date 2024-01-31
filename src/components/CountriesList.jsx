import styles from "./CountriesList.module.css"
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import CountryItem from './CountryItem.jsx'
import Message from "./Message"
export default function CountriesList({cities,isLoading}) {

    if (isLoading)return <Spinner/>;

    if(!cities.length) return <Message message="Add your first city by clicking on a city on the map" />


const countries = cities.reduce((arr,city ) => {
     if(!arr.map(el=>el.country).includes(city.country))
         return [...arr,{country:city.country,emoji:city.emoji}];


else {return arr;}
}
,[] );


  return (
    <div>
      <ul className ={styles.countriesList}>
{countries.map((country) => <CountryItem city={country} key={country.country}/> )}


      </ul>

    </div>
  );
}