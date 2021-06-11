import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import MovieRow from '../components/movieRow';

class MovieTable extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    const { movies: mv } = this.state;
    if (mv.length === 0) return <div className="alert alert-warning">There are no movies at the moment</div>;

    return (
      <div>
        <h3>Please see out movies</h3>
        <p>Showing {mv.length} movies in out store</p>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <MovieRow key={movie._id} movie={movie} onDelete={this.handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  handleDelete = (movieId) => {
    console.log('deleting movie', movieId);
    const moviesWithoutTheOneWeDeleted = this.state.movies.filter((m) => m._id !== movieId);
    this.setState({ movies: moviesWithoutTheOneWeDeleted });
  };
}

// 1 prisideti bootstrap@4.6
// 2 isitrauksim bootsrap css

// 3 sugeneruosi lentele su movie duomenimis
//https://getbootstrap.com/docs/4.6/content/tables/

// 4 prisideti dar viena stulpeli ir jamae turetu buti delete mygtukas

// 5 prisideti bootstrap ar ne bootsrap headeri kaip atskira komponenta i
// app.js virs lenteles komponento

// 6 prisideti footeri kaip atsikra komponenta zemiau lenteles
// footeryje turetu buti siandienos data dinamiskai

// 7 prisideti lorem trumpsum aside su antraste desinene nuo lenteles
// kaip atskira komponenta

export default MovieTable;
