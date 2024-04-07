var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function () {
    var data = request.response;
    var result = JSON.parse(data);
   // console.log(result);
 //a)  Get all the countries from Asia continent /region using Filter function

 const continents = result.map(country => country.continent || country.region)
 .filter((value, index, self) => self.indexOf(value) === index);

console.log('Unique continents/regions:', continents);

//b) Get all the countries with a population of less than 2 lakhs using Filter function

const countriespopulation = result.filter(country => country.population < 200000);
console.log('Countries with population less than 2 lakhs:');
    countriespopulation.forEach(country => {
      
      console.log('Population:', country.population);
      
}
    )
//c) Print the following details name, capital, flag, using forEach function
console.log('Details of each country:');
result.forEach(country => {
  console.log('Name:', country.name.common);
  console.log('Capital:', country.capital);
  console.log('Flag:', country.flags.svg);
  
});
// d)Print the total population of countries using reduce function
const totalPopulation = result.reduce((total, country) => total + country.population, 0);
    
console.log('Total population of countries:', totalPopulation);

// e)Print the country that uses US dollars as currency.
const countryWithUSD = result.filter(country => country.currencies && country.currencies.USD);
if (countryWithUSD.length > 0) {
  console.log('Country(s) that use(s) US dollars as currency:', countryWithUSD.map(country => country.name.common));
} else {
  console.log('No country uses US dollars as currency.');
}
}

