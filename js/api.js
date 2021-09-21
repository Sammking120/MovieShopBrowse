class OMDB {

  constructor() {

    this.key = 'e1c3cdf3';


  }

  async getMovies() {

    const movieResponse = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&s=game
  `);
  console.log(movieResponse)

    const seriesResponse = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&s=series
  `);
  
    const movieResults = await movieResponse.json();
    const seriesResults = await seriesResponse.json();
    console.log(seriesResults);
    


    return {

      movie: movieResults.Search,
      series: seriesResults.Search

    }

  }

  async movieInfo(id) {


    const response = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&i=${id}`);
    
    const results = await response.json();
    
    return results;
   


  }


  async search(userText) {

    const response = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&s=${userText}`);
    const results = await response.json();

    return results.Search;
  }





}