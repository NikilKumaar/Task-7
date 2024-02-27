// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// d. Print the total population of countries using reduce function

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () 
{
    const countryData = JSON.parse(this.response)
    const population = countryData.reduce((accumulator, currVal) =>
    {
        return accumulator+currVal.population
    },0)
    console.log(population)
    }
