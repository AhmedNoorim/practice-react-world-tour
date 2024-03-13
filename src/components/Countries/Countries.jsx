import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        const FetchData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            // console.log(data);
            setCountries(data);
        };
        FetchData();
    }, []);

    const handleVisitedCountry = (country) => {
        // console.log("Add visited country:", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            {/* visited countries */}
            <div>
                <h4>Visited: {visitedCountries.length}</h4>
                <ul>
                    {visitedCountries.map((country, index) => (
                        <li key={index}>{country.name.common}</li>
                    ))}
                </ul>
            </div>

            {/* display country */}
            <div className="country-container">
                {countries.map((country) => (
                    <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}
                    ></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
