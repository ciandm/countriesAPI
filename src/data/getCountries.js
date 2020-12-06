async function getCountries() {
  const data = await fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())

  return data;
}

export default getCountries;