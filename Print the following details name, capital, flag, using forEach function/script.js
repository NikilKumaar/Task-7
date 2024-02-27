// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// c. Print the following details name, capital, flag, using forEach function

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function ()
{
    const countryData = JSON.parse(this.response)
    const details = countryData.forEach(element => {
        console.log("NAME : ",element.name)
        console.log("CAPITAL : ",element.capital)
        console.log("FLAG : ",element.flag)
    });
    }
