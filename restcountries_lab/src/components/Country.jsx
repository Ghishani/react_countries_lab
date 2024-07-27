const Country = ({country, handleNewCountry}) => {

    const handleButtonClick = () => {
        handleNewCountry(country);
    }


    return (
        <div>
        <p>{country.name.common}</p>
        <button onClick={handleButtonClick}>Visit Country</button>
        </div>
        
    )
}

export default Country;