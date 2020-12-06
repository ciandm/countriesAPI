async function getSearchResult(query) {
  let results = [];
  let error = null;

  try {
    await fetch(`https://restcountries.eu/rest/v2/name/${query}`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('Could not be found.')
        }
      })
      .then(res => {
        results = res.map(r => r);
      })
  } catch (e) {
    throw new Error(e);
  }

  return {
    results,
    error
  }
}

export default getSearchResult;