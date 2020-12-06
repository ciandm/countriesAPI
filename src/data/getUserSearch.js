async function getUserSearch(query) {
  const data = await fetch(`https://restcountries.eu/rest/v2/${query}`)
    .then
}