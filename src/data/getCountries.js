async function getCountries() {
  let results = [];
  let error;

  try {
    await fetch('https://restcountries.eu/rest/v2/all')
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(res => {
        results = res.map(r => r);
      })
  } catch (e) {
    error = 'Something went wrong.';
  }

  return {
    results,
    error
  }
}

export default getCountries;