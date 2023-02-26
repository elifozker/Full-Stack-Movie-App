import { movies } from "../src/data";

const [movies,setMovies] = useState([]);

useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8800/genreMovies")
      .then((response) => { 
        return response.json() 
      })
      .then((json) => { 
        setMovies(json);
        setMovieAll(json);     
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


export function getMovies() {
  const movieList = movies;
  return movieList;
}

export function filterMovies(movieGenre) {
  let filtredMovie = getMovies().filter(type => type.genreTitle === movieGenre);
  return filtredMovie;
}

