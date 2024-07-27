import Country from "./Country"

const CountriesComponents = ({countriesData, handleNewCountry}) => {

    const mappedCountries = countriesData.map(country => {
        return <Country 
                country={country}
                handleNewCountry={handleNewCountry}
                key={country.cca3}
                />
    })

    return(
    <section>
        {mappedCountries}
    </section>
    )
}

export default CountriesComponents;