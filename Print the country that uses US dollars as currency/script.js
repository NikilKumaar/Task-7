// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// e. Print the country that uses US dollars as currency

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all",true);
req.send();
req.onload = function ()
{
    let countryData = JSON.parse(this.response)
    //console.log(countryData)
    let usd = countryData.filter(x =>
    {
        if (x.currencies.USD)
        {
            console.log('NAME :-',x.name.common,x.currencies.USD)
            }
        })
    

    }
