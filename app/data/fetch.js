

const getMoviesFromApi = () => {
    return fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        return json.movies;
      })
      .catch(error => {
        console.error(error);
      });
};

//
export default getMoviesFromApi;

