async function getCountries() {
  let error;
  let data = [];

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
        data = res.map(r => r);
      })
  } catch (e) {
    error = 'Something went wrong.';
  }

  return {
    error,
    data
  }
}

export default getCountries;