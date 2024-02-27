// Task Day 7
// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// a. Get all the countries from Asia continent /region using Filter function

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
    let countryData = JSON.parse(this.response);
    const asia = countryData.filter((element) =>
    {
        if (element.region === 'Asia')
        {
            console.log(element.name)
            }
    })
}





