import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class MovieTable extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    return (
      <div>
        <h3>Please see our movies</h3>
        <table className="table table-row">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((m) => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// prisideti bootstrap@4.6
// isitraukti bootstrap css

// sugeneruoti lentele su duomenimis
// https://getbootstrap.com/docs/4.6/content/tables/

//prisideti dar viena stulpelis ir jame turi buti delete mygtukas

export default MovieTable;
