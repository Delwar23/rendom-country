fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => displayCountries(data))


const displayCountries = countries => {
    console.log(countries);
    const countriesDiv = document.getElementById('contries');
    for (let i = 0; i < countries.length; i++) {
        {
            const country = countries[i];



            const countryInfo = `
            <h3 class = 'countryName'>${country.name}</h3>
            <h5>${country.capital}</h5>
            <button onclick="countryDetails('${country.name}')" class = 'btn'>Details</button>
            `;
            const countryDiv = document.createElement('div');
            countryDiv.className = 'country';
            countryDiv.innerHTML = countryInfo
            countriesDiv.appendChild(countryDiv);


            // const name =document.createElement('h3');
            // name.innerText=country.name;
            // const capital =document.createElement('p');
            // capital.innerText=country.capital;
            // countryDiv.appendChild(name);
            // countryDiv.appendChild(capital);


            countryDetails = name => {
                const url = `https://restcountries.com/v2/name/${name}`
                fetch(url)
                    .then(res => res.json())
                    .then(data => countryInfoo(data[0]));

            }

            const countryInfoo =country=>{
                const countryDetails=document.getElementById('countryDetals');
                countryDetails.innerHTML=` 
                <h1>Country Name : ${country.name}</h1>
                <p>Population : ${country.population}</P>
                <p>Area : ${country.area}</P>
                <img src = "${country.flag}">

                `


            }

        }

    }

}
