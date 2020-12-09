async function getCountries(query) {
  let results = [];

  try {
    await fetch(`https://restcountries.eu/rest/v2${query}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        results = res.map(r => r);
      })
  } catch (e) {
    throw new Error(e);
  }

  return results;
}

export default getCountries;