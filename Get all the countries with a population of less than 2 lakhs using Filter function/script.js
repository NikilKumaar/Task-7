// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// b. Get all the countries with a population of less than 2 lakhs using Filter function

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function ()
{
    const countryData = JSON.parse(this.response)
    const population = countryData.filter((element) =>
    {
        if (element.population < 200000)
        {
            console.log('NAME :-',element.name.common,element.population)
            }
    })
    }
