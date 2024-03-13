import CountrySpec from "../CountrySpec/CountrySpec";

const CountryDetails = (props) => {
    const { country, handleVisitedCountry } = props;
    return (
        <div>
            <h4>
                <small>Country Details: </small>
                {country.name.common}
            </h4>
            <hr />
            <CountrySpec {...props}></CountrySpec>
        </div>
    );
};

export default CountryDetails;
