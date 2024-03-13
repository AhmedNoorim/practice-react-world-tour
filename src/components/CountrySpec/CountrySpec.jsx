const CountrySpec = ({ country, handleVisitedCountry }) => {
    return (
        <div>
            <h5>
                <small>Country Data: </small> {country.name.common}
            </h5>
        </div>
    );
};

export default CountrySpec;
