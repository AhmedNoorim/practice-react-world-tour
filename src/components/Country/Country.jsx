import { useState } from "react";
import "./Country.css";
import CountryDetails from "../CountryDetails/CountryDetails";

const Country = ({ country, handleVisitedCountry }) => {
    // console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };

    return (
        <div className={`country ${visited && "visited"}`}>
            <h4 style={{ color: visited ? "Orange" : "white" }}>
                <small>Name: </small>
                {name?.common}
            </h4>
            <h4>
                <small>Population: </small>
                {population}
            </h4>
            <h4>
                <small>Area: </small>
                {area} sq-km
            </h4>
            <h4>
                <small>Code: </small>
                {cca3}
            </h4>
            <img src={flags?.png} alt="" />

            <button onClick={() => handleVisitedCountry(country)}>
                Mark as Visited
            </button>
            <br />
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <hr />
            <CountryDetails
                country={country}
                handleVisitedCountry={handleVisitedCountry}
            ></CountryDetails>
        </div>
    );
};

export default Country;
